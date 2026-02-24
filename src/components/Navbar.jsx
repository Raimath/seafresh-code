import React, { useState } from 'react';

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
                        <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="/order" onClick={() => setIsOpen(false)}>Order</a></li>
                        <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="/cart" onClick={() => setIsOpen(false)}>Cart</a></li>
                        <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                        <li><a href="/tc" onClick={() => setIsOpen(false)}>T&C</a></li>
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
