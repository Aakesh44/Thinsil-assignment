import React from 'react'
import { Link } from 'react-router-dom'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import {BiSolidTrash} from 'react-icons/bi'
import data from '../data/data.json'
import { useContext } from 'react'
import DataContext from '../context/dataContext'

const Cart = () => {

  const {cartProducts,handleCart} = useContext(DataContext)
  const totalPrice = cartProducts.reduce((acc,a)=>{return acc + a.price},0)

  return (
    
    <main className='w-full mt-10 mb-40 p-3 sm:px-10 lg:px-10 xl:px-32 '>

      {/* cart: header section */}
      <header className='w-full flex items-center justify-between px-5 my-5 md:my-10 md:mb-20 text-lg sm:text-2xl font-bold text-center bg-amber-3000'>
        <h1>SHOPPING CART</h1>
        <Link to="/products" className='text-xs sm:text-base text-pink-600 flex items-center gap-2'>
          <FaLongArrowAltLeft className='h-5 w-5'/>
          <p>Continue Shopping</p>
        </Link>
      </header>


      <section className='w-full lg:flex '>

        <aside className=' w-full lg:w-2/3 xl:px-5'>

        {/* cart: map over cartproducts array to render each product */}

        {cartProducts?.map((product,ind)=>(
          <div className='w-full h-28 my-4 border rounded-sm flex items-center justify-around px-2 md:px-7 sm:py-2 bg-cyan-2000 ' key={ind}>

            <Link to={`/products/${product.id || ""}`} className='h-5/6 sm:h-full aspect-square mr-3 border bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${product.img || ""})`}}></Link>

            <section className='flex flex-wrap  h-full sm:flex-row w-full items-center justify-around'>

              <Link to={`/products/${product.id || ""}`}  className='h-1/2 w-full bg-cyan-2000 sm:h-full sm:w-1/2 flex flex-col items-centser justify-center gap-1 md:gap-3 bg-green-3000 '>
                <h1  className='text-sm font-semibold whitespace-nowrap truncate'>{product.title || ""}</h1>
                <p className='text-sm sm:text-lg font-bold'>₹{product.price || 0}</p>
              </Link>

              <div className=' w-1/2 h-1/4 sm:h-full sm:w-1/4 flex flex-col justify-center items-center'>
                <h1 className=' text-xs sm:text-sm font-semibold text-gray-500'>Qty</h1>
                <h2 className=' text-sm sm:text-medium font-bold'>1</h2>
              </div>

              <div className=' w-1/2 h-1/4 sm:h-full sm:w-1/4 flex flex-col justify-center items-center'>
                <h1 className=' text-xs sm:text-sm font-semibold text-gray-500'>Price</h1>
                <h2 className=' text-sm sm:text-medium font-bold'>₹{product.price || 0}</h2>
              </div>

            </section>

            <span onClick={()=>handleCart(product)} className=' bg-pink-100 p-2 md:p-2 h-fit ml-auto my-auto rounded active:scale-95 transition'>
              <BiSolidTrash className='h-5 w-5 cursor-pointer text-pink-600'/>
            </span>
          </div>
        ))}

        </aside>

        <aside className='w-full lg:w-1/3 lg:px-5'>

          <div className='w-full my-4  flex flex-col items-center justify-around bg-cyan-2000 '>
            
            <section className='w-full h-60 p-5 grid grid-rows-3 grid-cols-1 border rounded-sm'>
              <h1 className='my-auto w-10/12 mx-auto text-sm font-semibold bg-amber-2000'>Apply your coupon here!</h1>

              <input type="text" className='w-10/12 mx-auto outline-none border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>

              <button className=' border-2 border-pink-600 text-pink-600 transition-all h-10 w-5/6 mx-auto my-auto rounded-md text-xs font-bold flex items-center justify-center active:scale-95'>Apply coupon</button>

            </section>

            {/* cart: price details section */}
            
            <section className='w-full flex flex-col items-center p-5 border rounded-sm my-4'>
              
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
                <p>₹{totalPrice || 0}</p>
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
                <p>₹{totalPrice || 0}</p>
              </div>

              <Link to="/checkout" className=' bg-pink-700 text-gray-50 h-12 w-5/6 mx-auto my-5 rounded-md text-xs font-bold active:scale-95 transition flex items-center justify-center'>PROCEED TO CHECKOUT</Link>


            </section>

          </div>

        </aside>

      </section>

    </main>
  )
}

export default Cart