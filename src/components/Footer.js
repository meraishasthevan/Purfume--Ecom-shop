import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="https://ramsonsperfumes.com/cdn/shop/files/new-final-logo-white_360x.png?v=1676979283" 
            alt="Logo"
            className="footer-logo-img"
          />
        </div>
        <div className="footer-content">
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: info@Ramsons.com</p>
            <p>Phone: +345 456 7890</p>
            <p>Address: 563 Main Street, Mumbai, India</p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section social-media">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ramsons Perfume. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
