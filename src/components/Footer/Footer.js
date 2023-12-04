import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <button className="footer-button">Help</button>
        <button className="footer-button">Contact Us</button>
        <button className="footer-button">About Us</button>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Restaurant Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;