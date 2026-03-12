import React from 'react'
import { motion } from 'framer-motion';
export const CardLoading = () => {

    const isMobile = window.innerWidth <= 768;

    const cardCount = 8; // Specify the number of times to render
    return (
        <>
            {Array.from({ length: cardCount }, (_, index) => (
                <div key={index} className='card-loading product-card flex'>
                    <motion.div className='image-loading'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            y: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn'
                        }}></motion.div>
                    <motion.div className='title-loading product-title'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            y: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn'
                        }}></motion.div>
                    <motion.div className='price-loading card-real-price'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            y: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn'
                        }}></motion.div>
                </div>
            ))}

        </>
    )
}