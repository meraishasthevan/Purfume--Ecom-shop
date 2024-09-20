import React from "react";
import './Card.css';
import { useNavigate } from 'react-router-dom'; 

function Card() {
    const navigate=useNavigate();

    const handleAquatic=()=>{
        navigate("/aquatic") 
        window.scroll(0,0);
    }
    const handleCitrus=()=>{
        navigate("/citrus")
        window.scroll(0,0);
    }
    const handleAromatic=()=>{
        navigate("/aromatic")
        window.scroll(0,0);
    }
    const handleWoody=()=>{
        navigate("/woody")
        window.scroll(0,0);
    }
    const handleFloral=()=>{
        navigate("/floral")
        window.scroll(0,0);
    }
    const handleSpicy=()=>{
        navigate("/spicy")
        window.scroll(0,0);
    }
    const handleFruity=()=>{
        navigate("/fruity")
        window.scroll(0,0);
    }
    const handleOriental=()=>{
        navigate("/oriental")
        window.scroll(0,0);
    }
    return (
        <div className="card-cont">
            <h1>shop by notes</h1>
        <div className="card-container">
             
            <div className="card" onClick={handleAquatic}>
                <img src="https://www.perfume24x7.com/cdn/shop/collections/1.png?v=1674481709&width=540" alt="Product 1" />
                <h1>Aquatic</h1>
            </div>
            <div className="card" onClick={handleCitrus}>
                <img src="https://www.perfume24x7.com/cdn/shop/collections/2.png?v=1674481761&width=720" alt="Product 2" />
                <h1>Citrus</h1>
            </div>
            <div className="card" onClick={handleAromatic}>
                <img src="https://www.perfume24x7.com/cdn/shop/collections/8.png?v=1674481180&width=720" alt="Product 3" />
                <h1>Aromatic</h1>
            </div>
            <div className="card" onClick={handleWoody}>
                <img src="https://www.perfume24x7.com/cdn/shop/collections/4.png?v=1674481483&width=720" alt="Product 4" />
                <h1>Woody</h1>
            </div>
            <div className="card" onClick={handleFloral}>
                <img src="https://www.perfume24x7.com/cdn/shop/collections/3.png?v=1674481267&width=720" alt="Product 5" />
                <h1>Floral</h1>
            </div>
            <div className="card" onClick={handleSpicy}>
                <img src="https://www.perfume24x7.com/cdn/shop/collections/6.png?v=1674481397&width=720" alt="Product 6" />
                <h1>Spicy</h1>
            </div>
            <div className="card" onClick={handleFruity}>
                <img src="https://www.perfume24x7.com/cdn/shop/collections/5.png?v=1674481523&width=720" alt="Product 7" />
                <h1>Fruity</h1>
            </div>
            <div className="card" onClick={handleOriental}>
                <img src="https://www.perfume24x7.com/cdn/shop/collections/7.png?v=1674481639&width=720" alt="Product 8" />
                <h1>Oriental</h1>
            </div>
        </div>
        </div>
    );
}

export default Card;
