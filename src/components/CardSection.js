import React from "react";
import './CardSection.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function CardSection() {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };
    const Cards = [
        {
            id: 1,
            image: 'https://ramsonsperfumes.com/cdn/shop/files/PremiumMen20mlPlainTile1copy_540x.jpg?v=1711778882',
            name:"New Arrivals",
            description: 'Ramsons Premium For Men-Roar, Enigma, Closer, Passion 80ML',
            price: 454,
            label: '-30%'
        },
        {
            id: 2,
            image: 'https://ramsonsperfumes.com/cdn/shop/files/EXOTICAGLAMBOTTLE1080X1080_540x.jpg?v=1712567364',
            name:"New Arrivals",
            description: 'Exotica Glam - Eau De Parfum, Daisy, Deiser Combo Collection - 100ML',
            price: 455,
            label: '-30%'
        },
        {
            id: 3,
            image: 'https://ramsonsperfumes.com/cdn/shop/files/VIBRANT_7_540x.jpg?v=1692854296',
            name:"New Arrivals",
            description: 'Vibrant Luxury Collection - Eau De Parfume - 70Ml - Set Of Collection 7',
            price: 967,
            label: '-30%'
        },
        {
            id: 4,
            image: 'https://ramsonsperfumes.com/cdn/shop/files/PremiumWomen20mlPlainTile1copy_540x.jpg?v=1711779548',
            name:"New Arrivals",
            description: 'Ramsons Premium For Women - Blush Victoria, Daisy, Desire 80ML Combo',
            price: 454,
            label: '-30%'
        },
    ];

    return (
        <div>
            <div className="cardsection-header">
                <p>Shop by</p>
                <h1>New arrivals</h1>
            </div>
            
            <div className="cardsection-container">
                <div className="cards-wrapper">
                    {Cards.map(card => (
                        <div key={card.id} className="sec-card">
                            <img src={card.image} alt={card.name} className="card-image" />
                            <div className="card-seccontent">
                                <span>{card.name}</span>
                                <span>{card.description}</span>
                                <p>Price: ₹{card.price}</p>
                                <span className="label">{card.label}</span>
                                <button className="add-to-cart" onClick={() => handleAddToCart(card)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardSection;
