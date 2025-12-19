import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <img
          src="https://vamalifecare.aliveinc.in/images/Vama-Logo-300px.png"
          alt="Vama Logo"
          className="logo"
        />
      </div>

      {/* Hamburger (MOBILE ONLY) */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      {/* Contact Button (DESKTOP ONLY) */}
      <a href="tel:917304044082" className="contact-btn desktop-only">
        <FontAwesomeIcon icon={faPhone} className="btn-icon" />
        <span className="btn-text">+91 7304044082</span>
      </a>
    </header>
  );
};

export default Header;
