import React, { useContext, useState } from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import DataContext from '../context/dataContext'

const LogIn = () => {
  const {handleUser} = useContext(DataContext)

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false)

  const schema = yup.object().shape({
    email:yup.string().email().required('email required'),
    password:yup.string().required('password required').min(4,'min 4 char').max(8,'max 8 char'),
  })

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema),
    mode:"onBlur"
  })

  async function handleSubmitForm (e){
    e.preventDefault()
    try {
      const config = {
        headers: {
            "Content-Type": "application/json"
        }
      }

      const response = await axios.post(
        "http://localhost:4000/log-in",
        {
          email:email,
          password:password,
        },
        config
      )

      // console.log(response);
      setError(null)
      localStorage.setItem('store-user',JSON.stringify(response.data._id))
      handleUser()

    } catch (error) {
      if (error.response) {
        setError(error.response.data)
        console.log('Server responded with:', error.response.data);
      } else {
        console.log('Request failed:', error.message);
      }
    }
  }

  return (

    //login form
    
    <form onSubmit={(e)=>handleSubmit(handleSubmitForm(e))} className='w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-5 mt-10 mb-20 text-xs font-semibold flex flex-col justify-around border rounded-sm bg-cyan-2000'>

      <header className='w-full my-5 mb-10 text-2xl font-bold text-center '>
        <h1>Login</h1>
      </header>
      
      <span style={{visibility: (errors.email?.message || errors.password?.message || error) ? "visible" : "hidden"}} 
      className=' mb-2 p-1 text-sm font-semibold bg-red-500 text-white'>{errors.email?.message || errors.password?.message || error}</span>

      <div className='h-20 flex flex-col justify-around mb-4'>
        <label htmlFor="email">E-mail* </label>

        <input type="text"
          {...register('email')} value={email} onChange={(e)=>setEmail(e.target.value)}
          id='email' className='w-full mx-auto focus:outline-1 outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>
        
      </div>

      <div className='h-20 flex flex-col justify-around mb-4'>
        <label htmlFor="password">Password * </label>

        <input  type="password"
          {...register('password')} value={password} onChange={(e)=>setPassword(e.target.value)}
          id='password' className='w-full mx-auto focus:outline-1 outline-pink-500 border h-10 rounded-md text-sm font-semibold px-3 bg-gray-50 border-gray-200' placeholder='Coupon code'/>

      </div>

      <div className='h-20 flex items-center  justify-between mb-4 select-none'>
        <div className='flex items-center gap-2'>
          <input type="checkbox" name="" id="reme" className=' bg-gray-50 checked:text-pink-600'/>
          <label htmlFor="reme">Remember Me</label>
        </div>
        <h1 className='text-pink-600'>Forgot Password ?</h1>
      </div>   

      <button type="submit" className=' border-2 border-pink-600 text-pink-600 transition-all h-10 w-5/6 mx-auto rounded-md text-xs font-bold flex items-center justify-center active:scale-95'>Login</button>

    </form>
  )
}

export default LogIn