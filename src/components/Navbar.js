import React, { useState } from "react";
import './Navbar.css';
import { FaPhoneAlt, FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { useSelector } from "react-redux"; 
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const cartQuantity = useSelector(state => state.cart.totalQuantity); 

    return (
        <div className="fixed-top">
            <div className="navbar-section">
                <div className="navbar">
                    <FaBars className="hamburger-icon" onClick={() => setIsOpen(!isOpen)} />
                </div>

                <div className="nav-logo">
            <Link className="navbar-brand" to="/">
            <img src='https://ramsonsperfumes.com/cdn/shop/files/new-final-logo_100x.png?v=1676979200' alt='photo' />
          </Link>
                </div>

                <div className={`nav-icons ${isOpen ? 'active' : ''}`}>
                    <FaPhoneAlt className="icon contact-icon" />
                    <FaSearch className="icon search-icon" />
                    <Link to="/cart" className="icon cart-icon">
                        <FaShoppingCart />
                        {cartQuantity > 0 && <span className="cart-count">{cartQuantity}</span>} 
                    </Link>
                </div>
            </div>

            <div className={`nav-links ${isOpen ? 'show' : ''}`}>
                 <Link to="/" className="nav-link">Home</Link>
                 <Link to="/aquatic" className="nav-link">Perfume For Him</Link>
                 <Link to="/woody" className="nav-link">Perfume For Her</Link>
                 <Link to="/oriental" className="nav-link">Gift Set</Link>
            </div>
        </div>
    );
}

export default Navbar;
