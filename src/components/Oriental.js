import React from "react";
import './Oriental.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function Oriental(){
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };

    const allOriental=[
        {
            id:1,
            image:"https://www.perfume24x7.com/cdn/shop/products/Versace_Crystal_Noir_Edt_A.jpg?v=1622734507&width=720",
            name:"Oriental Fragance",
            description:"Versace Crystal Noir Eau De Toilette Parfum ",
            price:6500,
        },
        {
            id:2,
            image:"https://www.perfume24x7.com/cdn/shop/products/Dolce_Gabbana_The_Only_One_EDP_For_Women_A_6bfd1a20-ff32-4ef1-b546-9f2b38ade3dc.jpg?v=1622729722&width=720",
            name:"Oriental Fragance",
            description:"Dolce Gabbana The Only One EDP Women",
            price:6490,
        },
        {
            id:3,
            image:"https://www.perfume24x7.com/cdn/shop/products/BurberryBritMenA.jpg?v=1628083434&width=720",
            name:"Oriental Fragance",
            description:"BurBerry Brit Men Eau De Parfum 100 Ml",
            price:6890,
        },
        {
            id:4,
            image:"https://www.perfume24x7.com/cdn/shop/products/DiorSauvageEDP.jpg?v=1595598043&width=720",
            name:"Oriental Fragance",
            description:"Dior Sauvage Eau De Parfum For Women",
            price:6000,
        },
        {
            id:5,
            image:"https://www.perfume24x7.com/cdn/shop/products/Untitled-1-26.jpg?v=1620819945&width=720",
            name:"Oriental Fragance",
            description:"Issey Miyake Pure Petaley Nector De Parfum ",
            price:6730,
        },
        {
            id:6,
            image:"https://www.perfume24x7.com/cdn/shop/files/GiorgioArmaniAcquaDiGioiaEauDeParfumForWomen.jpg?v=1691674932&width=720",
            name:"Oriental Fragance",
            description:"Paco Rabanne Pure Xs Deodorant Eau De Parfum",
            price:7340,
        },
        {
            id:7,
            image:"https://www.perfume24x7.com/cdn/shop/products/Black_Xs_Paco_RabbaneEDT.jpg?v=1631718617&width=720",
            name:"Oriental Fragance",
            description:"Black Xs Paco Rabbane Eau De Toilette Parfum",
            price:9000,
        },
        {
            id:8,
            image:"https://www.perfume24x7.com/cdn/shop/products/ANTONIOBANDERASHERSECRETEAUDETOILETTE80ML.jpg?v=1638001400&width=720",
            name:"Oriental Fragance",
            description:"Antonio Bandears Her Secret Eau De Parfum",
            price:2670,
        },
    ]
    return(
        <div className="oriental-container">
        <div className="oriental-banner">
            <img src="https://www.skinn.in/on/demandware.static/-/Sites/default/dw596e105c/images/plp-banner/Gifting%20PLP_1476x300_Skinn.png" alt="wait" />
        </div>
        <div className="oriental-card-container">
            {allOriental.map(item => (
                <div key={item.id} className="oriental-card">
                    <img src={item.image} alt={item.name} className="oriental-image" />
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
export default Oriental;