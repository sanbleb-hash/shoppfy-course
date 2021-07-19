import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SigninScreen = () => {

  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');


  const submitHandler = e => {
    e.preventDefault();
  }
  return (
    <div className=' flex items-center justify-center
     min-h- w-full bg-gray-300'>
      <form className='p-12' onSubmit={submitHandler}>
      <h1 className='text-center text-2xl text-black mb-8'>sign in</h1>
      <div className='flex items-center justify-between mb-8 w-5/6 '>
      <label className='text-2xl text-gray-600 mr-20' htmlfor='email' >email</label>
      <input className='focus:underline outline-none border-red-50 border pl-5 text-gray-600 rounded-md p-3 bg-gray-300 cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out ' type='email' id='email' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} ></input>
      </div>

       <div className='flex items-center justify-between mb-8 w-5/6 '>
      <label className='text-2xl text-gray-600 mr-8' htmlfor='password' >password</label>
      <input className='focus:underline outline-none border-red-50 border pl-5 text-gray-600 rounded-md p-3 bg-gray-300 cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out ' type='password' id='password' placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)} ></input>
      </div>
      <div>
      <label/>
      <button className='block bg-gray-300 border-2 w-full rounded-lg p-2 hover:bg-gray-400 hover:text-white transition duration-150 ease-in-out cursor-pointer mb-8' type='submit'>sign in</button>
      </div>
      <div>
      <label/>
      </div>
      Dont have an account ? {' '}
      <Link className='text-gray-400 hover:underline hover:text-gray-800' to='/register'>create account</Link>
      </form>
    </div>
  )
}

export default SigninScreen
