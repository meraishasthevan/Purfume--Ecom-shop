import React from "react";
import './Fruity.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function Fruity(){
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };

    const allFruity=[
        {
            id:1,
            image:"https://www.perfume24x7.com/cdn/shop/products/BvlgariMaryKatrantzouOmniaEauDeParfum65ml_1800x1800_b879221a-8ee8-4c90-bab4-1d93eec4d727.jpg?v=1635495381&width=720",
            name:"Fruity & Warm",
            description:"BVLGari Omnia Floral By Mary Kartan 65ml",
            price:7200,
        },
        {
            id:2,
            image:"https://www.perfume24x7.com/cdn/shop/products/AmalfiBluewomenB.jpg?v=1626266679&width=720",
            name:"Fruity & Warm",
            description:"Amal Fi Blue Women B Eau De Parfum",
            price:7000,
        },
        {
            id:3,
            image:"https://www.perfume24x7.com/cdn/shop/products/VictoriasSecretDreamAngelmist.jpg?v=1623743017&width=720",
            name:"Fruity & Warm",
            description:"Victoria Secret Dream Angel Mist Parfum",
            price:8500,
        },
        {
            id:4,
            image:"https://www.perfume24x7.com/cdn/shop/products/BURBERRYBRITEAUDETOILETTEFORWOMEN.jpg?v=1640069489&width=720",
            name:"Fruity & Warm",
            description:"Bur Berry Brit Eau De Toilette For Women",
            price:1990,
        },
        {
            id:5,
            image:"https://www.perfume24x7.com/cdn/shop/products/La_Nuit_Tresor_Eau_de_Toilette_For_Women_100ml_A.jpg?v=1626279770&width=720",
            name:"Fruity & Warm",
            description:"La Nuit Tresor Eau De Toilette For Women 100ml",
            price:3500,
        },
        {
            id:6,
            image:"https://www.perfume24x7.com/cdn/shop/products/Untitled-1-79.jpg?v=1623069489&width=720",
            name:"Fruity & Warm",
            description:"Nomade Apsulo De Parfum By Chole For Women 75ml",
            price:9850,
        },
        {
            id:7,
            image:"https://www.perfume24x7.com/cdn/shop/products/Victoria_sSecretBombshellGoldEauDePerfume.jpg?v=1644051994&width=720",
            name:"Fruity & Warm",
            description:"Victoria Secret Bomb Shell Gold Eau De Perfum",
            price:3900,
        },
        {
            id:8,
            image:"https://www.perfume24x7.com/cdn/shop/products/Miss_Lomani_EDP_100ml.jpg?v=1594584038&width=720",
            name:"Fruity & Warm",
            description:"Miss Lomani Eau De Parfum For Women 100ml",
            price:4800,
        },
    ]
    return(
        <div className="fruity-container">
        <div className="fruity-banner">
            <img src="https://hvnlyonline.com/cdn/shop/files/Hero_Banner.jpg?v=1716274366&width=2000" alt="wait" />
        </div>
        <div className="fruity-card-container">
            {allFruity.map(item => (
                <div key={item.id} className="fruity-card">
                    <img src={item.image} alt={item.name} className="fruity-image" />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="price">₹{item.price}</p>
                    <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>                        
                </div>
            ))}
        </div>
    </div>
    )
}
export default  Fruity;