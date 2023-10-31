import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo14.png'
import {BiHeart,BiCartAlt,BiSolidLockOpenAlt,BiSolidLockOpen} from 'react-icons/bi'
import {MdOutlineAccountBox,MdPersonAddAlt1,MdClose} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import {RiLuggageCartLine,RiAccountPinBoxFill} from 'react-icons/ri'

import AOS from 'aos'
import Minicart from './Minicart'
import { useContext } from 'react'
import DataContext from '../context/dataContext'
import SearchSec from './SearchSec'

const Header = () => {

  const {mainUser,likedProducts,cartProducts,handleLogOut} = useContext(DataContext)

  const [profilePopup,setProfilePopUp] = useState(false)
  const [cartPopup,setCartPopup] = useState(false)
  const [sidebar,setSideBar] = useState(false)

  // initializing the AOS 
  useEffect(() => {
    
      AOS.init({
        once: true, 
      });
    
  }, []);

  return (
    <main className='sticky z-30 top-0 bg-white shadow-sm w-full h-20 md:h-24 border border-b-gray-100 flex items-center justify-between lg:px-16 xl:px-28 bg-greesn-300'>
      
      {/* header: logo */}

      <Link to='/' style={{backgroundImage:`url(${logo})`}} className='h-full aspect-video bg-blend-screen bg-contain bg-center bg-no-repeat '></Link>
      
      {/* header: search bar */}

        <SearchSec/>

      <section className='hidden md:w-44 lg:w-52 h-full md:flex items-center justify-around bg-amber-0'>

        {/* header: wishlist icon and count*/}

        <Link to={mainUser ?'/wishlist' : '/signup'} className='relative bg-pink-1000 h-full w-1/3 flex items-center justify-center hover:text-pink-600'> 
          <BiHeart className='h-6 w-6'/> 
          {likedProducts.length ? <span className=' absolute bg-pink-600 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs top-5 right-3'>{likedProducts?.length}</span>:<></>}
        </Link>

        {/* header: cartitems icon and count and render the minicart component */}

        <div className=' relative h-full w-1/3 flex items-center justify-center hover:text-pink-600 cursor-pointer' onMouseEnter={()=>setCartPopup(true)} onMouseLeave={()=>setCartPopup(false)}> 
          <BiCartAlt className='h-6 w-6'/> 
          
          {cartProducts.length ? <span className=' absolute bg-pink-600 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs top-5 right-3'>{cartProducts?.length}</span>:<></>}

          {cartPopup && <Minicart setCartOpen={setCartPopup}/>}
        </div>
        
        {/* header: acc icon and render the signup/login option div */}

        <div className=' relative h-full w-1/3  flex items-center justify-center hover:text-pink-600 cursor-pointer' onMouseEnter={()=>setProfilePopUp(true)} onMouseLeave={()=>setProfilePopUp(false)}> 
          <MdOutlineAccountBox className='h-6 w-6'/> 

          {(profilePopup && mainUser) ?

            <div onClick={()=>setProfilePopUp(false)} className=' absolute top-full right-0 lg:left-0 z-10 w-32 xl:w-40 h-28 px-2 flex flex-col items-center justify-center rounded bg-white text-black drop-shadow-md cursor-default' data-aos="fade-up"  data-aos-duration="500">
                <Link to='/user/profile'  className='flex gap-2 text-xs font-semibold items-center w-full h-12 hover:bg-gray-100 rounded-sm'> <RiAccountPinBoxFill    className='h-4 w-4 text-pink-500'/> <h1>Account</h1> </Link>
                <Link to='/user/orders'  className='flex gap-2 text-xs font-semibold items-center w-full h-12 hover:bg-gray-100 rounded-sm'> <RiLuggageCartLine  className='h-4 w-4 text-pink-500'/> <h1>My Orders</h1> </Link>
                <button  onClick={handleLogOut} className='flex gap-2 text-xs font-semibold items-center w-full h-12 hover:bg-gray-100 rounded-sm'> <BiSolidLockOpen  className='h-4 w-4 text-pink-500'/> <h1>SignOut</h1> </button>

            </div>:
            profilePopup &&
            <div className=' absolute top-full right-0 lg:left-0 z-10 w-32 xl:w-40 h-28 px-2 flex flex-col items-center justify-center rounded bg-white text-black drop-shadow-md cursor-default' data-aos="fade-up"  data-aos-duration="500">
                <Link to='/signup' className='flex gap-2 text-xs font-semibold items-center w-full h-12 hover:bg-gray-100 rounded-sm'> <MdPersonAddAlt1    className='h-4 w-4 text-pink-500'/> <h1>Signup</h1> </Link>
                <Link to='/login' className='flex gap-2 text-xs font-semibold items-center w-full h-12 hover:bg-gray-100 rounded-sm'> <BiSolidLockOpenAlt  className='h-4 w-4 text-pink-500'/> <h1>Login</h1> </Link>
            </div>

          }

        </div>

      </section>
      
      {/* header: mobile menubar icon */}

      <div className='md:hidden cursor-pointer relative mx-1 text-pink-600' onClick={()=>setSideBar(!sidebar)}>
          {sidebar ? <MdClose className='h-5 w-5'/> : <FiMenu className='h-5 w-5'/> }
      </div>
      
      {/* header: mobile menubar section */}
      
      {(sidebar && mainUser) ?
      <section style={{height:'60vh'}} className='absolute w-full md:hidden top-20 right-0 flex flex-col items-center justify-evenly grid-rows-4 bg-white transition-all' data-aos="fade-left" data-aos-duration="1000">
        
        <Link to='/wishlist' onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-64 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>wishlist</Link>
        <Link to='/cart'     onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-64 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>cart items</Link>
        <Link to='/user/profile'   onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-64 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>profile</Link>
        <Link to='/user/orders'    onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-64 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>orders</Link>

      </section>:
      sidebar && 
      <section style={{height:'60vh'}} className='absolute w-full md:hidden top-20 right-0 flex flex-col items-center justify-evenly grid-rows-4 bg-white transition-all' data-aos="fade-left" data-aos-duration="1000">
        
        <Link to='/wishlist' onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-64 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>wishlist</Link>
        <Link to='/cart'     onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-64 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>cart items</Link>
        <Link to='/signup'   onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-64 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>signup</Link>
        <Link to='/login'    onClick={()=>setSideBar(false)} className=' bg-pink-400 text-black h-10 w-64 flex items-center justify-center rounded-md text-base font-semibold shadow-sm hover:scale-95 active:scale-95'>login</Link>

      </section>}

    </main>
  )
}

export default Header