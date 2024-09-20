import React from "react";
import './Spicy.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function Spicy(){
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };

    const allSpicy=[
        {
            id:1,
            image:"https://www.perfume24x7.com/cdn/shop/products/AZZAROWANTEDBYNIGHTEAUDEPARFUMFORMEN100ML.jpg?v=1638016663&width=720",
            name:"Warm & Spicy",
            description:"Azzaro Wanted By Night Eau De Parfum For Men",
            price:4840,
        },
        {
            id:2,
            image:"https://www.perfume24x7.com/cdn/shop/products/Untitled-1-74.jpg?v=1623850198&width=720",
            name:"Warm & Spicy",
            description:"Dolce Gabbana & The One Eau Toilette Parfum ",
            price:7200,
        },
        {
            id:3,
            image:"https://www.perfume24x7.com/cdn/shop/products/Bvlgari_Wood_Essence_Edp_A_1800x1800_60f605f7-efc5-4097-81b7-530a39203445.jpg?v=1636444724&width=720",
            name:"Warm & Spicy",
            description:"BvlGari Wood Essence Eau De Parfum For Men",
            price:9346,
        },
        {
            id:4,
            image:"https://www.perfume24x7.com/cdn/shop/products/BURBERRYLONDONEAUDETOILETTEFORMEN100ML_7e35e1dc-dae7-4825-8058-0c34964e9f8c.jpg?v=1640164464&width=720",
            name:"Warm & Spicy",
            description:"Bur Berry lOndon Eau De Parfume Men 100 Ml",
            price:2349,
        },
        {
            id:5,
            image:"https://www.perfume24x7.com/cdn/shop/products/Jean_Paul_Gaultier_Le_Male_A.jpeg?v=1631278353&width=720",
            name:"Warm & Spicy",
            description:"Jean Paul Gaultier Le Male Parfum 100 Ml",
            price:6547,
        },
        {
            id:6,
            image:"https://www.perfume24x7.com/cdn/shop/products/HugoBossJustdifferentForMen.jpg?v=1631620306&width=720",
            name:"Warm & Spicy",
            description:"Hugo Boss Just Different For Men 100 Ml",
            price:9678,
        },
        {
            id:7,
            image:"https://www.perfume24x7.com/cdn/shop/products/ANTONIOBANDERASBLACKSEDUCTIONEAUDETOILETTEFORMEN100ML.jpg?v=1637999756&width=720",
            name:"Warm & Spicy",
            description:"Antonio Bandera SB Lacks Eduction For Men 100 ",
            price:10456,
        },
        {
            id:8,
            image:"https://www.perfume24x7.com/cdn/shop/products/ARMAFCLUBDENUITURBANMAN105MLEAUDEPARFUM.jpg?v=1636788962&width=720",
            name:"Warm & Spicy",
            description:"Armaf Club De Nuit Turban mna 105 Ml Eau De ",
            price:2359,
        },
    ]
    return(
        <div className="spicy-container">
        <div className="spicy-banner">
          <img src="https://www.ahmedalmaghribi.com/wp-content/uploads/elementor/thumbs/laathani-website-banner-qtjuzruk3uucaua67yiznsvq53hon559e1atl9ne54.jpg" alt="wait" />
        </div>
        <div className="spicy-grid">
          {allSpicy.map((item) => (
            <div className="spicy-card" key={item.id}>
              <img className="spicy-image" src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>₹{item.price}</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>                        
              </div>
          ))}
        </div>
      </div>
  
    )
}
export default Spicy;