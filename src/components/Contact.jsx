import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const Contact = () => {
    return (
        <>
            <div className='section contact-section'>
                <div className='container contact-container flex'>
                    <h3>Contact</h3>
                    <p>For Booking!</p>

                    <Link to="https://wa.me/919353880091" className='contacts' target="_blank" rel="noopener noreferrer">
                        <div className='contact-element flex'>
                            <div className='contact-logo'>
                                <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
                            </div>
                            <div className='contact-content'>
                                <div className='contact-info-heading'>
                                    Whatsapp
                                </div>
                                <div className='contact-info'>
                                    +91 9353880091
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="tel:+919353880091" className='contacts'>
                        <div className='contact-element flex'>
                            <div className='contact-logo'>
                                <FontAwesomeIcon icon={faPhone} size="2xl" />
                            </div>
                            <div className='contact-content'>
                                <div className='contact-info-heading'>
                                    Phone
                                </div>
                                <div className='contact-info'>
                                    +91 9353880091
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="https://www.instagram.com/raimath_420/" className='contacts' target="_blank" rel="noopener noreferrer">
                        <div className='contact-element flex'>
                            <div className='contact-logo'>
                                <FontAwesomeIcon icon={faInstagram} size="2xl" />
                            </div>
                            <div className='contact-content'>
                                <div className='contact-info-heading'>
                                    Instagram
                                </div>
                                <div className='contact-info'>
                                    @seaFresh
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="mailto:raimathofficial@gmail.com" className='contacts'>
                        <div className='contact-element flex'>
                            <div className='contact-logo'>
                                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                            </div>
                            <div className='contact-content'>
                                <div className='contact-info-heading'>
                                    Email
                                </div>
                                <div className='contact-info'>
                                    seafresh@gmail.com
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}