import React from 'react'
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
    return (
        <div className='flex items-center justify-center h-screen '>
            <FaSpinner className='text-9xl text-blue-500' />
            <span className='text-blue-800 text-lg font-medium '>Loading</span>
        </div>
    )
}

export default Loading
