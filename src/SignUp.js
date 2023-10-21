import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <form className='w-1/3 mx-auto p-5 mt-10 mb-20 text-xs font-semibold flex flex-col justify-around border rounded-sm bg-cyan-2000'>

      <header className='w-full my-5 mb-10 text-2xl font-bold text-center '>
        <h1>Create Accont</h1>
      </header>

        <div className='h-20 flex flex-col justify-around mb-4'>
          <label htmlFor="name">Name * </label>

          <input type="text" id='name' className='w-full mx-auto outline-none border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
        </div>

        <div className='h-20 flex flex-col justify-around mb-4'>
          <label htmlFor="email">E-mail* </label>

          <input type="text" id='email' className='w-full mx-auto outline-none border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
        </div>

        <div className='h-20 flex flex-col justify-around mb-4'>
          <label htmlFor="password">Password * </label>

          <input type="password" id='passoword' className='w-full mx-auto outline-none border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
        </div>

        <div className='h-20 flex flex-col justify-around mb-4'>
          <label htmlFor="cpassword">Confirm Password * </label>

          <input type="password" id='cpassword' className='w-full mx-auto outline-none border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
        </div>   

        <button className=' border-2 border-pink-600 text-pink-600 transition-all h-10 w-5/6 mx-auto mt-5 rounded-md text-xs font-bold flex items-center justify-center active:scale-95'>Create</button>

        <Link className='my-8 text-pink-700 '>Return to Store</Link>
    </form>
  )
}

export default SignUp