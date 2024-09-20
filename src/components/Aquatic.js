import React from "react";
import './Aquatic.css'; 
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function Aquatic() {

    const dispatch = useDispatch();
   

    const allAquatic = [
        {
            id: 1,
            image: "https://fragranceandbeyond.com/wp-content/uploads/2024/07/1-600x600.jpg",
            name: "Fragrance & Beyond",
            description: "Sensory Treat Timeless Hamper",
            price: 798,
        },
        {
            id: 2,
            image: "https://fragranceandbeyond.com/wp-content/uploads/2024/08/A7406261-600x600.jpg",
            name: "Versus",
            description: "Globetrotter Men's Perfume Gift Set",
            price: 1700,
        },
        {
            id: 3,
            image: "https://fragranceandbeyond.com/wp-content/uploads/2024/08/A7406245-600x600.jpg",
            name: "Ombree",
            description: "Travel Buff Men's Perfume Gift Set",
            price: 1888,
        },
        {
            id: 4,
            image: "https://fragranceandbeyond.com/wp-content/uploads/2024/08/1-600x600.jpg",
            name: "Fragrance & Beyond",
            description: "Aromatic Essential Gift Set",
            price: 998,
        },
        {
            id: 5,
            image: "https://fragranceandbeyond.com/wp-content/uploads/2024/08/A7406391-600x600.jpg",
            name: "Guilty & Adore",
            description: "Guilty Adore Gift Set For Couple",
            price: 2000,
        },
        {
            id: 6,
            image: "https://fragranceandbeyond.com/wp-content/uploads/2024/08/A7406507-600x600.jpg",
            name: "Versus & Moiway",
            description: "Versus Moiway Gift For Couple",
            price: 2100,
        },
        {
            id: 7,
            image: "https://www.perfume24x7.com/cdn/shop/products/Versace_Man_Eau_Fraiche_A.jpg?v=1622734474&width=720",
            name: "Versus & Moiway",
            description: "Versace Man Eau Fraiche Couple",
            price: 2750,
        },
        {
            id: 8,
            image: "https://www.perfume24x7.com/cdn/shop/products/Nautica_Blue_EDT_1.jpg?v=1628580079&width=720",
            name: "Versus & Moiway",
            description: "Nautica Blue Eau Dit For Couple",
            price: 2690,
        },
    ];

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };

    return (
        <div className="aqu-cont">
        <div className="aqu-container">
            <div className="aquatic">
                <img src="https://fragranceandbeyond.com/wp-content/uploads/2024/07/PHOTO-2024-07-04-16-39-48.jpg" alt="wait"/>
            </div>
        <div className="aquatic-container">
            {allAquatic.map(product => (
                <div key={product.id} className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>₹{product.price}</p>
                        </div>
                        <div className="card-back">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>₹{product.price}</p>
                            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>                       
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
        </div>
    );
}

export default Aquatic;
