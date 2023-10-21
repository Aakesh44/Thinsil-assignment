import React, { useState } from 'react'
import NewItems from './NewItems'
import {BiSolidShareAlt,BiSolidHeart,BiSolidCartAlt,BiCartAlt,BiHeart,BiPlus,BiMinus,BiLogoFacebook,BiLogoTwitter,BiLogoInstagram,BiLogoWhatsapp,BiLogoPinterestAlt} from 'react-icons/bi'

const SelectedProduct = () => {
  const Sizes = ['S' , 'M', 'L', 'XL','XXL']

  const [count,setCount] = useState(1)

  const [heartAction,setHeartAction] = useState(false)
  const [cartAction,setCartAction] = useState(false)

  const [sharePopup,setSharePopup] = useState(false)

  const img = "https://s3.eu-central-1.wasabisys.com/zemuria/plipplip.store/products/pVN0EAgZphn8IMApPlOmXNvpDzFZreVAZ2ppScLI.webp"
  return (
    <main className='w-full mt-10 lg:px-20 xl:px-32'>
      <section className='w-full md:flex '>

        <aside className=' w-2/3 mx-auto md:w-2/5 p-2 lg:p-10 bg-cyan-2000 select-none'>
          <img src={img} alt="" className=' shadow-sm border' style={{aspectRatio:'3/4'}}/>
        </aside>

        <aside className='w-full md:w-3/5 p-10 flex flex-col bg-amber-2000'>

          <header className='w-full flex bg-red-2000'>
            <div className='py-4'>
              <h1 className='text-2xl font-bold my-1'>Karuthu Sorugal Hoodie</h1>
              <p className='text-sm text-gray-600'>Karuthu Penetration 💥😌</p>
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

          <h1 className=' text-3xl font-bold text-pink-600 py-5'>₹23233.00</h1>

          <div className='w-full flex py-5'>

            <div onClick={()=>setHeartAction(prev=>!prev)} className='w-1/2 text-sm font-semibold flex items-center justify-start gap-2 cursor-default'>
              {heartAction ? <BiSolidHeart className='h-6 w-6 active:scale-150 text-pink-500  transition'/>: <BiHeart className='h-6 w-6 active:scale-150 text-black transition'/>} 
              <p>Add to wishlist</p>
            </div>
            <div onClick={()=>setCartAction(prev=>!prev)} className='w-1/2 text-sm font-semibold flex items-center justify-start gap-2 cursor-default'>
              {cartAction ? <BiSolidCartAlt className='h-6 w-6 active:scale-150 text-pink-500  transition'/>: <BiCartAlt className='h-6 w-6 active:scale-150 text-black transition'/>} 
              <p>Add to cart</p>
            </div>

          </div>

          <h1 className='text-sm font-semibold py-5'>Size:</h1>

          <div className='w-full py-5 flex flex-wrap justify-between'>
            
            {Sizes.map((size,ind)=>(
            <div className='w-fit flex items-center gap-1 text-sm font-semibold bg-red-4000'>
              <input type="radio" key={ind} name="size" id={size} className='h-5 w-5'/> <label htmlFor={size}>{size}</label>
            </div>))}
          </div>
          
          <p style={{height:'1px'}} className='my-4 bg-pink-500'></p>

          <div className='w-fit py-5 mx-auto md:mx-0 flex b'>

              <button onClick={()=> count > 1 && setCount(prev => prev-1)} className='h-10 w-10 flex items-center justify-center rounded-full m-1 bg-pink-400 '><BiMinus className='h-5 w-5'/></button>
              <input value={count} readOnly className='h-10 w-14 text-center rounded m-1 bg-pink-400 outline-none'/>
              <button onClick={()=>setCount(prev=> prev+1)} className='h-10 w-10 flex items-center justify-center rounded-full m-1 bg-pink-400 '><BiPlus className='h-5 w-5'/></button>

          </div>

          <button className=' w-3/5 md:w-fit md:px-6 py-2 my-5 mx-auto md:mx-0 font-semibold text-lg bg-pink-600 text-white rounded-md active:scale-95'>Buy Now</button>

        </aside>
      </section>

      <NewItems/>
    </main>
  )
}

export default SelectedProduct