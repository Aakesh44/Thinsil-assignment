import React from 'react'
import Card from './Card'

import data from './data.json'

const NewItems = () => {

  const newProducts = data.filter((n,i)=> ( i === 0 || i === 5 || i === 9 || i === 13))

  
  return (
    <main className='w-full my-10'>

      <h1 className=' text-3xl font-semibold text-center'>NEW ARRIVALS</h1>
      <main className='w-full p-10 flex flex-wrap justify-center md:justify-start bg-cyan-2000'>
        
        {newProducts.map((product,ind)=>(
          <Card key={ind} product ={product}/>
        ))}
             
           
        </main>
    </main>
  )
}

export default NewItems