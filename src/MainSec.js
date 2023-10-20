import React, { useState } from 'react'
import Banner from './Banner'
import Card from './Card'
const MainSec = () => {

  const categories = ['All', 'Kids' , 'Women', 'Men', 'Accessories']

  const [curCategory,setcurCategory] = useState('All')

  return (
    <main className=' w-full lg:px-16 xl:px-280'>
      
      <Banner/>

      <section className='w-full'>

        <header className='w-full bg-green-3000'>
            <h1 className=' text-4xl font-semibold text-center'>Top Trending</h1>

            <div className='mx-auto mt-10  flex items-center justify-center w-fit'>

              {categories.map((category,ind)=>(
                <button onClick={()=>setcurCategory(category)} className={` px-4 md:px-10 py-3 mx-1 text-xs md:text-sm font-semibold border-t-2 hover:border-pink-600 ${curCategory === category ? 'border-pink-600' : 'border-transparent'} ${curCategory === category && 'text-pink-600'} hover:text-pink-600  `} key={ind} >{category}</button>
              ))}

            </div>
        </header>

        <main className='w-full mb-72 p-10 flex flex-wrap justify-center md:justify-start bg-cyan-2000'>
              <Card/> 
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>


        </main>

      </section>
    </main>
  )
}

export default MainSec