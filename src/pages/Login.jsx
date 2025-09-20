import React from 'react'
import {Formik, useFormik}from 'formik'
import Navbar from '../component/navbar'
import { Link } from 'react-router-dom'

const initialValues = {
  email:'',
  password:''
}
const validate = values =>{
  const errors ={}

  if(values.email){
    errors.email='Required'
    }else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)){
      errors.email='invalid mail format'
    }

    if (!values.password){
      errors.password='Required'
    }else if(values.password.length <8){
      errors.password='password  needs to be 8 character long'
    }
    return errors
  }


function Login() {
  const formik = useFormik({
     initialValues,
     validate,
     onSubmit: (values)=>{
      console.log(values)
    }
  })
  return (
    <div>
     <Navbar/>
<div className=' flex justify-center '>
      <form onSubmit={formik.handleSubmit} className=' justify-center w-[500px] h-[400px] bg-[ghostwhite] pl-[90px] mt-[50px]'>
        <label htmlFor="email" className='flex mt-[20px] mb-[-19px] text-[20px] ml-[10px]'>Email</label><br />
      <input type="email"
      name='email'
      placeholder='enter email'
      id='email'
      autoComplete='on'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email} 
      className='border-[2px] border-[grey]  flex justify-center w-[300px] h-[50px] rounded-[20px] pl-[10px] text-[20px]font-serif bg-[ghostwhite] '
      />
      {formik.touched.email && formik.errors.email ?(
        <div className='text-[red]'>{formik.errors.email}</div>
      ):null}

       <br />
      <label htmlFor="password"  className='flex mt-[10px] mb-[-19px] text-[20px] ml-[10px]'>Password</label><br />
      <input type="password"
      name='password'
      placeholder=' enter password'
      id='password'
      autoComplete='on'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password} 
      className='border-[2px] border-[grey]  flex justify-center w-[300px] h-[50px] rounded-[20px] pl-[10px] text-[20px]font-serif bg-[ghostwhite] '
      />
      {formik.touched.password && formik.errors.password ?(
        <div className='text-[red]'>{formik.errors.password}</div>
      ):null}
       <br />
      <button type='submit' className='border-[2px] border-[#005AE2] w-[100px] h-[40px] rounded-[20px] bg-[#005AE2] cursor-pointer text-[white]'>Login</button>
      <button type='submit' className='border-[2px] border-[#005AE2] w-[100px] h-[40px] rounded-[20px] bg-[ghostwhite] cursor-pointer ml-[90px]'><Link to='/Signup'>Sign up</Link></button>
      </form>
      </div>
    </div>
  )
}

export default Login
