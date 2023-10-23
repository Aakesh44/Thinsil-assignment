import React, { useState ,useEffect,useContext} from 'react'
import NewItems from './NewItems'
import {BiSolidShareAlt,BiSolidHeart,BiSolidCartAlt,BiCartAlt,BiHeart,BiPlus,BiMinus,BiLogoFacebook,BiLogoTwitter,BiLogoInstagram,BiLogoWhatsapp,BiLogoPinterestAlt} from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'
import DataContext from '../context/dataContext'
const SelectedProduct = () => {

  const {handleLike,cartProducts,likeProducts,handleCart,allProducts} = useContext(DataContext)

  const ID = useParams().id
  
  let product = allProducts.find((n)=> n.id === parseInt(ID)) 

  const Sizes = ['S' , 'M', 'L', 'XL','XXL']

  const [count,setCount] = useState(1)

  const [heartAction,setHeartAction] = useState(likeProducts.some(n=>n.id === product.id))
  const [cartAction,setCartAction] = useState(cartProducts.some(n=>n.id === product.id))

  const [sharePopup,setSharePopup] = useState(false)

 useEffect(()=>{
    product = allProducts.find((n)=> n.id === parseInt(ID)) 
    setHeartAction(likeProducts.some(n=>n.id === product.id))
    setCartAction(cartProducts.some(n=>n.id === product.id))
 },[cartProducts,likeProducts])

  return (
    <main className='w-full mt-10 lg:px-20 xl:px-32'>
      <section className='w-full md:flex '>
      
      {/* product: img */}

        <aside className=' w-2/3 mx-auto md:w-2/5 p-2 lg:p-10 bg-cyan-2000 select-none'>
          <img src={product?.img || ""} alt="" className=' shadow-sm border' style={{aspectRatio:'3/4'}}/>
        </aside>

      {/* product: details  */}

        <aside className='w-full md:w-3/5 p-10 flex flex-col bg-amber-2000'>

          <header className='w-full flex bg-red-2000'>
            <div className='py-4'>
              <h1 className='text-2xl font-bold my-1'>{product?.title || ""}</h1>
              <p className='text-sm text-gray-600'>{product?.description || ""} 💥😌</p>
            </div>

            <div onClick={()=>setSharePopup(prev=>!prev)}  className='relative flex items-center justify-center gap-1 text-sm font-semibold ml-auto cursor-pointer'>
              <BiSolidShareAlt className='h-5 w-5'/>
              <p>Share</p>

              {sharePopup &&
              <span  className='absolute -top-1 bg-red-3000 flex items-center gap-3 transition'>

                <BiLogoFacebook     className=' h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-blue-700'/>
                <BiLogoTwitter      className=' h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-blue-400'/>
                <BiLogoInstagram    className=' h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-pink-700'/>
                <BiLogoWhatsapp     className=' h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-green-600'/>
                <BiLogoPinterestAlt className=' h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-red-700'/>

              </span>}

            </div>

          </header>

          <h1 className=' text-3xl font-bold text-pink-600 py-5'>₹{product?.price || ""}.00</h1>

          <div className='w-full flex py-5 select-none'>

            <div onClick={()=>handleLike(product)} className='w-1/2 text-sm font-semibold flex items-center justify-start gap-2 cursor-default'>
              {heartAction ? <BiSolidHeart className='h-6 w-6 active:scale-150 text-pink-500  transition'/>: <BiHeart className='h-6 w-6 active:scale-150 text-black transition'/>} 
              <p>Add to wishlist</p>
            </div>
            <div onClick={()=>handleCart(product)} className='w-1/2 text-sm font-semibold flex items-center justify-start gap-2 cursor-default'>
              {cartAction ? <BiSolidCartAlt className='h-6 w-6 active:scale-150 text-pink-500  transition'/>: <BiCartAlt className='h-6 w-6 active:scale-150 text-black transition'/>} 
              <p>Add to cart</p>
            </div>

          </div>

          <h1 className='text-sm font-semibold py-5'>Size:</h1>

          <div className='w-full py-5 flex flex-wrap justify-between'>
            
            {Sizes.map((size,ind)=>(
            <div className='w-fit flex items-center gap-1 text-sm font-semibold bg-red-4000' key={ind}>
              <input type="radio"  name="size" id={size} defaultChecked={size === 'S'} className='h-5 w-5'/> <label htmlFor={size}>{size}</label>
            </div>))}
          </div>
          
          <p style={{height:'1px'}} className='my-4 bg-pink-500'></p>

          <div className='w-fit p rounded-md mx-auto md:mx-0 flex bg-gray-100'>

              <button onClick={()=> count > 1 && setCount(prev => prev-1)} className='h-10 w-10 flex items-center justify-center rounded-full m-1 bg-gray-200 '><BiMinus className='h-5 w-5'/></button>
              <input value={count} readOnly className='h-10 w-14 text-center rounded m-1 bg-white outline-none'/>
              <button onClick={()=>setCount(prev=> prev+1)} className='h-10 w-10 flex items-center justify-center rounded-full m-1 bg-gray-200 '><BiPlus className='h-5 w-5'/></button>

          </div>

          <Link to="/checkout" className=' w-3/5 md:w-fit md:px-6 py-2 my-5 mx-auto md:mx-0 flex items-center justify-center font-semibold text-lg bg-pink-600 text-white rounded-md active:scale-95'>Buy Now</Link>

        </aside>
      </section>
    
    {/* product: render newitem components */}
      <NewItems/>
    </main>
  )
}

export default SelectedProduct