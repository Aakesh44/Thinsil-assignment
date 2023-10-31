import React, { useContext } from 'react'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DataContext from '../context/dataContext'
import Card from './Card'
const Orders = () => {

  const {orders} = useContext(DataContext)

  return (
    <main className='w-full mt-10 mb-40 p-3 sm:px-10 lg:px-10 xl:px-32 bg-cyan-3000 select-none'>

      <header className='w-full flex items-center justify-between px-5 my-5 md:my-10 md:mb-20 text-lg sm:text-2xl font-bold text-center bg-amber-3000'>

        <h1>ORDERS</h1>

        <Link to="/user/profile" className='text-xs sm:text-base text-pink-600 flex items-center gap-2'>
          <FaLongArrowAltLeft className='h-5 w-5'/><p>Profile</p>
        </Link>

      </header>

      {orders?.map((order,ind)=>(


        <section key={ind} className=' w-full xl:px-5 border border-pink-600 p-1 mb-10 bg-amber-3000 '>
                
          <aside className='w-full bg-pink-3000 border mt-10 py-2 flex gap-5 items-center text-sm font-semibold orders'>

              <div className='flex flex-col justify-center items-center gap-1 w-72 min-w-fit whitespace-nowrap'> 
                <h1>Order ID</h1>
                <h2 className='text-xs'>{order?._id}</h2>
              </div>
              <div className='flex flex-col justify-center items-center gap-1 w-72 min-w-fit whitespace-nowrap '>
                <h1>Amount</h1>
                <h2 className='text-xs'>{order?.price?.toFixed(0)}</h2>
              </div>
              <div className='flex flex-col justify-center items-center gap-1 w-72 min-w-fit whitespace-nowrap '>
                <h1>Date</h1>
                <h2 className='text-xs'>{order?.date.slice(0,10)}</h2>
              </div>              
              <div className='flex flex-col justify-center items-center gap-1 w-72 min-w-fit whitespace-nowrap '> 
                <h1>Payment Mode</h1>
                <h2 className='text-xs'>UPI</h2>
              </div>
              <div className='flex flex-col justify-center items-center gap-1 w-72 min-w-fit whitespace-nowrap '>
                <h1>Payment Status</h1>
                <h2 className='text-xs'>Complete</h2>
              </div>
              <div className='flex flex-col justify-center items-center gap-1 w-72 min-w-fit whitespace-nowrap'> 
                <h1>Order Status</h1>
                <h2 className='text-xs'>Delivered</h2>
              </div>          
          </aside>
          <main className='w-full p-10 flex flex-wrap justify-center md:justify-start bg-cyan-2000'>
            
            {order.productsId?.map((product,ind)=>(
              <Card key={ind} productId ={product?._id}/>
            ))}
                
              
          </main>
        </section>

      ))}
    </main>
  )
}

export default Orders