import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import { addToCart, removeFromCart } from '../redux/actions/cartAction'


const Cart = ({history}) => {

  
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart;

  const checkOutHandler = () => {
    history.push('/login?redirect=shipping')
  } 

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    // history.replace('/cart')
  }

    return (
      <div className='h-auto'>
      <h1 className='mt-14 text-blue-500 text-center font-semibold text-4xl'>shopping cart</h1>
      <div className='flex items-start flex-col justify-center h-auto sm:flex-row bg-gray-400 mt-5 mb-5 '>

      
      {
        cartItems.length ===0? <span className=' mt-40 text-center sm:text-lg text-red-300 '>your cart is empty <h4 className='block mt-6 mb-24 text-gray-700 text-2xl hover:text-purple-300' to='/'>go Shopping</h4></span> : (<div className='min-h-full mb-56 mt-8   flex flex-col'>{
          cartItems.map(item=>(<div className='w-auto border-b-2 border-solid border-gray-300 pb-2 h-36 my-4 mx-8  flex justify-center  items-start' key={item.product}>
          <div className='h-full w-36'>
          <img className='h-full rounded-lg  w-full' src={item.image} alt={item.name}/>
          </div>
          <div className='mx-7 pt-3'><Link to={`/product/${item.product}`}>{item.name}</Link></div>
          <div className='mx-7 pt-3' ><h3>R {item.price}</h3></div>
          <div  className='mx-7 pt-3'><h3>
           <form className='border-blue-200 border w-full bg-gray-300 mb-2 text-gray-400 rounded-md'>
                           <select className='outline-none border-none w-8 
                             text-gray-500'  value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }>{
                              [...Array(item.countInStock).keys()].map(x=>(<option className='outline-none border-none
                              bg-black w-full text-blue-300' key={x +1} value={x +1 }>{x + 1}</option>))
                           }
                           </select>
                            </form> 
          </h3></div>
          <button  className='mx-8 pt-4 text-purple-300 text-xl hover:text-gray-300' type='button' onClick={removeFromCartHandler} ><FaTrash /></button>

          </div>))
        }</div>)
        

      }
<div className='mt-10 font-semibold italic text-gray-600 text-lg ml-24 border-blue-50 p-3 border-2'>
      <h2 className='pb-4 capitalize'>total items ({cartItems.reduce((acc, item) =>acc + item.qty
      , 0)})</h2>

       <h2 className='capitalize border-t-2 border-gray-400 pt-4'>Total cost R {cartItems.reduce((acc,item)=>(acc + item.qty * item.price),0).toFixed(2)}</h2>

       <button className='block bg-black text-white px-4
       rounded-md  py-2 text-md my-3 italic font-light'
       type='button' disabled={cartItems===0} onClick={checkOutHandler} >proceed to chechout</button>

      </div>
     

      </div>
      
      </div>
   
  )
  
  }

 


export default Cart