import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://vamalifecare.aliveinc.in/images/Vama-Logo-300px.png"
          alt="Vama Logo"
          className="logo"
        />
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Contact Button with Phone Icon */}
      <a href="tel:9324245521" className="contact-btn">
        <FontAwesomeIcon icon={faPhone} className="btn-icon" />
        <span className="btn-text">91+7304044082</span>
      </a>
    </header>
  );
};

export default Header;