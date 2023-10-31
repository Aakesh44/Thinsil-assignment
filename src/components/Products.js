import React, { useContext, useState } from 'react'
import {BiPlus,BiMinus} from 'react-icons/bi'
import {FaFilter} from 'react-icons/fa'
import Card from './Card'
import DataContext from '../context/dataContext'
const Products = () => {

  const {searchProducts} = useContext(DataContext)
  // console.log(searchProducts);

  const categories = [ "Kids' Wear" , "Women Clothing", 'Men Clothing','Accessories','Cosmetics','Footwear','Electronics','Home decor']
  const Brands = ['AAA' , 'BBB', 'CCC', 'DDD']
  const Prices = ['< 500 ' , '500 - 800', '800 - 1200', '1200 >']
  const Sizes = ['S' , 'M', 'L', 'XL','XXL']

  const [cateOpen,setcateOpen] = useState(false)
  const [brandOpen,setbrandOpen] = useState(false)
  const [priceOpen,setpriceOpen] = useState(false)
  const [sizeOpen,setsizeOpen] = useState(false)
  
  

  return (
    <main className='w-full lg:px-20 xl:px-32 mb-32 lg:flex justify-center bg-pink-1000'>
      
    {/* products: filter section */}

      <aside className='block mx-auto w-4/5 lg:w-1/4 py-14 select-none'>
          <div className='w-full h-12 flex items-center gap-2 bg-cyan-3000 text-xl font-bold'><FaFilter className='h-5 w-5'/> <h1>FILTERS</h1></div>

          <section className='w-full flex flex-col'>
                
                <div onClick={()=>setcateOpen(!cateOpen)} className='w-full h-12 flex items-center px-6 gap-2 bg-gray-100 border-t shadow-sm text-sm font-semibold'>
                  <h1>CATEGORY</h1>  
                  {cateOpen ? <BiMinus className='h-5 w-5 cursor-pointer ml-auto'/> : <BiPlus className='h-5 w-5 cursor-pointer ml-auto'/> }
                </div>

                <div style={{height:cateOpen ? 'fit-content' : '0px' }} className=' overflow-hidden'>
                  {categories.map((category,ind)=>(
                    <div key={ind} className='w-full  transition-all h-12 flex items-center px-6 gap-2 bg-gray-100  shadow-sm text-sm font-semibold' > <input type="checkbox" name="" id={category} /> <label htmlFor={category}> {category}</label></div>                
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

    {/* products: render the products    */}
    
      <section className=' w-full lg:w-3/4 p-10 flex flex-wrap justify-center md:justify-start bg-cyan-2000'>
          
          {searchProducts.map((product,i)=>(
            <Card productId={product._id} size={true} key={i}/>
          ))}
          
          
          {!searchProducts.length && 
          <div className='mx-auto my-auto font-semibold h-64 lg:h-96 aspect-square bg-center bg-cover bg-no-repeat bg-blend-screen' style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/computer-forensics-abstract-concept-vector-illustration_107173-28350.jpg?size=626&ext=jpg&uid=R107810290&ga=GA1.1.395143972.1697631505&semt=ais")` }}>
            <p className=' text-center'>No Search Results</p>
          </div>}

      </section>
    </main>
  )
}

export default Products