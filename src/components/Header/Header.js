import React from 'react';
import './Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import websitelogo from '../../assets/WebsiteLogo.png'

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={websitelogo} alt="Restro" className="logo" />
      </div>
      <nav className="nav">
        <button className="nav-item">Home</button>
        <button className="nav-item">Menu</button>
        <button className="nav-item">Orders</button>
        <button className="nav-item">Help</button>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-btn"><FontAwesomeIcon icon={faSearch}/></button>
      </div>
    </header>
  );
}

export default Header;
