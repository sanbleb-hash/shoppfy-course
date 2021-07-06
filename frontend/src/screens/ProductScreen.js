import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { detailsProduct } from '../redux/actions/ProductAction'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../components/Loading';
import MessageBox from '../components/MassageBox';
import {addToCart } from '../redux/actions/cartAction'

const ProductScreen = ({ history,match }) => {
    const [ qty, setQty ]= useState(1);

    const dispatch = useDispatch();
    const productId = match.params.id
    const productDetails = useSelector((state => state.productDetails));
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])

   const addToCarthandler = () => {
        dispatch(addToCart(product._id, qty))
        history.push('/cart')
    }

    return (
        <section className='h-screen mt-16 overflow-hidden '>
            <Link to='/' className='text-lg text-gray-500 p-12  ' >go back</Link >
            {loading ? (<Loading />) : error ? (<MessageBox>{error}</MessageBox>)
                : <div className=' m-auto flex items-start justify-center flex-auto border-b-2 pb-9'>
                    <div className='h-96 w-2/4   max-w-lg'>
                        <img src={product&&product.image} alt={product&&product.name} className='pb-6 h-full w-full' />
                    </div>
                    <div className=' flex-grow px-8  max-w-xs '>
                        <ul className='border-l-2 pl-9'>
                            <li className='text-gray-800 font-bold'>{product&&product.name}</li>
                            <li className='py-5'>{product&&product.description}</li>
                            <li>{product&&product.rating}</li>

                        </ul>
                    </div>
                    <div className=' border-l-2 pl-9'>
                        <ul>
                            <li><span className='font-bold text-gray-800'>price : R </span>{product&&product.price}</li>
                            <li>
                            <div>status</div>
                                <div className='py-4'>{product&&product.countInStock > 0 ? <span className='text-green-400'>In stock 
                                </span> : <span className='text-red-400'>out of stock</span>}</div>
                            
                            </li>
                            <li>
                            <form className='border-blue-200 border w-full bg-gray-300 mb-2 text-gray-300 rounded-md'>
                           <select className='outline-none border-none w-3/4   text-gray-500' value={qty} onChange={(e)=>setQty(e.target.value)}>{
                              [...Array(product&&product.countInStock).keys()].map(x=>(<option className='outline-none border-none w3/4 text-blue-3' key={x +1} value={x +1 }>{x + 1}</option>))
                           }
                           </select>
                            </form> 
                            </li>
                    
                            <button 
                            onClick={addToCarthandler} className='focus:outline-none w-full bg-blue-500 rounded-sm  px-2 text-lg text-white'>add to cart</button>
                        </ul>
                    </div>
                </div>
            }

        </section>
    )
}

export default ProductScreen
