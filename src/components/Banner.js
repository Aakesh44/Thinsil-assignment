import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/dataContext'
const Banner = () => {

const {mainUser} = useContext(DataContext)

  return (
    <main className='banner w-full md:h-full md:mb-16 px-5 xl:px-14 md:flex items-center justify-center bg-pink-2000 select-none'>


      <aside className='relative w-11/12 md:w-1/2 mx-auto h-60 pr-5 md:h-full flex flex-col items-center md:items-start justify-center gap-5 md:gap-10 bg-green-2000' data-aos="fade-right">
        
        <img className=' absolute h-10 w-10 top-24 left- animate-bounce hidden lg:block' src="https://cdn-icons-png.flaticon.com/128/64/64787.png" alt="" />

        <h1 className=' text-5xl sm:text-3l md:text-5xl lg:text-6xl xl:text-7xl font-bold whitespace-nowrap'>THINSIL MART</h1>

        <h2 className=' text-base font-semibold md:hidden'>Shop the Future Today!</h2>

        <h2 className=' text-base font-semibold text-gray-700 hidden md:block'>Empowering Your Shop, One Click at a Time. Elevate Your E-commerce Experience. Shop Easy, Live Better. Your Ideal Destination for Online Shopping.</h2>

      {!mainUser &&
        <div className='md:flex items-center gap-5 hidden '>
          <Link to="/login" className='w-32 h-8 bg-pink-500 text-white rounded-full text-sm flex items-center justify-center font-semibold'>SIGN IN</Link>
          <Link to="/signup" className='w-32 h-8 border-2 border-pink-500 text-pink-600 rounded-full text-sm flex items-center justify-center font-semibold'>REGISTER</Link>
        </div>
      }

      </aside>

      <aside className='w-11/12 md:w-1/2 h-60 mx-auto md:h-full bg-blend-multiply bg-contain bg-no-repeat bg-center bg-blue-1000' data-aos="fade-left" 
      style={{backgroundImage:"url('https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-2713.jpg?w=996&t=st=1697889387~exp=1697889987~hmac=1aa714aec6ea90db51fb8110c6c19a5d376f338987e0afcba15038c07c2f8017')"}}>

      </aside>



    </main>
  )
}

export default Banner