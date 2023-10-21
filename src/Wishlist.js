import React from 'react'
import {BiSolidTrash} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    
  const img = "https://s3.eu-central-1.wasabisys.com/zemuria/plipplip.store/products/pVN0EAgZphn8IMApPlOmXNvpDzFZreVAZ2ppScLI.webp"

  return (
    <main className='w-full mt-10 mb-40 p-3 sm:px-10 lg:px-20 xl:px-32 '>

      <header className='w-full my-5 md:my-10 md:mb-20 text-2xl font-bold text-center '>
        <h1>WISHLIST</h1>
      </header>


      <div className='w-full'>


        <section className='w-full h-28 my-5 border-2 rounded-sm flex items-center justify-around p-3 md:px-10 py-2'>

          <Link to='/products/1' className='h-full aspect-square border bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${img})`}}></Link>


          <div className='flex items-center justify-around md:px-10 w-full bg-amber-2000'>

            <div className='h-full w-fit md:mr-auto flex flex-col items-center justify-center gap-1 md:gap-3 bg-green-3000 '>
              <Link to="/products/1" className='text-base font-semibold'>Title Title</Link>
              <p className='text-lg font-bold'>₹2302</p>
            </div>

            <button className=' px-2 md:px-4 py-2 my-5  md:mx-auto text-xs md:text-base bg-pink-600 text-white whitespace-nowrap rounded-md active:scale-95'>Add To Cart</button>
            
          </div>

          <span className=' bg-pink-100 p-2 md:p-4 h-fit ml-auto my-auto rounded'>
            <BiSolidTrash className='h-5 w-5 cursor-pointer text-pink-600'/>
          </span>

        </section>

                    
      </div>

    </main>
  )
}

export default Wishlist