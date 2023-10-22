import React, { useState } from 'react'
import {BiSolidHeart,BiSolidCartAlt,BiSolidRightTopArrowCircle,BiLoaderCircle,BiCartAlt,BiHeart} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import data from './data.json'

const Card = ({product,size}) => {


    const Item = data.find(n=>n.id === product.id)

    const [cardHover,setCardHover] = useState(false)

    const [heartAction,setHeartAction] = useState(Item.like)
    const [cartAction,setCartAction] = useState(Item.inCart)

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

    const navigate = useNavigate()
    function goToProduct() {
        navigate(`/products/${product.id}`)
    }

    return (
    <main className={`w-full sm:w-1/2 md:w-1/3 ${size ? "lg:w-1/2 xl:w-1/3" : "lg:w-1/3 xl:w-1/4"} p-5 bg-red-5000 flex items-center justify-center select-none `} style={{aspectRatio:'4/5'}}>

        <section onClick={()=>goToProduct()}  className='Card cursor-pointer bg-white w-full h-full p-5 flex flex-col transition-all border md:border-0' onMouseEnter={()=>setCardHover(true)} onMouseLeave={()=>setCardHover(false)}>
            
            <div className='bg-pink-50 relative h-3/4 aspect-square border shadow-sm  rounded bg-cover bg-center bg-no-repeat overflow-hidden' style={{backgroundImage:`url(${product?.img || ""})`}}>

                {cardHover && 
                <div className='cardOption  absolute z-10 inset-0 flex items-center justify-center'>

                    <span onClick={(e)=>e.stopPropagation()} className='flex items-center justify-center gap-2' >

                        <Link to={`/products/${product.id || ""}`} data-aos="fade-up" data-aos-duration="300"><BiSolidRightTopArrowCircle className='cardIcons'/></Link>
                        
                        <span onClick={handleHeart} data-aos="fade-up" data-aos-duration="350">
                            {/* {product.like ? <BiSolidHeart className='cardIcons' /> : <BiHeart className='cardIcons' />} */}
                            {heartAction === 'load' ? <BiLoaderCircle className='cardIcons animate-spin' /> : heartAction ? <BiSolidHeart className='cardIcons' /> : <BiHeart className='cardIcons' />}
                        </span>
                        <span onClick={handleCart} data-aos="fade-up" data-aos-duration="400">
                            {cartAction === 'load' ? <BiLoaderCircle className='cardIcons animate-spin' /> : cartAction ? <BiSolidCartAlt className='cardIcons' /> : <BiCartAlt className='cardIcons' />}
                        </span>

                    </span>

                </div>}

            </div>

            <div className=' h-1/4 flex flex-col justify-evenly bg-red-2000 text-xs lg:text-sm font-semibold'>
                <h1> {product?.title || "title title title"}</h1>
                <span className=' text-xs'>⭐⭐⭐⭐⭐</span>
                <p>₹{product?.price || 0}</p>      
            </div>

        </section>
        
    </main>
  )
}

export default Card

