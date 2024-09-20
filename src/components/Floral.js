import React from "react";
import './Floral.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function Floral(){
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };

    const allFloral=[
        {
            id:1,
            image:"https://www.perfume24x7.com/cdn/shop/products/Calvin_Klein_Eternity_EDP_For_Women_100ml.jpg?v=1569273158&width=720",
            name:"Floral Eau De Parfum",
            description:"Calvin Klein CK Eternity Parfum For Women",
            price:4590,
        },
        {
            id:2,
            image:"https://www.perfume24x7.com/cdn/shop/products/Gucci_FloraEDT_75ml.jpg?v=1644915421&width=720",
            name:"Floral Eau De Parfum",
            description:"Gucci Flora Toilette For Women 100 ML",
            price:4590,
        },
        {
            id:3,
            image:"https://www.perfume24x7.com/cdn/shop/products/MissDiorBloomingBouquetEDTForWomenA.jpg?v=1641808098&width=1080",
            name:"Floral Eau De Parfum",
            description:"Miss Dior Blooming Bouquet For Women",
            price:4590,
        },
        {
            id:4,
            image:"https://www.perfume24x7.com/cdn/shop/files/ValentinoBornInRomaDonnaYellowDreams.jpg?v=1688476931&width=1080",
            name:"Floral Eau De Parfum",
            description:"Valentino Born In Roma Donna Yellow Dreams",
            price:4590,
        },
        {
            id:5,
            image:"https://www.perfume24x7.com/cdn/shop/products/LoveStoryByChloeEauDeToilette75mlForWomen.jpg?v=1665122794&width=720",
            name:"Floral Eau De Parfum",
            description:"Love Story By Chole Eau De Toilette 75 ML",
            price:4590,
        },
        {
            id:6,
            image:"https://www.perfume24x7.com/cdn/shop/products/Victoria_sSecretBombshellPassionEDPB.jpg?v=1618577474&width=720",
            name:"Floral Eau De Parfum",
            description:"Victoria Secret Bomb Shell Passing 100 ML",
            price:4590,
        },
        {
            id:7,
            image:"https://www.perfume24x7.com/cdn/shop/products/DGDOLCE-EDP-WOMENA.jpg?v=1624383530&width=720",
            name:"Floral Eau De Parfum",
            description:"Dolce & Gabbana Eau De For Women 75 ml",
            price:4590,
        },
        {
            id:8,
            image:"https://www.perfume24x7.com/cdn/shop/products/UnitedColorsofBenettonColorsWomanRoseEauDeToiletteA.jpg?v=1669712600&width=720",
            name:"Floral Eau De Parfum",
            description:"United Color Sof Benetton Color Woman Rose",
            price:4590,
        },
    ]
    return(
        <div className="floral-container">
        <div className="floral-banner">
          <img
            src="https://www.ahmedalmaghribi.com/wp-content/uploads/elementor/thumbs/Wholesale-Banner--qtjuztq8hiwwy27fwzc8ssenbv8f2jcq2alsjtklso.jpg"
            alt="Floral perfumes banner"
          />
        </div>
        <div className="floral-grid">
          {allFloral.map((item) => (
            <div className="floral-card" key={item.id}>
              <img src={item.image} alt={item.name} className="floral-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ₹{item.price}</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>                        
              </div>
          ))}
        </div>
      </div>
    )
}
export default Floral;