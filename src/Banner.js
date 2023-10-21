import React from 'react'
import data from './data.json'

const Banner = () => {

  const img = data.filter((n,i)=> ( i === 0 || i === 5 || i === 9 || i === 13)).map(n=>n.img)

  return (
    <main className='w-full h-96 mt-8 mb-12 p-5 flex items-center justify-center bg-pink-1000'>

      <div className='w-1/2 bg-contain bg-no-repeat bg-center bg-blue-1000 h-full' style={{backgroundImage:"url('https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-2713.jpg?w=996&t=st=1697889387~exp=1697889987~hmac=1aa714aec6ea90db51fb8110c6c19a5d376f338987e0afcba15038c07c2f8017')"}}>

      </div>
      {/* <img className='h-5/6' src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-2713.jpg?w=996&t=st=1697889387~exp=1697889987~hmac=1aa714aec6ea90db51fb8110c6c19a5d376f338987e0afcba15038c07c2f8017" alt="" /> */}

      <div className='w-1/2 h-full flex flex-col items-center justify-center gap-5 bg-green-3000'>
          <h1 className=' text-7xl font-semibold'>Thinsil Mart</h1>
          <h2 className='text-xl font-semibold'>Shop the Future Today!</h2>
      </div>

    </main>
  )
}

export default Banner