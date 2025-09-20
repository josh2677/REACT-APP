import React from 'react'
import logo from '../Assets/Logo.svg'
import arrow from '../Assets/chevron-down.svg'
import Hamburger from '../Component/Hambuger.jsx'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <nav>
            <div className=' gap-[100px] md:hidden lg:hidden flex'>
              <img src={logo} alt=""  /><Hamburger/>
              <br />
               
                
            </div>
    <div className='sm:hidden  md:flex justify-center text-center lg:flex  '>

     

       <ul className='   md:list-none flex pt-[20px] text-center bold text-[20px] gap-[80px] lg:flex  '>
         <img src={logo} alt="" className='' />
        <li><a href="#URL">MyURLs</a></li>
        <li ><a href="#" className='flex'>Features <img src={arrow} alt="" /></a></li>
        <li><a href="#Pricing">Pricing</a></li>
        <li><a href="#Analytics">Analytics</a></li>
        <li><a href="#FAQ">FAQs</a></li>
    
        
        <button className='text-[23px] ml-[110px] cursor-pointer hover:bg-[#0065FE] w-[100px] mt-[] rounded-[30px] h-[40px] hover:text-[white]'><Link to='/Login'>Login</Link></button>
       <button id='#Pricing' className='text-[23px] ml-[20px] mt-[5px] p-[7px] cursor-pointer bg-[#0065FE] rounded-[30px] text-[white]'>Try for free</button>
      </ul>
   

      
    </div>
   </nav>
  );
}


export default Navbar