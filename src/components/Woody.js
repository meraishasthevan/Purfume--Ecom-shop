import React from "react";
import './Woody.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function Woody(){
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };

    const allWoody=[
        {
            id:1,
            image:"https://ramsonsperfumes.com/cdn/shop/products/Stud-Post_03_1200x.jpg?v=1713157115",
            name:"Woody Eau De Parfum",
            description:"Stud Bottle Deodorant Spray 200ML",
            price:4590,
        },
        {
            id:2,
            image:"https://ramsonsperfumes.com/cdn/shop/products/OnceMor-Post_01_1200x.jpg?v=1681192233",
            name:"Woody Eau De Parfum",
            description:"Oncemore Deodorant Spray 200ML",
            price:4590,
        },
        {
            id:3,
            image:"https://ramsonsperfumes.com/cdn/shop/products/Rhymes_Post-04_1200x.jpg?v=1681192610",
            name:"Woody Eau De Parfum",
            description:"Rhymes Deodorant Spray 200ML",
            price:4590,
        },
        {
            id:4,
            image:"https://ramsonsperfumes.com/cdn/shop/files/Inferno-Post-02_1200x.jpg?v=1712047983",
            name:"Woody Eau De Parfum",
            description:"Inferno Deodorant Spray 130ML",
            price:4590,
        },
        {
            id:5,
            image:"https://ramsonsperfumes.com/cdn/shop/files/CalmAura-Post-04_1200x.jpg?v=1684394421",
            name:"Woody Eau De Parfum",
            description:"CalmAura Deodorant Spray 130ML",
            price:4590,
        },
        {
            id:6,
            image:"https://ramsonsperfumes.com/cdn/shop/files/NaturalTrail_Post-04_1200x.jpg?v=1684394339",
            name:"Woody Eau De Parfum",
            description:"Natural Trial Deodorant Spray 130ML",
            price:4590,
        },
        {
            id:7,
            image:"https://ramsonsperfumes.com/cdn/shop/files/RainDrops-Post-03_1200x.jpg?v=1684394282",
            name:"Woody Eau De Parfum",
            description:"Rain Drops Deodorant Spray 130ML",
            price:4590,
        },
        {
            id:8,
            image:"https://ramsonsperfumes.com/cdn/shop/products/SecretCode-Post-01_1200x.jpg?v=1681192827",
            name:"Woody Eau De Parfum",
            description:"Secret Code Deodorant Spray 200ML",
            price:4590,
        },
    ]
    return(
        <div className="woody-container">
        <div className="woody-banner">
            <img src="https://thefragrancebook.com/cdn/shop/files/manasik_79a35405-0200-4d51-88ff-70424038bf35_1920x600_crop_center.jpg?v=1724228249" alt="Woody Banner" />
        </div>
        <div className="woody-card-section">
            {allWoody.map(item => (
                <div className="woody-card" key={item.id}>
                    <img src={item.image} alt={item.name} className="woody-card-image" />
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className="woody-card-price">₹{item.price}</p>
                        <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>                        

                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}
export default Woody;