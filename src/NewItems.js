import React from 'react'
import Card from './Card'
const NewItems = () => {
  return (
    <main className='w-full my-10'>

      <h1 className=' text-3xl font-semibold text-center'>NEW ARRIVALS</h1>
      <main className='w-full p-10 flex flex-wrap justify-center md:justify-start bg-cyan-2000'>

              <Card/> 
              <Card/>
              <Card/>
              <Card/>
           
        </main>
    </main>
  )
}

export default NewItems