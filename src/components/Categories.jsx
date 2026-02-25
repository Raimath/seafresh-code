import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Context } from '../Context/context'
import { motion } from 'framer-motion'

export const Categories = () => {
    // const { setcollections } = useContext(Context)
    // useEffect(() => {
    //     setcollections('')
    // }, [])

    return (
        <>
            <section className='section categories-section'>
                <div className='container categories-container flex'>
                    <h2>CATEGORIES</h2>
                    <div className='categories-box-container flex'>

                        <NavLink to='/order'>
                            <motion.div className='categories-box flex'
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ opacity: { duration: 0.1 }, ease: 'easeInOut' }}>
                                <img src='https://derafarms.com/cdn/shop/files/deraproducts-2024-06-27T113546.629.png?v=1719468381' alt='Small Prawns' />
                                <p className='categories-para'>Small Prawns</p>
                            </motion.div>
                        </NavLink>

                        <NavLink to='/order'>
                            <motion.div className='categories-box flex'
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ opacity: { duration: 0.1 }, ease: 'easeInOut' }}>
                                <img src='https://media.istockphoto.com/id/1071470788/photo/raw-fresh-pacific-white-shrimp.jpg?s=612x612&w=0&k=20&c=hWJ6TJZR0ZPPsCdGxkIpma9fMlw8Ttes16AWKx7YpPw=' alt='Medium size Prawns' />
                                <p className='categories-para'>Medium size Prawns</p>
                            </motion.div>
                        </NavLink>

                        <NavLink to='/order'>
                            <motion.div className='categories-box flex'
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ opacity: { duration: 0.1 }, ease: 'easeInOut' }}>
                                <img src='https://www.shutterstock.com/image-photo/farm-fresh-medium-prawns-square-260nw-2531513903.jpg' alt='Large size Prawns' />
                                <p className='categories-para'>Large size Prawns</p>
                            </motion.div>
                        </NavLink>



                    </div>
                </div>
            </section>
        </>
    )
}
