import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from './images/logo8.png'
import {BiSearch,BiHeart,BiSolidCartAlt,BiSolidLockOpenAlt} from 'react-icons/bi'
import {MdOutlineAccountBox,MdPersonAddAlt1,MdClose} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'

import AOS from 'aos'
import Minicart from './Minicart'

const Header = () => {

  const [profilePopup,setProfilePopUp] = useState(false)
  const [cartPopup,setCartPopup] = useState(false)
  const [sidebar,setSideBar] = useState(false)

  useEffect(() => {
    
      AOS.init({
        once: true, 
      });
    
  }, []);
  return (
    <main className='sticky top-0 bg-white shadow-sm w-full h-20 md:h-24 border border-b-gray-100 flex items-center justify-around bg-greesn-300'>
      

      <Link to='/' style={{backgroundImage:`url(${logo})`}} className='h-full aspect-video bg-blend-multiply bg-contain bg-center bg-no-repeat '></Link>
      
      <section className='searchdiv w-52 md:w-72 lg:w-96 h-10 p-1 flex justify-center items-center rounded-full overflow-hidden transition-all focus-within:drop-shadow-xl bg-gray-100 focus-within:bg-white focus-within:border border-pink-300 '>

        <input type="text" placeholder='search items' className='w-full h-full px-3 bg-transparent outline-none border-0'/>

        <button className='w-10 h-full flex justify-center items-center'>
          <BiSearch className=' h-5 md:h-6 w-5 md:w-6 text-pink-700'/>
        </button>

      </section>

      <section className='hidden md:w-44 lg:w-52 h-full md:flex items-center justify-around bg-amber-0'>

        <Link to='/wishlist' className='h-full w-1/3 flex items-center justify-center hover:text-pink-600'> <BiHeart className='h-6 w-6'/> </Link>

        <div className=' relative h-full w-1/3 flex items-center justify-center hover:text-pink-600 cursor-pointer' onMouseEnter={()=>setCartPopup(true)} onMouseLeave={()=>setCartPopup(false)}> 
          <BiSolidCartAlt className='h-6 w-6'/> 

          {cartPopup && <Minicart setCartOpen={setCartPopup}/>}
        </div>

        <div className=' relative h-full w-1/3  flex items-center justify-center hover:text-pink-600 cursor-pointer' onMouseEnter={()=>setProfilePopUp(true)} onMouseLeave={()=>setProfilePopUp(false)}> 
          <MdOutlineAccountBox className='h-6 w-6'/> 

          {profilePopup &&

          <div className=' absolute top-full right-0 lg:left-0 z-10 w-48 h-28 px-2 flex flex-col items-center justify-center rounded bg-white text-black drop-shadow-md cursor-default' data-aos="fade-up"  data-aos-duration="500">
              <Link to='/signup' className='flex gap-2 text-xs font-semibold items-center w-full h-12 hover:bg-gray-100 rounded-sm'> <MdPersonAddAlt1    className='h-4 w-4'/> <h1>Signup</h1> </Link>
              <Link to='/login' className='flex gap-2 text-xs font-semibold items-center w-full h-12 hover:bg-gray-100 rounded-sm'> <BiSolidLockOpenAlt className='h-4 w-4'/> <h1>Login</h1> </Link>
          </div>

          }

        </div>

      </section>

      <div className='md:hidden cursor-pointer relative mx-1 text-pink-600' onClick={()=>setSideBar(!sidebar)}>
          {sidebar ? <MdClose className='h-5 w-5'/> : <FiMenu className='h-5 w-5'/> }
      </div>
      
      {sidebar && 
      <section style={{height:'60vh'}} className='absolute w-full md:hidden top-20 right-0 flex flex-col items-center justify-evenly grid-rows-4 bg-white transition-all' data-aos="fade-left" data-aos-duration="1000">
        
        <Link to='/wishlist' onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-80 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>wishlist</Link>
        <Link to='/cart'     onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-80 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>cart items</Link>
        <Link to='/signup'   onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-80 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>signup</Link>
        <Link to='/login'    onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-80 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>login</Link>

      </section>}

    </main>
  )
}

export default Header