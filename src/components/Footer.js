import React from 'react'
import {BiLogoGithub,BiGlobe} from 'react-icons/bi'
const Footer = () => {
  return (
    <main className='mt-20 w-full h-80 bg-gray-200 flex flex-col justify-center items-center gap-10'>
      <h1 className=' text-lg sm:text-xl font-semibold text-center'>Thinsil Mart website is an assignment given by Thinsil Technologies Private Limited for a React developer job role.</h1>
      <h2 className=' text-xl sm:text-2xl font-bold'>Made by 🤍 Aakesh</h2>
      <span className='flex items-center mx-auto text-pink-600'>
        <a href="https://github.com/Aakesh44" target='_blank' rel="noreferrer"><BiLogoGithub className='h-8 w-8 mx-2'/></a>
        <a href="https://aakesh44.github.io/Portfolio.me" target='_blank' rel="noreferrer"><BiGlobe      className='h-8 w-8 mx-2'/></a>
      </span>
    </main>
  )
}

export default Footer