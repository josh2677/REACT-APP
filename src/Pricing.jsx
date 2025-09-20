import React from 'react'
import Circle from './Assets/check-circle (1).svg'

function Pricing() {
  return (
    <div id='Pricing'>
      <div className='flex justify-center  mb-[50px] mt-[30px]'>
        <div className='border-[0.5px] border-[blue] w-[200px] pl-[20px] pt-[20px] mt-[50px] h-[300px] rounded-tl-[10px] rounded-bl-[10px] '>
           <p className='text-[20px]' >Basic</p> 
           <p className='font-bold text-[20px]'>Free</p>
           <p className='mb-[20px]'>Free plan for all users</p>
           <ul>
            <li className='flex gap-[5px] mt=[10px] text-[12px]'><img src={Circle} alt="" /> Unlimited URL Shortening</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Basic Link Analytics</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Short Customizable Links</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Standard Support</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Ad-supported</li>
           </ul>
        </div>

        <div className='border-[1px] border-[#1E3448] bg-[#1E3448] text-[white] w-[300px] h-[400px] pl-[20px] pt-[40px] rounded-[10px]'>
             <p className='mb-[15px] text-[20px]'>Professional</p> 
           <p className='font-bold text-[20px] mb-[20px]'>$15/month</p>
           <p className='mb-[20px]'>Ideal for business creators</p>
           <ul>
            <li className='flex gap-[5px]  text-[12px]'><img src={Circle} alt="" /> Enhanced Link Analytics</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Custom Branched Domains</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Advanced Link Customize</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Priority Support</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Ad-free Experience</li>
           </ul>
        </div>

        <div className='border-[0.5px] border-[blue] w-[200px] pl-[20px] pt-[20px] mt-[50px] h-[300px] rounded-tr-[10px] rounded-br-[10px] '>
             <p >Teams</p> 
           <p className='font-bold text-[20px]'>$25/month</p>
           <p>Share with up to 10 users</p>
           <ul>
            <li className='flex gap-[5px] mt=[10px] text-[10px]'><img src={Circle} alt="" /> Team Collaboration</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Users Roles and Permissions</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Enhanced Security</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> API Access</li>
            <li className='flex gap-[5px] text-[12px] mt-[20px]'><img src={Circle} alt="" /> Dedicated Account Manage</li>
           </ul>
        </div>
             </div>
      <br />
       <div className='flex justify-center'>
          <button type='submit' className='border-[2px] border-[#005AE2] w-[170px] font-[] h-[40px] rounded-[20px] bg-[ghostwhite] cursor-pointer '>Get Custom Pricing</button>
      <button type='submit' className='border-[2px] border-[#005AE2] w-[170px] font-bold h-[40px] rounded-[20px] bg-[#005AE2] cursor-pointer ml-[30px] text-[white]'>Select Pricing</button>
        </div>

    </div>
  )
}

export default Pricing
