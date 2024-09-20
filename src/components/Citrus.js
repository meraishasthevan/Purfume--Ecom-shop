import React from "react";
import './Citrus.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function Citrus(){
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };

    const allCitrus=[
        {
            id:1,
            image:"https://ramsonsperfumes.com/cdn/shop/files/U.R.LOVELYBOTTEL_1_540x.png?v=1704432161",
            name:"Citrus Eau Parfum",
            description:"U.R.Lovley - Eau Parfum 100ML ",
            price:4590,
        },
        {
            id:2,
            image:"https://ramsonsperfumes.com/cdn/shop/products/SEXY-HEART-bottle-100ml_540x.png?v=1677656447",
            name:"Citrus Eau Parfum",
            description:"Heart Eau De Parfum 100ML",
            price:930,
        },
        {
            id:3,
            image:"https://ramsonsperfumes.com/cdn/shop/products/VALLEY-GIRL-bottle-100ml_540x.png?v=1677664460",
            name:"Citrus Eau Parfum",
            description:"Valley Girl Eu De parfume 100ML",
            price:850,
        },
        {
            id:4,
            image:"https://ramsonsperfumes.com/cdn/shop/products/SCENT-OF-LOVE-100ml_540x.png?v=1677664317",
            name:"Citrus Eau Parfum",
            description:"Scent Of Love Eau De Parfum",
            price:876,
        },
        {
            id:5,
            image:"https://ramsonsperfumes.com/cdn/shop/products/SCENT-OF-BLOOM-100ml_540x.png?v=1677663394",
            name:"Citrus Eau Parfum",
            description:"Scent Of Bloom Eau De Parfum",
            price:420,
        },
        {
            id:6,
            image:"https://ramsonsperfumes.com/cdn/shop/products/SANDY-SHORE-bottle-100ml_360x.png?v=1677656444",
            name:"Citrus Eau Parfums",
            description:"Sandy Shore Bootle - 100ML",
            price:590,
        },
        {
            id:7,
            image:"https://ramsonsperfumes.com/cdn/shop/products/LA-FELLE-bottle-100ml_360x.png?v=1677656147",
            name:"Citrus Eau Parfum",
            description:"La Felle Eau De Parfum",
            price:328,
        },
        {
            id:8,
            image:"https://ramsonsperfumes.com/cdn/shop/products/U-R-LOVELY-bottle-30ml_180x.png?v=1713004692",
            name:"Citrus Eau Parfum",
            description:"U.R.Lovely Eau De Parfume 300ML",
            price:957,
        },
        
    ]
    return(
        <div className="citrus-container">
        <div className="citrus-banner">
            <img src="https://in.ajmal.com/cdn/shop/files/Premium-Collection1.jpg?v=1719818604" alt="Banner" />
        </div>
        <div className="citrus-card-section">
            {allCitrus.map(item => (
                <div className="citrus-card" key={item.id}>
                    <img src={item.image} alt={item.name} className="citrus-card-image" />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="citrus-card-price">₹{item.price}</p>
                    <button className="citrus-add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>                        

                </div>
            ))}
        </div>
    </div>
    );
}
export default Citrus;