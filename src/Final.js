import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidTrash } from 'react-icons/bi'
import data from './data.json'
const Final = () => {

  const cartProducts = data.filter(n=>n.inCart)
  const totalPrice = cartProducts.reduce((acc,a)=>{return acc + a.price},0)

  return (
    <main className='w-full mt-10 mb-40 p-3 sm:px-10 lg:px-10 xl:px-32 lg:flex'>

        <aside className=' w-full lg:w-1/2 xl:px-5'>

            <form className='w-full mx-auto p-5 mt-10 mb-20 text-xs font-semibold flex flex-col justify-around  rounded-sm bg-cyan-2000'>

                <header className='w-full my-5 mb-10 text-2xl font-bold text-center '>
                    <h1>Delivery Information</h1>
                </header>

                <div className='h-20 flex flex-col justify-around mb-4'>
                    <label htmlFor="name">Full Name * </label>
                    <input type="text" id='name' className='w-full mx-auto focus:outline outline-pink-500 transition-all border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Full Name'/>
                </div>

                <div className='h-20 flex flex-col justify-around mb-4'>
                    <label htmlFor="email">E-mail* </label>
                    <input type="text" id='email' className='w-full mx-auto focus:outline outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
                </div>

                <div className='h-20 flex flex-col justify-around mb-4'>
                    <label htmlFor="password">Phone * </label>
                    <input type="password" id='passoword' className='w-full mx-auto focus:outline outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Phone'/>
                </div>

                <div className='h-20 flex flex-col justify-around mb-4'>
                    <label htmlFor="Country">Country* </label>
                    <input type="password" id='Country' className='w-full mx-auto focus:outline outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Country'/>
                </div>

                <div className='h-20 flex flex-col justify-around mb-4'>
                    <label htmlFor="State">State * </label>
                    <input type="password" id='State' className='w-full mx-auto focus:outline outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='State'/>
                </div>

                <div className='h-20 flex flex-col justify-around mb-4'>
                    <label htmlFor="Address">Delivery Address * </label>
                    <input type="password" id='Address' className='w-full mx-auto focus:outline outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Delivery Address'/>
                </div>   
                
                <div className='h-fit flex flex-col gap-3 justify-around mb-4'>
                    <label htmlFor="Address">Order Note * </label>
                    <textarea name="" id="" cols="30" rows="10" className='w-full mx-auto focus:outline-2 outline-pink-500 border h-10 min-h-fit rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200'></textarea>
                </div>  
            </form>                                      
        </aside>

        <aside className='w-full lg:w-1/2 lg:px-5'>
            <div className='w-full mx-auto p-5 mt-10 mb-20 text-xs font-semibold flex flex-col justify-around rounded-sm bg-cyan-2000'>
                                
                <header className='w-full my-5 mb-10 text-2xl font-bold text-center '>
                    <h1>Order Summary</h1>
                </header>

                <section className='minicart w-full p-2 max-h-60 flex flex-col overflow-y-scroll border border-gray-300 rounded-sm'>

                {cartProducts?.map((product,ind)=>(
                    <main className='h-24 w-full px-5 py-2 my-2 border border-gray-100 flex items-center justify-around rounded-sm' key={ind}>

                        <Link to={`/products/${product.id || ""}`} className='w-1/6' >
                            <img src={product.img || ""} alt="" className='h-full w-14'/>
                        </Link>

                        <Link to={`/products/${product.id || ""}`} className='w-2/3 overflow-hidden px-2' >
                            <h1  className=' text-sm font-semibold my-2 truncate'>{product.title || ""}</h1>
                            <p className=' text-xs font-semibold text-start'>1 x ₹{product.price || 0}</p>
                        </Link>
        
                        <span className=' bg-pink-100 p-2 rounded active:scale-95 transition-all'>
                            <BiSolidTrash className='h-5 w-5 cursor-pointer text-pink-600'/>
                        </span>

                    </main>
                ))}

                </section>

                <section className='w-full flex flex-col items-center p-5 border border-gray-300 rounded-sm my-4'>
                
                <div className='w-5/6 h-12 flex justify-between items-center text-sm font-semibold'>
                    <h1>Price Total</h1>
                    <p>₹{totalPrice || 0}</p>
                </div>

                <div className='w-5/6 h-12 flex justify-between items-center text-sm font-semibold'>
                    <h1>Coupon Discount</h1>
                    <p>₹100</p>
                </div>

                <div className='w-5/6 h-12 flex justify-between items-center text-sm font-semibold'>
                    <h1>Subtotal</h1>
                    <p>₹{totalPrice - 100 || 0}</p>
                </div>
                <div className='w-5/6 h-12 flex justify-between items-center text-sm font-semibold'>
                    <h1>IGST</h1>
                    <p>₹0</p>
                </div>

                <div className='w-5/6 h-12 flex justify-between items-center text-sm font-semibold'>
                    <h1>Tax</h1>
                    <p>₹0</p>
                </div>

                <div className='w-5/6 h-12 flex justify-between items-center text-base text-pink-600 font-bold'>
                    <h1>Grand Total</h1>
                    <p>₹{totalPrice - 100 || 0}</p>
                </div>

                <button to="/checkout" className=' bg-pink-700 text-gray-50 h-12 w-5/6 mx-auto my-5 rounded-md text-xs font-bold active:scale-95 transition flex items-center justify-center'>Place Order</button>


                </section>                

            </div>

        </aside>
    </main>
  )
}

export default Final