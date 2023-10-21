import React, { useState } from 'react'
import {BiSolidHeart,BiSolidCartAlt,BiSolidRightTopArrowCircle,BiLoaderCircle,BiCartAlt,BiHeart} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Card = ({size}) => {

    const [cardHover,setCardHover] = useState(false)

    const [heartAction,setHeartAction] = useState(false)
    const [cartAction,setCartAction] = useState(false)

    function handleHeart() {
        let temp = heartAction
        setTimeout(()=>{
            setHeartAction(!temp)
        },1000)
        setHeartAction('load')
    }

    function handleCart() {
        let temp = cartAction
        setTimeout(() => {
            setCartAction(!temp)
        }, 1000);

        setCartAction('load')
    }

    const img = "https://s3.eu-central-1.wasabisys.com/zemuria/plipplip.store/products/hzfKUCMpDt7eQwc3qJZkJpoDiYjEjrqndTwmMO48.webp"
  return (
    <main className={`w-full sm:w-1/2 md:w-1/3 ${size ? "lg:w-1/2 xl:w-1/3" : "lg:w-1/3 xl:w-1/4"} p-5 bg-red-5000 flex items-center justify-center select-none `} style={{aspectRatio:'4/5'}}>

        <section className='Card cursor-pointer bg-white w-full h-full p-5 flex flex-col transition-all border md:border-0' onMouseEnter={()=>setCardHover(true)} onMouseLeave={()=>setCardHover(false)}>
            
            <div className='bg-blue-300 relative h-3/4 aspect-square border shadow  rounded bg-cover bg-center bg-no-repeat overflow-hidden' style={{backgroundImage:`url(${img})`}}>

                {cardHover && 
                <div className='cardOption  absolute z-10 inset-0 flex items-center justify-center'>

                    <span className='flex items-center justify-center gap-2' data-aos="fade-up">

                        <Link to={`/products/${1}`}><BiSolidRightTopArrowCircle className='cardIcons'/></Link>
                        
                        <span onClick={handleHeart}>
                            {heartAction == 'load' ? <BiLoaderCircle className='cardIcons animate-spin' /> : heartAction ? <BiSolidHeart className='cardIcons' /> : <BiHeart className='cardIcons' />}
                        </span>
                        <span onClick={handleCart}>
                            {cartAction == 'load' ? <BiLoaderCircle className='cardIcons animate-spin' /> : cartAction ? <BiSolidCartAlt className='cardIcons' /> : <BiCartAlt className='cardIcons' />}
                        </span>

                    </span>

                </div>}

            </div>

            <div className=' h-1/4 flex flex-col justify-evenly bg-red-2000 text-xs lg:text-sm font-semibold'>
                <h1>title title title</h1>
                <span className=' text-xs'>⭐⭐⭐⭐⭐</span>
                <p>₹2302</p>      
            </div>

        </section>
        
    </main>
  )
}

export default Card

