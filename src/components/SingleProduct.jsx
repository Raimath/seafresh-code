import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../Context/productContext'
import { Link, useParams } from 'react-router-dom'
import { SuggestedProducts } from './SuggestedProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const SingleProduct = () => {
    const { id } = useParams()
    const products = useContext(Context)
    const [productdata, setproductdata] = useState({})
    const [mainImage, setMainImage] = useState("")

    useEffect(() => {
        if (products && products.length > 0) {
            const singleProduct = products.find((product) => product.id === parseInt(id))
            if (singleProduct) {
                setproductdata(singleProduct)
                setMainImage(singleProduct.images?.[0] || "")
            }
        }
    }, [id, products])

    const handleCart = (productid) => {
        // alert("Product added to cart (Demo Only)")
    }

    if (!productdata.id) {
        return (
            <section className="product-section">
                <div className="container flex">
                    <p>Loading product details...</p>
                </div>
            </section>
        )
    }

    return (
        <>
            <section className=" section product-section">
                <div className="container products-container  flex" >
                    <div className='single-product-container product-container'>
                        <div className='product-images flex'>
                            <div className="main-image">
                                {productdata.images ? (
                                    <img src={mainImage || productdata.images[0]} alt={productdata.title} />
                                ) : (
                                    <div className="flex" style={{ height: '100%' }}>Images loading..</div>
                                )}
                            </div>

                            <div className="sub-images flex">
                                {productdata.images?.map((curElem, index) => (
                                    <img
                                        key={index}
                                        src={curElem}
                                        onMouseOver={() => setMainImage(curElem)}
                                        alt="product thumbnail"
                                        style={{ borderColor: mainImage === curElem ? 'var(--primary)' : 'transparent' }}
                                    />
                                ))}
                            </div>

                            <div className='buy-buttons'>
                                <Link to="tel:+917019750802" className='buy-button call-btn' type='button' ><FontAwesomeIcon icon={faPhone} size='2xl' /> order now</Link>
                                <Link to={`mailto:raimathofficial@gmail.com?subject=Order%20Alert&body=Item:%20${productdata.title}%0APrice:%20Rs.${productdata.price}%0AWeight:%20${productdata.weight}%0ASize:%20${productdata.size}`} className='buy-button mail-btn' type='button' ><FontAwesomeIcon icon={faEnvelope} size='2xl' /> order now</Link>
                                <Link to={`https://wa.me/919353880091?text=Order%20Alert!%0A Item:%20${productdata.title}%0APrice:%20Rs.${productdata.price}%0AWeight:%20${productdata.weight}%0ASize:%20${productdata.size}%0AAddress:`} className='buy-button whatsapp-btn' type='button' ><FontAwesomeIcon icon={faWhatsapp} size='2xl' /> order now</Link>
                            </div>
                        </div>
                        <div className='product-content'>
                            <div className='spacial'>Special Price</div>
                            <h1 className='title'>{productdata.title}</h1>
                            <div className='price'>
                                <div className='real-price'>&#8377;{productdata.price}</div>
                            </div>
                            <div className='details'>
                                <div className='more-info'>
                                    <h3>Product Specifications</h3>
                                    <table className='table'>
                                        <tbody>
                                            <tr className='table-row'>
                                                <td className='key'>Weight</td>
                                                <td className='value'>{productdata.weight}</td>
                                            </tr>
                                            <tr className='table-row'>
                                                <td className='key'>Size Category</td>
                                                <td className='value' style={{ textTransform: 'capitalize' }}>{productdata.size}</td>
                                            </tr>
                                            <tr className='table-row'>
                                                <td className='key'>Availability</td>
                                                <td className='value' style={{ color: '#10b981' }}>In Stock</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SuggestedProducts size={productdata.size} weight={productdata.weight} id={id} />
        </>
    )
}