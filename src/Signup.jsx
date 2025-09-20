import React from 'react'
import {Formik, useFormik}from 'formik'
import Navbar from './component/navbar'
import {FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const initialValues = {
 firstname:'',
 lastname:'',
  email:'',
  confirmemail:'',
  password:'',
  confirmpassword:'',
  terms:'',
}
const validate = values =>{
  const errors ={}

   if(!values.firstname){
    errors.firstname='Required'
    }else if (!/^[a-zA-Z._]+$/i.test(values.firstname)){
      errors.firstname='Invalid name'
    }

    if(!values.lastname){
    errors.lastname='Required'
    }else if (!/^[a-zA-Z._]+$/i.test(values.lastname)){
      errors.lastname='Invalid name'
    }

  if(!values.email){
    errors.email='Required'
    }else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)){
      errors.email='invalid mail format'
    }

    if(!values.confirmemail){
    errors.confirmemail='Required'
    }else if (values.confirmemail !== values.email){
      errors.confirmemail='Emails do not match'
    }

    if (!values.password){
      errors.password='Required'
    }else if(values.password.length <8){
      errors.password='password  needs to be 8 character long'
    }

    if (!values.confirmpassword){
      errors.confirmpassword='Required';
    }else if(values.confirmpassword !== values.password){
      errors.confirmpassword='password do not match';
    }

    if (!values.terms){
      errors.terms = 'You must accept the terms and conditions'
    }
    return errors
  }


function Signup() {
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
      <form
       onSubmit={formik.handleSubmit}
        className=' justify-center w-[500px] h-[1000px] bg-[ghostwhite] pl-[90px] mt-[50px]'>
<div className='flex '>
    <div>
        <label htmlFor="firstname" className='flex mt-[20px] mb-[-19px] text-[20px] ml-[10px]'>First Name</label><br />
      <input type="text"
      name='firstname'
      placeholder='First name'
      id='name'
      autoComplete='on'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.firstname} 
      className='border-[2px] border-[grey]  flex justify-center w-[150px] h-[40px] rounded-[10px] pl-[10px] text-[20px]font-serif bg-[ghostwhite] 
      &&{formik.touched.firstname && formik.errors.firstname ? border-[red] : border-[grey]}'
      />
      {formik.touched.firstname && formik.errors.firstname ?(
        <div className='text-[red]'>{formik.errors.firstname}</div>
      ):null}
</div>

<div className='ml-[10px]'>
        <label htmlFor="Last Name" className='flex mt-[20px] mb-[-19px] text-[20px] ml-[10px]'>Last Name</label><br />
      <input type="text"
      name='lastname'
      placeholder='Last name'
      id='name'
      autoComplete='on'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.lastname} 
      className='border-[2px] border-[grey]  flex justify-center w-[150px] h-[40px] rounded-[10px] pl-[10px] text-[20px]font-serif bg-[ghostwhite] 
      &&{formik.touched.lastname && formik.errors.lastname ? border-[red] : border-[grey]}'
      />
      {formik.touched.lastname && formik.errors.lastname ?(
        <div className='text-[red]'>{formik.errors.lastname}</div>
      ):null}
 </div>     

      </div>

      <br />

        <label htmlFor="email" className='flex  mb-[-19px] mt-[-20px] text-[20px] ml-[15px]'>Email</label><br />
      <input type="email"
      name='email'
      placeholder='enter email'
      id='email'
      autoComplete='on'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email} 
      className='border-[2px] border-[grey]  flex justify-center w-[300px] h-[40px] rounded-[10px] pl-[10px] text-[20px]font-serif bg-[ghostwhite] ml-[5px]
      &&{formik.touched.email && formik.errors.email ? border-[red] : border-[grey]}'
      />
      {formik.touched.email && formik.errors.email ?(
        <div className='text-[red]'>{formik.errors.email}</div>
      ):null}

       <br />

        <label htmlFor="confirmemail" className='flex mt-[-20px]  mb-[-19px] text-[20px] ml-[15px]'>Confirm Email</label><br />
      <input type="email"
      name='confirmemail'
      placeholder='Re-enter email'
      id='confirmemail'
      autoComplete='on'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.confirmemail} 
      className='border-[2px] border-[grey]  flex justify-center w-[300px] h-[40px] rounded-[10px] pl-[10px] text-[20px]font-serif bg-[ghostwhite] ml-[5px]
      &&{formik.touched.confirmemail && formik.errors.confirmemail ? border-[red] : border-[grey]}'
      />
      {formik.touched.confirmemail && formik.errors.confirmemail ?(
        <div className='text-[red]'>{formik.errors.confirmemail}</div>
      ):null}
      <br />

      <label htmlFor="password"  className='flex mt-[-20px]  mb-[-19px] text-[20px] ml-[15px]'>Password</label><br />
      <input type="password"
      name='password'
      placeholder=' enter password'
      id='password'
      autoComplete='on'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password} 
      className='border-[2px] border-[grey]  flex justify-center w-[300px] h-[40px] rounded-[10px] pl-[10px] text-[20px]font-serif bg-[ghostwhite]
      &&{formik.touched.password && formik.errors.password ? border-[red] : border-[grey]} '
      />
      {formik.touched.password && formik.errors.password ?(
        <div className='text-[red]'>{formik.errors.password}</div>
      ):null}

       <br />

          <label htmlFor="confirmpassword"  className='flex mt-[-20px]  mb-[-19px] text-[20px] ml-[15px]'>Confirm Password</label><br />
      <input type="password"
      name='confirmpassword'
      placeholder=' Re-enter password'
      id='confirmpassword'
      autoComplete='on'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.confirmpassword} 
      className='border-[2px] border-[grey]  flex justify-center w-[300px] h-[40px] rounded-[10px] pl-[10px] text-[20px]font-serif bg-[ghostwhite]
      &&{formik.touched.confirmpassword && formik.errors.confirmpassword ? border-[red] : border-[grey]} '
      />
      {formik.touched.confirmpassword && formik.errors.confirmpassword ?(
        <div className='text-[red]'>{formik.errors.confirmpassword}</div>
      ):null}

      <br />

      <div className=''>
        <input type="checkbox"
        name='terms'
        id='terms'
        onChange={formik.handleChange} 
        onBlur={formik.onBlur}
        checked={formik.values.terms}
        />
        <label htmlFor="checkbox" className='text-[13px] ml-[4px] '>By signing up you agree to our <a href="#" className='italic text-[blue] underline'>Terms of Service</a> and <br /> <a href="#" className='ml-[15px] italic text-[blue] underline'>Privacy Policy</a></label>
        </div>
         <div className='text-[red]'>{formik.errors.terms}</div>

         <br />

      <button type='submit' className='border-[2px] border-[#005AE2] w-[300px] h-[40px] rounded-[10px] bg-[#005AE2] cursor-pointer mt-[10px]'>Create Account</button>

      <br />
      <p className='mt-[10px] ml-[30px] text-[15px]'>Already have an Account <Link to='/Login' className='italic text-[blue] underline'>Sign in</Link></p>
      </form>
      </div>
    </div>
  )
}

export default Signup
