import React from 'react'
import errorImg from '../images/error.jpg'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <main className='w-full mt-12 flex flex-col justify-center items-center'>
        <img className=' w-2/3 md:w-1/4 mx-auto aspect-square' src={errorImg} alt="" />

        <div className='w-fit mt-5 mx-auto'>
            <h3 className=' text-lg md:text-xl  text-center font-semibold'>We're unable to process your request! Kindly go back to the <Link to="/" className=' underline text-pink-600'>homepage.</Link></h3>
        </div>
    </main>
  )
}

export default Notfound