import React from 'react'
import { Context } from '../Context/productContext'
import { useContext } from 'react'
import { Product } from './Product'

const Order = () => {
    const products = useContext(Context)
    // const { id, image, title, price, weight } = products;
    return (
        <>
            <section className='section shop product-container-section'>
                {/* <div className='filters flex'>
                    <div className='filter-list flex'>
                        <ul className='flex filter-ul'>
                            <li className={activeFilter === 'all' ? 'active-filter' : ''} onClick={() => handleFilter('all')}>All</li>
                            <li className={activeFilter === 't-shirt' ? 'active-filter' : ''} onClick={() => handleFilter('t-shirt')}>T-Shirt</li>
                            <li className={activeFilter === 'shirt' ? 'active-filter' : ''} onClick={() => handleFilter('shirt')}>Shirt</li>
                            <li className={activeFilter === 'pant' ? 'active-filter' : ''} onClick={() => handleFilter('pant')}>Pant</li>
                            <li className={activeFilter === 'hoodie' ? 'active-filter' : ''} onClick={() => handleFilter('hoodie')}>Hoodies</li>
                            <li className={activeFilter === 'shoes' ? 'active-filter' : ''} onClick={() => handleFilter('shoes')}>Shoes</li>
                            <li className={activeFilter === 'jacket' ? 'active-filter' : ''} onClick={() => handleFilter('jacket')}>Jacket</li>
                            <li className={activeFilter === 'watch' ? 'active-filter' : ''} onClick={() => handleFilter('watch')}>Watches</li>
                        </ul>
                    </div>
                </div> */}
                <div className='container product-card-container flex'>
                    {/* {isLoading ? (<CardLoading />) : (products.length > 0 ? ( */}
                    {(products.length > 0 ? (
                        products.map((curElem) => {
                            return (
                                <Product
                                    key={curElem.id}
                                    id={curElem.id}
                                    image={curElem.images?.[0]}
                                    title={curElem.title}
                                    price={curElem.price}
                                    weight={curElem.weight}
                                />
                            );
                        })
                    ) : (
                        "No Products Available"
                    ))}

                </div>
            </section>


        </>
    )
}

export default Order