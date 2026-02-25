import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className="section ">
            <section className=" container hero">
                <h1>Premium Prawns, Delivered Fresh.</h1>
                <p>Experience the finest selection of ocean-fresh prawns delivered straight from the coast to your kitchen.</p>
                <motion.div className='service-box flex '
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        y: { type: 'spring', stiffness: 60, },
                        opacity: { duration: 0.1 },
                        ease: 'easeInOut'
                    }}>

                    <Link to="/order"><button className="btn-primary">Order Now</button></Link>
                </motion.div>
            </section>
        </div>
    )
}

export default Hero
