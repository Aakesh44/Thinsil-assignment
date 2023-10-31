import React from 'react'
import {BiLogoReact, BiLogoTailwindCss, BiLogoMongodb, BiSolidHeart, BiLogoGithub, BiLogoInstagramAlt} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'
import {FaXTwitter} from 'react-icons/fa6'
import {SiExpress} from 'react-icons/si'
const Footer = () => {
  return (
    <main className='mt-20 w-full h-80 sm:px-10 lg:px-10 xl:px-32  bg-pink-300 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-10'>
    
      <section className=' bg-amber-3000 w-full h-full'>
        <h1 className=' text-3xl font-semibold mt-3 md:mt-10 text-center'>Tech Stack</h1>
        <div className=' flex items-center justify-evenly mt-5 md:mt-20'>

          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <BiLogoReact className='h-10 w-10 cursor-pointer'/>
          </a>

          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
            <BiLogoTailwindCss className='h-10 w-10 cursor-pointer'/>
          </a>

          <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
            <SiExpress className='h-10 w-10 cursor-pointer'/>
          </a>

          <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
            <BiLogoMongodb className='h-10 w-10 cursor-pointer'/>
          </a>


        </div>
      </section>

      <section className=' bg-emerald-3000 w-full h-full'>

        <h1 className=' text-3xl font-semibold mt-3 md:mt-10 text-center flex items-center justify-center gap-2'>Made By <BiSolidHeart/> Aakesh</h1>
        <div className=' flex items-center justify-evenly mt-5 md:mt-20'>

          <a href="https://aakesh44.github.io/Portfolio.me" target="_blank" rel="noopener noreferrer">
            <CgWebsite className='h-8 w-8 cursor-pointer'/>
          </a>

          <a href="https://github.com/Aakesh44" target="_blank" rel="noopener noreferrer">
            <BiLogoGithub className='h-8 w-8 cursor-pointer'/>
          </a>

          <a href="https://www.instagram.com/aakesh_rex" target="_blank" rel="noopener noreferrer">
            <BiLogoInstagramAlt className='h-8 w-8 cursor-pointer'/>
          </a>

          <a href="https://twitter.com/Aakesh_4" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className='h-8 w-8 cursor-pointer'/>
          </a>


        </div>
      </section>      
    </main>
  )
}

export default Footer