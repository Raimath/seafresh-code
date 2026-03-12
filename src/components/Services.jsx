import React from 'react'
import { motion } from 'framer-motion'


const Services = () => {
    return (
        <>
            <div className='section services-section'>
                <div className='container services-container flex'>
                    <h3>Our Premium Services</h3>

                    <div className='services-content flex'>

                        {/* Service 1 */}
                        <motion.div className='service-box flex'
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                y: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 0.1 },
                                ease: 'easeInOut'
                            }}>
                            <div className='service-image'>
                                <div className="service-icon-wrapper">
                                    {/* Medal/Badge for Quality */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
                                        <path d="M12 15L8.5 18L9.5 13.5L6 10.5L10.5 10L12 5.5L13.5 10L18 10.5L14.5 13.5L15.5 18L12 15Z" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div className='service-content flex'>
                                <div className='service-heading'>
                                    Premium Quality
                                </div>
                                <p className='service-para'>
                                    At the heart of our seafood is a strong commitment to quality. Every prawn is carefully inspected and processed to ensure only the best products reach your kitchen.
                                </p>
                                <p className='service-para'>
                                    Strict quality checks | Hygienic processing | Best seafood guaranteed
                                </p>
                            </div>
                        </motion.div>


                        {/* Service 2 */}
                        <motion.div className='service-box flex column-reverse'
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                y: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 0.1 },
                                ease: 'easeInOut'
                            }}>

                            <div className='service-content flex'>
                                <div className='service-heading'>
                                    Peeled & Deveined
                                </div>
                                <p className='service-para'>
                                    Say goodbye to long preparation time. Our prawns come fully peeled and deveined, making cooking faster and easier for you.
                                </p>
                                <p className='service-para'>
                                    Ready to cook | Saves time | Perfect for quick meals
                                </p>
                            </div>

                            <div className='service-image'>
                                <div className="service-icon-wrapper">
                                    {/* Cleaning/Sparkle icon for Peeled/Deveined */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
                                        <path d="M12 3V4M12 20V21M4 12H3M21 12H20M5.63604 5.63604L6.34315 6.34315M17.6569 17.6569L18.364 18.364M5.63604 18.364L6.34315 17.6569M17.6569 6.34315L18.364 5.63604M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>


                        {/* Service 3 */}
                        <motion.div className='service-box flex'
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                y: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 0.1 },
                                ease: 'easeInOut'
                            }}>

                            <div className='service-image'>
                                <div className="service-icon-wrapper">
                                    {/* Snowflake for Frozen */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
                                        <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93M12 8L15 5M12 8L9 5M12 16L15 19M12 16L9 19M16 12L19 15M16 12L19 9M8 12L5 15M8 12L5 9" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div className='service-content flex'>
                                <div className='service-heading'>
                                    Freshly Frozen
                                </div>
                                <p className='service-para'>
                                    Our seafood is frozen immediately after harvesting to preserve natural flavor, texture, and freshness.
                                </p>
                                <p className='service-para'>
                                    Peak freshness | Natural taste | Premium freezing process
                                </p>
                            </div>
                        </motion.div>


                        {/* Service 4 */}
                        <motion.div className='service-box flex column-reverse'
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                y: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 0.1 },
                                ease: 'easeInOut'
                            }}>

                            <div className='service-content flex'>
                                <div className='service-heading'>
                                    24/7 Express Delivery
                                </div>
                                <p className='service-para'>
                                    Need fresh seafood anytime? Our delivery service operates 24/7 so you can order whenever you want.
                                </p>
                                <p className='service-para'>
                                    Fast delivery | Doorstep service | Anytime ordering
                                </p>
                            </div>

                            <div className='service-image'>
                                <div className="service-icon-wrapper">
                                    {/* Fast Delivery Truck */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
                                        <path d="M5 18H3.5C2.67157 18 2 17.3284 2 16.5V13M5 18C5 19.1046 5.89543 20 7 20C8.10457 20 9 19.1046 9 18M5 18H15M9 18C9 19.1046 9.89543 20 11 20C12.1046 20 13 19.1046 13 18M13 18H13.5H15M15 18H18.5M15 18C15 16.8954 15.8954 16 17 16C18.1046 16 19 16.8954 19 18M19 18H20.5C21.3284 18 22 17.3284 22 16.5V11H17M17 11L14.5 5H6V11H17ZM17 11H11.5M10 2H13L9 5H6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>


                        {/* Service 5 */}
                        <motion.div className='service-box flex'
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                y: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 0.1 },
                                ease: 'easeInOut'
                            }}>

                            <div className='service-image'>
                                <div className="service-icon-wrapper">
                                    {/* Headset for Support */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
                                        <path d="M3 11V10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10V11M3 11V16C3 17.1046 3.89543 18 5 18H6C7.10457 18 8 17.1046 8 16V12C8 10.8954 7.10457 10 6 10H3.5M3 11H3.5M21 11V16C21 17.1046 20.1046 18 19 18H18C16.8954 18 16 17.1046 16 16V12C16 10.8954 16.8954 10 18 10H20.5M21 11H20.5M21 17V18C21 20.2091 19.2091 22 17 22H16" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div className='service-content flex'>
                                <div className='service-heading'>
                                    24/7 Customer Support
                                </div>
                                <p className='service-para'>
                                    Our support team is always available to assist you with orders, product information, and delivery updates.
                                </p>
                                <p className='service-para'>
                                    Friendly support | Quick response | Always available
                                </p>
                            </div>
                        </motion.div>


                        {/* Service 6 */}
                        <motion.div className='service-box flex column-reverse'
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                y: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 0.1 },
                                ease: 'easeInOut'
                            }}>

                            <div className='service-content flex'>
                                <div className='service-heading'>
                                    WhatsApp & Phone Orders
                                </div>
                                <p className='service-para'>
                                    Ordering seafood is easy. Just send us a message on WhatsApp or give us a quick call to place your order instantly.
                                </p>
                                <p className='service-para'>
                                    Simple ordering | Instant confirmation | Quick service
                                </p>
                            </div>

                            <div className='service-image'>
                                <div className="service-icon-wrapper">
                                    {/* Phone/Message for Orders */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
                                        <path d="M3 4H21V16H11L7 20V16H3V4Z" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 10H16M8 14H12" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Services