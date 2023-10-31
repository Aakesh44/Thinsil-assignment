import React, {  useState } from 'react'
import {BiSolidHeart,BiSolidCartAlt,BiSolidRightTopArrowCircle,BiCartAlt,BiHeart} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../context/dataContext'

const Card = ({productId,size}) => {

  const {mainUser,products,handleLikeProduct,handleDislikeProduct,handleAddToCart,handleRemoveFromCart,} = useContext(DataContext)

  let Item = products.find(n=>n._id === productId)

  const [cardHover,setCardHover] = useState(false)

  const navigate = useNavigate()

  function goToProduct() {
    navigate(`/products/${Item?._id}`)
  }

  const [liked,setLiked] = useState(mainUser?.likedProducts?.includes(Item?._id))
  const [inCart,setInCart] = useState(mainUser?.cartProducts?.includes(Item?._id))

  function handleLike() {
    if(liked){
      handleDislikeProduct(Item?._id)
    }
    else{
      handleLikeProduct(Item?._id)
    }
    setLiked( !liked )
  }

  function handleCart() {
    if(inCart){
      handleRemoveFromCart(Item?._id)
    }
    else{
      handleAddToCart(Item?._id)
    }
    setInCart( !inCart )
  }

  return (
    <main className={`w-full sm:w-1/2 md:w-1/3 ${size ? "lg:w-1/2 xl:w-1/3" : "lg:w-1/3 xl:w-1/4"} p-5 bg-red-5000 flex items-center justify-center select-none `} style={{aspectRatio:'4/5'}}>

        <section onClick={()=>goToProduct()}  className='Card cursor-pointer bg-white w-full h-full p-5 flex flex-col transition-all border md:border-0' onMouseEnter={()=>setCardHover(true)} onMouseLeave={()=>setCardHover(false)}>
            
            <div className='bg-pink-50 relative h-3/4 aspect-square border shadow-sm  rounded bg-cover bg-center bg-no-repeat overflow-hidden' style={{backgroundImage:`url(${Item?.img || ""})`}}>

                {cardHover && 
                <div className='cardOption  absolute z-10 inset-0 flex items-center justify-center'>

                    <span onClick={(e)=>e.stopPropagation()} className='flex items-center justify-center gap-2' >

                        <Link to={`/products/${Item?._id || ""}`} data-aos="fade-up" data-aos-duration="300"><BiSolidRightTopArrowCircle className='cardIcons'/></Link>
                        
                        <span onClick={handleLike} data-aos="fade-up" data-aos-duration="350">
                            {liked? <BiSolidHeart className='cardIcons' /> : <BiHeart className='cardIcons' />}
                        </span>

                        <span onClick={handleCart} data-aos="fade-up" data-aos-duration="400">
                            {inCart? <BiSolidCartAlt className='cardIcons' /> : <BiCartAlt className='cardIcons' />}
                        </span>

                    </span>

                </div>}

            </div>

            <div className=' h-1/4 flex flex-col justify-evenly bg-red-2000 text-xs lg:text-sm font-semibold'>
                <h1 className=' truncate'> {Item?.title || "title title title"}</h1>
                <span className=' text-xs'>⭐⭐⭐⭐</span>
                <p>₹{Item?.price || 0}</p>      
            </div>

        </section>
        
    </main>
  )
}

export default Card

