import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div>
            <div className="wave-top">
                <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 80 Q180 20 360 80 T720 80 T1080 80 T1440 80 V120 H0 Z"
                        fill="var(--accent-hover)"
                    />
                </svg>
            </div>
            <footer className="footer">
                <div className=" footer-section flex">
                    <div className="socials flex">
                        <h3>Socials</h3>
                        <ul>
                            <li className="insta flex">
                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                                <Link to="https://www.instagram.com/raimath_420" target="_blank" rel="noreferrer">Seafreash</Link>
                            </li>

                            <li className="facebook flex">
                                <FontAwesomeIcon icon={faFacebook} size="xl" />
                                <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer">Seafreash</Link>
                            </li>

                            <li className="twitter flex">
                                <FontAwesomeIcon icon={faTwitter} size="xl" />
                                <Link to="https://www.twitter.com" target="_blank" rel="noreferrer">Seafreash</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navigation footer-navigations flex">
                        <h3>Navigations</h3>
                        <ul className='footer-nav-list flex'>
                            <li><NavLink to={"/home"}> Home</NavLink></li>
                            <li><NavLink to={"/order"}> Order</NavLink></li>
                            <li><NavLink to={"/services"}> Services</NavLink></li>
                            <li><NavLink to={"/contact"}> Contact</NavLink></li>
                            <li><NavLink to={"/tc"}> Terms and Conditions</NavLink></li>
                        </ul>
                    </div>
                    <div className=" help flex">
                        <h3>Reach us</h3>
                        <div className='address flex'>
                            <ul >
                                <li className="flex">
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                    website@gmail.com
                                </li>

                                <li className="flex">
                                    <FontAwesomeIcon icon={faPhone} size="lg" />
                                    808-9932420420
                                </li>

                                <li className="flex">
                                    <FontAwesomeIcon icon={faLocationDot} size="lg" />
                                    <address> Seafreash office<br /> Near Bustand GANGAVATHI<br />  Karnataka 583253 India</address>
                                </li>


                            </ul>
                        </div>
                    </div>

                </div>
                <div className="copy">
                    <h4>Copyrights&copy; All Rights Resevered By Seafreash</h4>
                </div>
            </footer>
        </div >
    )
}

export default Footer