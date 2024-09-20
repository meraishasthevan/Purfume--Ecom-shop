import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "./cartSlice"; // Import necessary actions
import './Cart.css';

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items); // Get cart items from Redux
    const [isFormVisible, setFormVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleProceed = () => {
        setFormVisible(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your Product Was Sucessfully Purchased!");
        dispatch(clearCart());
       
        setFormVisible(false);
        setName('');
        setEmail('');
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>₹{item.price}</p>
                                <div className="cart-quant">
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h2>Total: ₹{totalAmount}</h2>
                    <button onClick={handleProceed}>Proceed</button>
                </div>
            )}
            {isFormVisible && (
                <div className="form-container">
                    <h2>Submit Your Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Cart;
