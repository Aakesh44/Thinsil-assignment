import React from 'react'
import {BiSolidTrash} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Minicart = ({setCartOpen}) => {
  return (
    <section className='absolute p-10 z-10 top-full right-0  bg-white text-black rounded-sm drop-shadow-md cursor-default  select-none' data-aos="fade-up" data-aos-duration="500">

        <aside className='minicart w-96 px-2 max-h-56 flex flex-col overflow-y-scroll'>

            <main className='h-24 w-full px-5 py-2 my-2 border-2 border-gray-300 flex items-center justify-around rounded-sm'>

                <Link to='/products/1' className='w-1/4'>
                    <img src="https://s3.eu-central-1.wasabisys.com/zemuria/plipplip.store/products/hzfKUCMpDt7eQwc3qJZkJpoDiYjEjrqndTwmMO48.webp" alt="" className='h-full w-14'/>
                </Link>

                <Link to='/products/1' className='w-2/3 overflow-hidden px-2'>
                    <h1  className=' text-sm font-semibold my-2 truncate'>Title Title title title title title</h1>
                    <p className=' text-xs font-semibold text-center'>1 x ₹3434</p>
                </Link>
   
                 <span className=' bg-pink-100 p-2 rounded'>
                    <BiSolidTrash className='h-5 w-5 cursor-pointer text-pink-600'/>
                </span>

            </main>

        </aside>

        <aside className='w-96 h-52 grid grid-rows-3'>

            <div className='w-full text-base font-semibold flex items-center justify-around'>
              <h1>Total</h1>
              <h1>₹2322</h1>
            </div>

            <button className=' bg-pink-600 text-white h-10 w-5/6 mx-auto my-auto rounded-md text-xs font-bold active:scale-95'>PROCEED TO CHECKOUT</button>

            <Link to='/cart' onClick={()=>setCartOpen(false)} className=' border-2 border-black text-black h-10 w-5/6 mx-auto my-auto rounded-md text-xs font-bold flex items-center justify-center active:scale-95'>VIEW CART</Link>

        </aside>
    </section>
  )
}

export default Minicart