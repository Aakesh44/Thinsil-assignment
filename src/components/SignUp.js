import React, { useContext, useState } from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import DataContext from '../context/dataContext'

const SignUp = () => {

  const {handleUser} = useContext(DataContext)

  const [name,setName]= useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [conPassword,setConPassword] = useState("")

  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)

  const schema = yup.object().shape({
    name:yup.string().required('name required').min(2,'min 2 char'),
    email:yup.string().email().required('email required'),
    password:yup.string().required('password required').min(4,'min 4 char').max(8,'max 8 char'),
    conPassword:yup.string().required('confirm password required').oneOf([yup.ref('password'),null],'passwords must match')
  })

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema),
    mode:"onBlur"
  })  

  async function handleSignUpForm(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const config = {
        headers: {
            "Content-Type": "application/json"
        }
      }

      const response = await axios.post(
        "https://fake-store-server.vercel.app/sign-up",
        {
          username:name,
          email:email,
          password:password,
        },
        config
      )

      console.log(response);
      localStorage.setItem('store-user',JSON.stringify(response.data._id))
      handleUser()
      window.history.back()
      setLoading(false)

      setName("")
      setEmail("")
      setPassword("")
    } catch (error) {
      setLoading(false)
      if (error.response) {
        setError(error.response.data.error)
        console.log('Server responded with:', error.response.data);
      } else {
        console.log('Request failed:', error.message);
      }
    }
  }
  return (

    // signup form 
    
    <form onSubmit={(e)=>handleSubmit(handleSignUpForm(e))} className=' w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-5 mt-10 mb-20 text-xs font-semibold flex flex-col justify-around border rounded-sm bg-cyan-2000'>

      <header className='w-full my-5 mb-10 text-2xl font-bold text-center '>
        <h1>Create Accont</h1>
      </header>
      <h1>{loading && "loadinggggg"}</h1>
      <span style={{visibility: (errors.name?.message || errors.email?.message || errors.password?.message || errors.conPassword?.message || error) ? "visible" : "hidden"}} 
      className=' mb-2 p-1 text-sm font-semibold bg-red-500 text-white'>

        {errors.name?.message || errors.email?.message || errors.password?.message || errors.conPassword?.message || error}

      </span>

      <div className='h-20 flex flex-col justify-around mb-4'>
        <label htmlFor="name">Name * </label>

        <input type="text" id='name' 
          {...register("name")} value={name} onChange={(e)=>setName(e.target.value)}
          className='w-full mx-auto focus:outline-1 outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
      </div>

      <div className='h-20 flex flex-col justify-around mb-4'>
        <label htmlFor="email">E-mail* </label>

        <input type="text" id='email' 
          {...register("email")} value={email} onChange={(e)=>setEmail(e.target.value)}
          className='w-full mx-auto focus:outline-1 outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
      </div>

      <div className='h-20 flex flex-col justify-around mb-4'>
        <label htmlFor="password">Password * </label>

        <input type="password" id='passoword' 
          {...register("password")} value={password} onChange={(e)=>setPassword(e.target.value)}
          className='w-full mx-auto focus:outline-1 outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
      </div>

      <div className='h-20 flex flex-col justify-around mb-4'>
        <label htmlFor="cpassword">Confirm Password * </label>

        <input type="password" id='cpassword' 
          {...register("conPassword")} value={conPassword} onChange={(e)=>setConPassword(e.target.value)}
          className='w-full mx-auto focus:outline-1 outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
      </div>   

      <button className=' border-2 border-pink-600 text-pink-600 transition-all h-10 w-5/6 mx-auto mt-5 rounded-md text-xs font-bold flex items-center justify-center active:scale-95'>Create</button>

      <button  type="submit" className='my-8 text-pink-700 '>Return to Store</button>
    </form>
  )
}

export default SignUp