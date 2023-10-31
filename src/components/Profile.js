import React, { useContext } from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DataContext from '../context/dataContext'
const Profile = () => {

    const {mainUser} = useContext(DataContext)
  return (
    <main className='w-full mt-10 mb-40 p-3 sm:px-10 lg:px-10 xl:px-32 bg-cyan-3000 select-none'>

      <header className='w-full flex items-center justify-between px-5 my-5 md:my-10 md:mb-20 text-lg sm:text-2xl font-bold text-center bg-amber-3000'>

        <h1>PROFILE</h1>

        <Link to="/user/orders" className='text-xs sm:text-base text-pink-600 flex items-center gap-2'>
          <p>Orders</p><FaLongArrowAltRight className='h-5 w-5'/>
        </Link>

      </header>

        <aside className=' w-full xl:px-5'>

            <form className='w-full mx-auto p-5 mt-10 mb-20 text-xs font-semibold flex flex-col md:flex-row justify-around  rounded-sm bg-cyan-2000 border'>
                
                <div className='h-20 w-full md:w-2/5 flex flex-col justify-around mb-4'>
                    <label htmlFor="name">Full Name</label>
                    <input value={mainUser?.username} readOnly type="text" id='name' className='w-full mx-auto outline-none transition-all border border-pink-500 h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 ' placeholder='Full Name'/>
                </div>

                <div className='h-20 w-full md:w-2/5 flex flex-col justify-around mb-4'>
                    <label htmlFor="email">E-mail </label>
                    <input value={mainUser?.email} readOnly type="text" id='email' className='w-full mx-auto outline-none border border-pink-500 h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 ' placeholder='Coupon code'/>
                </div>

            </form>                                      
        </aside>
    </main>
  )
}

export default Profile