import React, { useState } from 'react'
import {BsFillCaretDownFill} from 'react-icons/bs'
import {BiSolidStar,BiPlus,BiMinus} from 'react-icons/bi'
import {FaFilter} from 'react-icons/fa'
import data from './data.json'
import Card from './Card'
const Products = () => {
console.log(data);
  const filters = ['Category', 'Brand' , 'Price', 'Size', 'Rating']

  const categories = ['Kids','Women','Men','Footwear']
  const Brands = ['AAA' , 'BBB', 'CCC', 'DDD']
  const Prices = ['< 500 ' , '500 - 800', '800 - 1200', '1200 >']
  const Sizes = ['S' , 'M', 'L', 'XL','XXL']
  const Ratings = [1,2,3,4,5]

  const [curFiletr,setCurFilter] = useState(null)

  const [cateOpen,setcateOpen] = useState(false)
  const [brandOpen,setbrandOpen] = useState(false)
  const [priceOpen,setpriceOpen] = useState(false)
  const [sizeOpen,setsizeOpen] = useState(false)


  const buttonStyle = `relative w-1/4 sm:w-24 h-8 md:w-32 md:h-10 mx-1 text-xs md:text-sm font-semibold border-2 border-pink-300 hover:border-pink-600 text-pink-600 rounded flex items-center justify-around select-none cursor-default`
  
  return (
    <main className='w-full lg:px-20 xl:px-32 mb-32 lg:flex justify-center bg-pink-1000'>
      
      <header className='mx-auto mb-auto mt-5 lg:hidden flex items-center justify-center w-full'>

        {filters.map((filter,ind)=>(
          <button className={buttonStyle} style={{borderColor:filter === curFiletr && "rgb(219 39 119)"}} key={ind} 
          // onClick={()=> (filter !== curFiletr || curFiletr == null) ? setCurFilter(filter) : setCurFilter(null)}
          onClick={()=>{ (filter === curFiletr) ? setCurFilter(null) : setCurFilter(filter)}}
          >
            
            {filter} <BsFillCaretDownFill/>


              {(curFiletr === 'Category' && filter === curFiletr) ? 

                <div className=' absolute z-20 w-fit h-fit top-14' onClick={(e)=>e.stopPropagation()}> 

                  <div className='h-2 w-2 absolute bg-pink-500 right-1/2 translate-x-1/2 rotate-45 -top-1'></div>
                  <ul className=' bg-pink-500 text-white shadow-md p-3 '>

                    {categories.map((category,ind)=>(
                      <li className='flex items-center justify-start gap-2 mt-1' key={ind}>
                        <input type="checkbox" name={category} id={category} />
                        <label htmlFor={category}> {category} </label>
                      </li>
                    ))}

                  </ul>
                </div>:

              (curFiletr === 'Brand' && filter === curFiletr) ? 
                <div className=' absolute z-20 w-fit h-fit top-14' onClick={(e)=>e.stopPropagation()}> 

                  <div className='h-2 w-2 absolute bg-pink-500 right-1/2 translate-x-1/2 rotate-45 -top-1'></div>
                  <ul className=' bg-pink-500 text-white shadow-md p-3 '>

                    {Brands.map((brand,ind)=>(
                      <li className='flex items-center justify-start gap-2 mt-1' key={ind}>
                        <input type="checkbox" name={brand} id={brand} />
                        <label htmlFor={brand}> {brand} </label>
                      </li>
                    ))}

                  </ul>
                </div>:
              (curFiletr === 'Price' && filter === curFiletr) ? 
                <div className=' absolute z-20 w-fit h-fit top-14' onClick={(e)=>e.stopPropagation()}> 

                  <div className='h-2 w-2 absolute bg-pink-500 right-1/2 translate-x-1/2 rotate-45 -top-1'></div>
                  <ul className=' bg-pink-500 text-white shadow-md p-3 '>

                    {Prices.map((price,ind)=>(
                      <li className='flex items-center justify-start gap-2 mt-1' key={ind}>
                        <input type="checkbox" name={price} id={price} />
                        <label htmlFor={price}> {price} </label>
                      </li>
                    ))}

                  </ul>
                </div>:
              (curFiletr === 'Size' && filter === curFiletr) ? 
                <div className=' absolute z-20 w-fit h-fit top-14' onClick={(e)=>e.stopPropagation()}> 

                  <div className='h-2 w-2 absolute bg-pink-500 right-1/2 translate-x-1/2 rotate-45 -top-1'></div>
                  <ul className=' bg-pink-500 text-white shadow-md p-3 '>

                    {Sizes.map((size,ind)=>(
                      <li className='flex items-center justify-start gap-2 mt-1' key={ind}>
                        <input type="checkbox" name={size} id={size} />
                        <label htmlFor={size} className=''> {size} </label>
                      </li>
                    ))}

                  </ul>
                </div>:
              (curFiletr === 'Rating' && filter === curFiletr) && 
                <div className=' absolute z-20 w-fit h-fit top-14' onClick={(e)=>e.stopPropagation()}> 

                  <div className='h-2 w-2 absolute bg-pink-500 right-1/2 translate-x-1/2 rotate-45 -top-1'></div>
                  <ul className=' bg-pink-500 text-white shadow-md p-3 '>

                    {Ratings.map((rating,ind)=>(
                      <li className='flex items-center justify-start gap-2 mt-1' key={ind}>
                        <input type="checkbox" name={rating} id={rating} />
                        <label htmlFor={rating}> {rating} </label>
                      </li>
                    ))}

                  </ul>
                </div>}                                          

          </button>
        ))}

      </header>

      <aside className='hidden lg:block w-1/4 py-14 select-none'>
          <div className='w-full h-12 flex items-center gap-2 bg-cyan-3000 text-xl font-bold'><FaFilter className='h-5 w-5'/> <h1>FILTERS</h1></div>

          <section className='w-full flex flex-col'>
                
                <div onClick={()=>setcateOpen(!cateOpen)} className='w-full h-12 flex items-center px-6 gap-2 bg-gray-100 border-t shadow-sm text-sm font-semibold'>
                  <h1>CATEGORY</h1>  
                  {cateOpen ? <BiMinus className='h-5 w-5 cursor-pointer ml-auto'/> : <BiPlus className='h-5 w-5 cursor-pointer ml-auto'/> }
                </div>

                <div style={{height:cateOpen ? 'fit-content' : '0px' }} className=' overflow-hidden'>
                  {categories.map((category,ind)=>(
                    <div key={ind} className='w-full  transition-all h-12 flex items-center px-6 gap-2 bg-gray-100  shadow-sm text-sm font-semibold' > <input type="checkbox" defaultChecked={category} name="" id={category} /> <label htmlFor={category}> {category}</label></div>                
                  ))}                  
                </div>

                <div onClick={()=>setbrandOpen(!brandOpen)} className='w-full h-12 flex items-center px-6 gap-2 bg-gray-100 border-t shadow-sm text-sm font-semibold'>
                  <h1>BRAND</h1>    
                  {brandOpen ? <BiMinus className='h-5 w-5 cursor-pointer ml-auto'/> : <BiPlus className='h-5 w-5 cursor-pointer ml-auto'/> }
                </div>

                <div style={{height:brandOpen ? 'fit-content' : '0px' }} className=' overflow-hidden'>
                  {Brands.map((brand,ind)=>(
                    <div key={ind} className='w-full h-12 flex items-center px-6 gap-2 bg-gray-100  shadow-sm text-sm font-semibold'> <input type="checkbox" name="" id={brand} /> <label htmlFor={brand}> {brand}</label></div>                
                  ))}
                </div>                
                 
                <div onClick={()=>setpriceOpen(!priceOpen)} className='w-full h-12 flex items-center px-6 gap-2 bg-gray-100 border-t shadow-sm text-sm font-semibold'>
                  <h1>PRICE</h1>    
                  {priceOpen ? <BiMinus className='h-5 w-5 cursor-pointer ml-auto'/> : <BiPlus className='h-5 w-5 cursor-pointer ml-auto'/> } 
                </div>

                {<div style={{height:priceOpen ? 'fit-content' : '0px' }} className=' overflow-hidden'>
                  {Prices.map((price,ind)=>(
                    <div key={ind} className='w-full h-12 flex items-center px-6 gap-2 bg-gray-100  shadow-sm text-sm font-semibold'> <input type="checkbox" name="" id={price} /> <label htmlFor={price}> {price}</label></div>                
                  ))}
                </div>}

                <div onClick={()=>setsizeOpen(!sizeOpen)} className='w-full h-12 flex items-center px-6 gap-2 bg-gray-100 border-y shadow-sm text-sm font-semibold'>
                  <h1>SIZE</h1>     
                  {sizeOpen ? <BiMinus className='h-5 w-5 cursor-pointer ml-auto'/> : <BiPlus className='h-5 w-5 cursor-pointer ml-auto'/> } 
                </div>

                {<div style={{height:sizeOpen ? 'fit-content' : '0px' }} className=' overflow-hidden'>
                  {Sizes.map((size,ind)=>(
                    <div key={ind} className='w-full h-12 flex items-center px-6 gap-2 bg-gray-100  shadow-sm text-sm font-semibold'> <input type="checkbox" name="" id={size} /> <label htmlFor={size}> {size}</label></div>                
                  ))}
                </div>}                

          </section>
      </aside>
        
        {/* <section className='w-1/4'>s</section> */}
        <section className=' w-full lg:w-3/4 p-10 flex flex-wrap justify-center md:justify-start bg-cyan-2000'>

          {data.map((product,i)=>(
            <Card product={product} size={true} key={i}/>
          ))}
              {/* <Card size = {true}/> 
              <Card size = {true}/>
              <Card size = {true}/>
              <Card size = {true}/>
              <Card size = {true}/>
              <Card size = {true}/>
              <Card size = {true}/> */}
        </section>
    </main>
  )
}

export default Products