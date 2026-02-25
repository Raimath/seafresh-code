import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="logo">
                    <h2>SeaFresh</h2>
                </div>

                <div className={`nav-elements ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link to="/order" onClick={() => setIsOpen(false)}>Order</Link></li>
                        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
                        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                        <li><Link to="/tc" onClick={() => setIsOpen(false)}>T&C</Link></li>
                    </ul>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
