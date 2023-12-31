import React from 'react'
import { useContext } from 'react'
import {BiSolidTrash} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import DataContext from '../context/dataContext'

const Minicart = ({setCartOpen}) => {

  const {mainUser,cartProducts,handleRemoveFromCart} = useContext(DataContext)

  const totalPrice = cartProducts.reduce((acc,a)=>{return acc + a.price},0)

  return (
    <section className='absolute p-10 z-20 top-full right-0  bg-white text-black rounded-sm drop-shadow-md cursor-default  select-none' data-aos="fade-up" data-aos-duration="500">

        <aside className='minicart w-96 px-2 max-h-56 flex flex-col overflow-y-scroll'>

        {/* minicart: map over cartproducts array to render each product */}

        {cartProducts?.map((product,ind)=>(

            <main key={ind} className='h-24 w-full px-5 py-2 my-2 border-2 border-gray-300 flex items-center justify-around rounded-sm'>

                <Link to={`/products/${product._id || ""}`} className='w-1/4' onClick={()=>setCartOpen(false)}>
                    <img src={product.img || ""} alt="" className='h-full w-14'/>
                </Link>

                <Link to={`/products/${product._id || ""}`} className='w-2/3 overflow-hidden px-2' onClick={()=>setCartOpen(false)}>
                    <h1  className=' text-sm font-semibold my-2 truncate'>{product.title || ""}</h1>
                    <p className=' text-xs font-semibold text-start'>1 x ₹{product.price || ""}</p>
                </Link>
   
                 <span onClick={()=>handleRemoveFromCart(product?._id)} className=' bg-pink-100 p-2 rounded active:scale-95 transition cursor-pointer'>
                    <BiSolidTrash className='h-5 w-5 cursor-pointer text-pink-600'/>
                </span>

            </main>
 
        ))}

        </aside>
        
        {/* minicart: price and link section */}
        
        <aside className='w-96 h-52 grid grid-rows-3'>

            <div className='w-full text-base font-semibold flex items-center justify-around'>
              <h1>Total</h1>
              <h1>₹{totalPrice}</h1>
            </div>

            <Link to={mainUser ?"/checkout" : '/signup'} onClick={()=>setCartOpen(false)} className=' bg-pink-600 text-white h-10 w-5/6 mx-auto my-auto flex items-center justify-center rounded-md text-xs font-bold active:scale-95'>PROCEED TO CHECKOUT</Link>

            <Link to={mainUser ?'/cart' : '/signup'} onClick={()=>setCartOpen(false)} className=' border-2 border-black text-black h-10 w-5/6 mx-auto my-auto rounded-md text-xs font-bold flex items-center justify-center active:scale-95'>VIEW CART</Link>

        </aside>

    </section>
  )
}

export default Minicart