import React, { useContext } from 'react'
import { Context } from '../Context/productContext'
import { Product } from './Product'

const Featured = () => {
    const products = useContext(Context)
    const featuredProducts = products.filter((curElem) => curElem.featured === true)
    return (
        <>
            {featuredProducts.length > 0 ? (
                <section className='section product-container-section flex'>
                    <hr></hr>
                    <div className='container featured-container'>
                        <div className='heading '><h2>Top Selling Products</h2></div>
                        <div className=' product-card-container flex'>
                            {featuredProducts.map((curElem) => {
                                return (
                                    <Product
                                        key={curElem.id}
                                        id={curElem.id}
                                        image={curElem.images?.[0]}
                                        title={curElem.title}
                                        weight={curElem.weight}
                                        price={curElem.price}
                                    />);
                            })}
                        </div>
                    </div>
                </section>
            ) : ("")}
        </>
    )
}

export default Featured