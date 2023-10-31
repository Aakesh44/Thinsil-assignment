import React, { useState,useContext } from 'react'
import Banner from './Banner'
import Card from './Card'
import NewItems from './NewItems'
import { Link } from 'react-router-dom'
import DataContext from '../context/dataContext'

const MainSec = () => {

  const {products} = useContext(DataContext)
  // console.log(allProducts);

  const categories = ['All', "Kids' Wear" , "Women Clothing", 'Men Clothing','Accessories','Cosmetics','Footwear','Electronics','Home decor']

  const [curCategory,setcurCategory] = useState('All')

  const filproducts = products.filter((n,i)=>
  curCategory !== 'All' ? n.category === curCategory.toLowerCase() : n
)


  return (
    <main className=' w-full lg:px-16 xl:px-280 relative'>
      
      {/* main: render banner component */}

      <Banner/>

      <section className='w-full flex flex-col select-none'>

      {/* main: category option section */}

        <header className='w-full bg-green-3000 relative'>
            <h1 className=' text-4xl font-semibold text-center'>Top Trending</h1>

            <div className=' mx-auto mt-16 w-full flex flex-wrap items-center justify-around'>

              {categories.map((category,ind)=>(
                <button onClick={()=>setcurCategory(category)} className={` w-1/3 md:w-1/4  lg:w-fit py-3 bg-cyan-3000 text-xs md:text-sm font-semibold border-2 lg:border-0 lg:border-t-2 hover:border-pink-600 ${curCategory === category ? 'border-pink-600' : 'border-transparent'} ${curCategory === category && 'text-pink-600'} hover:text-pink-600  `} key={ind} >{category}</button>
              ))}

            </div>
        </header>
        
        {/* main: map over the products array to render each product */}

        <main className='w-full p-10 flex flex-wrap justify-center md:justify-start bg-cyan-2000'>

          {filproducts.slice(0,40).map((product,ind)=>(
            <Card productId={product?._id} key={ind}/>
          ))}

        </main>

        <Link to='/products' className='bg-pink-600 text-white text-sm font-semibold px-5 py-3 mb-5 rounded-md mx-auto active:scale-95'>View More</Link>
          
        {/* main: render new Items section */}
        
        <NewItems/>
        
      </section>
    </main>
  )
}

export default MainSec