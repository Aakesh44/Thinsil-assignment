import React, { useState } from 'react'
import Banner from './Banner'
import Card from './Card'
import NewItems from './NewItems'
import { Link } from 'react-router-dom'

const MainSec = () => {

  const categories = ['All', 'Kids' , 'Women', 'Men', 'Footwear']

  const [curCategory,setcurCategory] = useState('All')

  return (
    <main className=' w-full lg:px-16 xl:px-280'>
      
      <Banner/>

      <section className='w-full flex flex-col'>

        <header className='w-full bg-green-3000'>
            <h1 className=' text-4xl font-semibold text-center'>Top Trending</h1>

            <div className='mx-auto mt-10  flex items-center justify-center w-fit'>

              {categories.map((category,ind)=>(
                <button onClick={()=>setcurCategory(category)} className={` px-4 md:px-10 py-3 mx-1 text-xs md:text-sm font-semibold border-t-2 hover:border-pink-600 ${curCategory === category ? 'border-pink-600' : 'border-transparent'} ${curCategory === category && 'text-pink-600'} hover:text-pink-600  `} key={ind} >{category}</button>
              ))}

            </div>
        </header>

        <main className='w-full p-10 flex flex-wrap justify-center md:justify-start bg-cyan-2000'>
              <Card/> 
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
        </main>

        <Link to='/products' className='bg-pink-600 text-white text-sm font-semibold px-5 py-3 mb-5 rounded-md mx-auto active:scale-95'>View More</Link>
          
        <NewItems/>
        
      </section>
    </main>
  )
}

export default MainSec