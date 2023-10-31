import React,{useContext} from 'react'
import {BiSolidTrash,BiCartAlt,BiSolidCartAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import DataContext from '../context/dataContext'

const Wishlist = () => {

  const {mainUser,likedProducts,handleDislikeProduct,handleRemoveFromCart,handleAddToCart} = useContext(DataContext)

  function checkCart(ID) {
    return mainUser?.cartProducts?.includes(ID)
  }

  function handleCart(ID) {
    let check  = mainUser?.cartProducts?.includes(ID)
    console.log(check);
    if(check){
      handleRemoveFromCart(ID)
    }
    else{
      handleAddToCart(ID)
    }
  }
  
  return (
    <main className='w-full mt-10 mb-40 p-3 sm:px-10 lg:px-20 xl:px-32 '>

      {/* wishlist: header section  */}
      <header className='w-full my-5 md:my-10 md:mb-20 text-2xl font-bold text-center '>
        <h1>WISHLIST</h1>
      </header>


      <div className='w-full'>

      {/* wishlist: map over likeproducts array to render each product */}

      {likedProducts?.map((product,ind)=>(

        <section key={ind} className='w-full h-28 my-5 border-2 rounded-sm flex items-center justify-around px-1 sm:p-3 md:px-10 sm:py-2'>

          <Link to={`/products/${product._id}`} className=' h-5/6 sm:h-full mr-2 sm:mr-5 aspect-square border bg-cover bg-center bg-no-repeat bg-red-300' style={{backgroundImage:`url(${product?.img || ""})`}}></Link>

          <div className='h-full w-2/5 md:mr-auto flex flex-col items-start justify-center gap-1 md:gap-3 bg-green-0 '>
            <Link to="/products/1" className='text-sm sm:text-base font-semibold'>{product.title || ""}</Link>
            <p className='text-lg font-bold'>₹{product.price || 0}</p>
          </div>
           
          <span onClick={()=>handleCart(product?._id)} className=' bg-pink-200 p-2 md:p-4 h-fit ml-auto my-auto rounded active:scale-95 transition cursor-pointer'>
            { (checkCart(product?._id)) ? <BiSolidCartAlt className=' h-5 lg:h-6 w-5 lg:w-6 cursor-pointer text-pink-600'/> :<BiCartAlt className=' h-5 lg:h-6 w-5 lg:w-6 cursor-pointer text-pink-600'/>}
          </span> 

          <span onClick={()=>handleDislikeProduct(product?._id)} className=' bg-pink-200 p-2 md:p-4 h-fit ml-auto my-auto rounded active:scale-95 transition cursor-pointer'>
            <BiSolidTrash className=' h-5 lg:h-6 w-5 lg:w-6 cursor-pointer text-pink-600'/>
          </span>

        </section>

              
      ))}

      </div>

    </main>
  )
}

export default Wishlist