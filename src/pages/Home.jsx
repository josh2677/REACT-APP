import React from 'react'
import Navbar from '../component/navbar'
import vector3 from '../Assets/Vector 3.svg'
import Hamburger from 'hamburger-react'
import Social from '../Component/social'
import Icon from '../Assets/link-2.svg'
import Analytics from './Analytics'
import { Link } from 'react-router-dom'
import Group from '../Assets/Group 2.svg'
import Pricing from '../Pricing'
import FAQs from './FAQs'
import Sidepage from './Sidepage.'
import UrlTrimmer from './UrlTrimmer'
import Footer from './footer'
function Home() {
  return (
    <div>
<Navbar/>

<div className='flex text-center justify-center mt-[100px] '>
<div>
    <h2 className='text-[50px] font-bold'>Optimize your online experience with our <br /> Advanced <span className='text-[#0065FE]'>url shortening</span> solution</h2>
    <div className='justify-center text-center flex'><img src={vector3} alt="" /></div>
  <p className=' sm: padding-[70px]  md: mt-[40px] text-[20px]'>personalize your URLs to align with your brand identity, utilize customs slugs <br /> branded links and domain customization option to reinforce you brand presence an <br /> enahce user engagement</p>
</div>
</div>
<div className='justify-center text-center space-[50px] gap-[20px]'>
  <button className=' md: text-[23px] ml-[20px] mt-[30px] p-[7px] cursor-pointer bg-[#0065FE] rounded-[30px] text-[white] w-[200px]'><Link to="login">Login</Link></button>
    <button id='Learn' className=' text-[#0065FE] w-[150px] text-[20px] cursor-pointer hover:bg-[#0065FE] hover:text-[white] w-[50px] h-[50px] rounded-[30px]'> <a href="#Learn">learn more</a></button>
   
</div>

<div className='flex justify-center mt-[30px]'>
    <img src={Group} alt="" />
</div>

<div>
  <Analytics/>
</div>

   <Social/>

   <Pricing/>

   <div>
    <UrlTrimmer/>
   </div>

   <div className='mt-[30px]'>
    <FAQs/>
   </div>   
   <Sidepage/>
  
<Footer/>
    </div>
    
  )
}

export default Home