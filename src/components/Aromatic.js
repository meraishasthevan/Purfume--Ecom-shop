import React from "react";
import './Aromatic.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function Aromatic(){
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };

    const allAromatic=[
        {
            id:1,
            image:"https://ramsonsperfumes.com/cdn/shop/products/BULLET-bottle-100ml_180x.png?v=1677656038",
            name:"Aromatic Eau De Parfum",
            description:"Bullet Bottle - Eau De Parfum 100ML",
            price:2940,
        },
        {
            id:2,
            image:"https://ramsonsperfumes.com/cdn/shop/products/COOL-SPARK-bottle-100ml_180x.png?v=1677656049",
            name:"Aromatic Eau De Parfum",
            description:"Cool Spark Eau De Parfum 100ML",
            price:248,
        },
        {
            id:3,
            image:"https://ramsonsperfumes.com/cdn/shop/products/LA-OPALE-bottle-100ml_180x.png?v=1677656184",
            name:"Aromatic Eau De Parfum",
            description:"La Opale Eau De Parfume 100ML",
            price:1583,
        },
        {
            id:4,
            image:"https://ramsonsperfumes.com/cdn/shop/products/RHYMES-bottle-100ml_180x.png?v=1677656413",
            name:"Aromatic Eau De Parfum",
            description:"Rhymes Eau De Parfume 100ML",
            price:3845,
        },
        {
            id:5,
            image:"https://ramsonsperfumes.com/cdn/shop/products/STUD-bottle-100ml_180x.png?v=1677664417",
            name:"Aromatic Eau De Parfum",
            description:"Stud Eau De Parfume 100ML",
            price:256,
        },
        {
            id:6,
            image:"https://ramsonsperfumes.com/cdn/shop/products/SECRET-CODE-bottle-100ml_180x.png?v=1677656476",
            name:"Aromatic Eau De Parfum",
            description:"Secret Code Eau De Parfume 100ML",
            price:786,
        },
        {
            id:7,
            image:"https://ramsonsperfumes.com/cdn/shop/files/MontesaBottle_180x.png?v=1704431055",
            name:"Aromatic Eau De Parfum",
            description:"Montesa Eau De Parfume 100ML",
            price:2798,
        },
        {
            id:8,
            image:"https://ramsonsperfumes.com/cdn/shop/products/Black-Wallet-bottle-100ml_180x.png?v=1677657566",
            name:"Aromatic Eau De Parfum",
            description:"Black Wallet Eau De Parfume 100ML",
            price:3458,
        },
    ]
    return(
        <div className="aromatic-container">
            <div className="aromatic-banner">
                <img src="https://fragranceandbeyond.com/wp-content/uploads/2024/04/PHOTO-2024-03-07-17-49-33-3.jpg" alt="Aromatic Banner" />
            </div>
            <div className="aromatic-card-section">
                {allAromatic.map(item => (
                    <div className="aromatic-card" key={item.id}>
                        <img src={item.image} alt={item.name} className="aromatic-card-image" />
                        <div className="aromatic-card-text">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <div className="aromatic-card-content">
                                <p className="aromatic-card-price">₹{item.price}</p>
                                <button className="aromatic-add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>                        

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Aromatic;