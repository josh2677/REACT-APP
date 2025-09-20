import React from 'react'
import Line from '../Assets/Line 70.svg'
import Minus from '../Assets/minus.svg'
import Plus from '../Assets/plus (2).svg'
function FAQs() {
  return (
    <div id='FAQ'>
      <div className='flex justify-center gap-[10px] '>
         <img src={Line} alt="" />
         <h1 className='text-[30px] font-bold text-[black]'>FAQs</h1>
      </div>

         <div className=' flex  justify-center'>
           <div className='w-[600px] shadow-2x1 pl-[5px]'>
         <div className='flex gap-[340px] mt-[30px] bg-[ghostwhite] '>
          <p>How does URL shortening work?</p>
          <img src={Minus} alt="" className='w-[16px]'/>
         </div>
         <div>
          <p className='text-[13px] mt-[10px] bg-[gainsboro] rounded-[8px] border-b-[1px] border-[grey]'>URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.</p>
          </div>
         <div className='flex gap-[91px] mt-[20px] bg-[ghostwhite] border-b-[1px] border-[grey]'>
          <p>Is it necessary to create an account to use the URL shortening service?</p>
          <img src={Plus} alt="" className='w-[15px]' />
         </div>
         <div className='flex gap-[212px] mt-[20px] bg-[ghostwhite] border-b-[1px] border-[grey]'> 
          <p>Are the shortened links permanent? Will they expire?</p>
          <img src={Plus} alt="" className='w-[15px]'/>
         </div>
          <div className='flex gap-[141px] mt-[20px] bg-[ghostwhite] border-b-[1px] border-[grey]'>
          <p>Are there any limitations on the number of URLs I can shorten?</p>
          <img src={Plus} alt="" className='w-[15px]'/>
         </div>
          <div  className='flex gap-[105px] mt-[20px] bg-[ghostwhite] border-b-[1px] border-[grey]'> 
          <p>Can I customize the shortened URLs to reflect my brand or content?</p>
          <img src={Plus} alt="" className='w-[15px]'/>
         </div>
          <div className='flex gap-[220px] mt-[20px] bg-[ghostwhite] border-b-[1px] border-[grey]'>
          <p>Can I track the performance of my shortened URLs?</p>
          <img src={Plus} alt="" className='w-[15px]'/>
         </div>
          <div className='flex gap-[80px] mt-[20px] bg-[ghostwhite] border-b-[1px] border-[grey]'>
          <p>How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?</p>
          <img src={Plus} alt="" className='w-[15px]'/>
         </div>
          <div className='flex gap-[310px] mt-[20px] bg-[ghostwhite] border-b-[1px] border-[grey]'>
          <p>What is a QR code and what can it do?</p>
          <img src={Plus} alt="" className='w-[15px]'/>
         </div>
          <div className='flex gap-[80px] mt-[20px] bg-[ghostwhite] border-b-[1px] border-[grey]'>
          <p>Is there an API available for integrating the URL shortening service into my own applications or websites?</p>
          <img src={Plus} alt="" className='w-[15px]'/>
         </div>
         
      </div>
    </div>
    </div>
  )
}

export default FAQs
