import React from 'react'
import {BiSolidHeart,BiSolidCartAlt} from 'react-icons/bi'

const Card = () => {
    const img = "https://s3.eu-central-1.wasabisys.com/zemuria/plipplip.store/products/hzfKUCMpDt7eQwc3qJZkJpoDiYjEjrqndTwmMO48.webp"
  return (
    <main className='w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-5 bg-red-5000 flex items-center justify-center select-none' style={{aspectRatio:'4/5'}}>

        <section className='Card bg-white w-full h-full p-5 flex flex-col transition-all' >
            
            <div className='bg-blue-300 h-3/4 aspect-square border shadow bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${img})`}}>

            </div>

            <div className=' h-1/4 flex flex-col justify-evenly bg-red-200 text-xs lg:text-sm font-semibold'>
                <h1>title title title</h1>
                <span className=' text-xs'>⭐⭐⭐⭐⭐</span>

                <div className='flex bg-cyan-300'>
                    <p>₹2322</p>
                    <BiSolidHeart   className='h-5 w-5'/>
                    <BiSolidCartAlt className='h-5 w-5'/>
                </div>              
            </div>

        </section>
        
    </main>
  )
}

export default Card

