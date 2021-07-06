import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav >
            <div className="h-12 bg-blue-900 text-white sticky ">
                <div className='flex align-middle justify-between mr-6 ml-6 pt-2'>
                    <span className='inline-block text-xl hover:bg-gray-400'><Link to='/'>Online Shop</Link></span>
                    <div>
                        <span className='inline-block text-lg hover:bg-gray-400'><Link to='/cart'>cart</Link ></span>
                        <span className=' inline-block text-lg pl-7 hover:border-r-gray-300'><Link to='/login'>log in</Link></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
