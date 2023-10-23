import React from 'react'
const LogIn = () => {
  return (

    //login form
    
    <form className='w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-5 mt-10 mb-20 text-xs font-semibold flex flex-col justify-around border rounded-sm bg-cyan-2000'>

      <header className='w-full my-5 mb-10 text-2xl font-bold text-center '>
        <h1>Login</h1>
      </header>


      <div className='h-20 flex flex-col justify-around mb-4'>
        <label htmlFor="email">E-mail* </label>

        <input required type="text" id='email' className='w-full mx-auto focus:outline-1 outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
      </div>

      <div className='h-20 flex flex-col justify-around mb-4'>
        <label htmlFor="password">Password * </label>

        <input  required type="password" id='passoword' className='w-full mx-auto focus:outline-1 outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
      </div>

      <div className='h-20 flex items-center  justify-between mb-4 select-none'>
        <div className='flex items-center gap-2'>
          <input type="checkbox" name="" id="reme" className=' bg-gray-50 checked:text-pink-600'/>
          <label htmlFor="reme">Remember Me</label>
        </div>
        <h1 className='text-pink-600'>Forgot Password ?</h1>
      </div>   

        <button className=' border-2 border-pink-600 text-pink-600 transition-all h-10 w-5/6 mx-auto rounded-md text-xs font-bold flex items-center justify-center active:scale-95'>Login</button>

    </form>
  )
}

export default LogIn