import React from 'react'
import {  BsStarHalf,BsStar, BsStarFill} from 'react-icons/bs'


const Rating = ({value, text}) => {
  return (
    <div className='text-red-400 flex justify-start items-center my-3  '>
          <span className='text-red-400 '>
         {value >= 1 ? <BsStarFill/>: value>=0.5 ?<BsStarHalf /> : <BsStar/> }
          </span>
          <span className='text-red-400 '>
         {value >= 2 ? <BsStarFill/>: value>=1.5 ?<BsStarHalf /> : <BsStar/> }
          </span>
          <span className='text-red-400'>
         {value >= 3 ? <BsStarFill/>: value>=2.5 ?<BsStarHalf /> : <BsStar/> }
          </span>
          <span className='text-red-400'>
         {value >= 4 ? <BsStarFill/>: value>=3.5 ?<BsStarHalf /> : <BsStar/> }
          </span>
          <span className='text-red-400 '>
         {value >= 5 ? <BsStarFill/>: value>=4.5 ?<BsStarHalf /> : <BsStar/> }
          </span>
          <span className='ml-3'>{text&&text}</span>
    </div>
  )
}

export default Rating
