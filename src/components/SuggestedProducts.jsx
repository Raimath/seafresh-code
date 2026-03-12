
import React, { useContext } from 'react'
import { Context } from '../Context/productContext'
import { Product } from './Product'

export const SuggestedProducts = (props) => {
    const { size, weight, id } = props
    const products = useContext(Context)

    if (!products || !Array.isArray(products)) {
        return null;
    }

    const productId = parseInt(id)

    // 1. Get products with same weight (excluding current)
    const suggestedByWeight = products.filter(curElem => curElem.weight === weight && curElem.id !== productId)

    // 2. Get products with same size (excluding current and those already in suggestedByWeight)
    const suggestedBySize = products.filter(curElem =>
        curElem.size === size &&
        curElem.id !== productId &&
        !suggestedByWeight.some(item => item.id === curElem.id)
    )

    // Combine them: weight matches first, then size matches
    const orderedSuggestions = [...suggestedByWeight, ...suggestedBySize]


    return (
        <>

            {orderedSuggestions.length > 0 ? (
                <section className='section product-container-section flex'>
                    <hr></hr>
                    <div className='container'>
                        <div className='heading '><h2>Recommended Products</h2></div>
                        <div className=' product-card-container flex'>
                            {orderedSuggestions.map((curElem) => {
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
