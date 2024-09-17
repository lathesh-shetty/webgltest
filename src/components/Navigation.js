import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import './BurgerMenu.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" className="nav-button" onClick={toggleMenu}>Game</Link></li>
        <li><Link to="/about" className="nav-button" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/contact" className="nav-button" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;