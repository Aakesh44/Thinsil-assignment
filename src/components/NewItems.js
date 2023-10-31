import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../context/dataContext'

const NewItems = () => {

  const {products} = useContext(DataContext)

  const ids = [0,10,20,30]
  const newProducts = products.filter((_,i)=> ids.includes(i))

  
  return (
    <main className='w-full my-10'>

      <h1 className=' text-3xl font-semibold text-center'>NEW ARRIVALS</h1>
      <main className='w-full p-10 flex flex-wrap justify-center md:justify-start bg-cyan-2000'>
        
        {newProducts.map((product,ind)=>(
          <Card key={ind} productId ={product?._id}/>
        ))}
             
           
        </main>
    </main>
  )
}

export default NewItems