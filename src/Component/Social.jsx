import React from 'react'
import Icon from '../Assets/link-2.svg'
import Line from '../Assets/Line 7.svg'
import Frame from '../Assets/Frame.svg'
import Disk from '../Assets/Disk.svg'
function Social() {
  return (
    <div className='mt-[30px]'>

       <div className='flex justify-center gap-[145px]'>
        <div>
          <p className='font-black text-[25px]'>Why choose <span className='text-[blue]'>Scissors</span></p>
          <p className='text-[16px]'>Scissors is the hub of everything that has to do <br /> with your link management. We shorten your URLs, <br /> allow you creating custom ones for your personal, <br /> business, event usage. Our swift QR code <br /> creation, management and usage tracking with <br /> advance analytics for all of these is second to none. </p>
        </div>
        <div>
          <div>
            <p className='font-black mt-[30px]'>URL Shortening</p>
            <p className='text-[14px]'>Scissor allows you to shorten URLs of your <br /> business, events. Shorten your URL at scale, <br /> URL redirects.</p>
          </div>
          <div>
            <p id='Learn' className='font-black mt-[20px]'>QR Codes</p>
            <p className='text-[14px]'>Generate QR codes to your business, events. <br /> Bring your audience and customers to your <br /> doorstep with this scan and go solution.</p>
          </div>
        </div>
        <div>
          <div>
            <p className='font-black mt-[30px]'>Custom URLs</p>
            <p className='text-[14px]'>With Scissor, you can create custom URLs, <br /> with the length you want! A solution for socials <br /> and businesses.</p>
          </div>
          <div>
            <p className='font-black mt-[20px]'>Data Analytics</p>
            <p className='text-[14px]'>Receive data on the usage of either your <br /> shortened URL, custom URLs or generated QR <br /> codes. Embedded to monitor progress.</p>
          </div>
        </div>
    
       </div>
    <div className='flex justify-center'>
       <div className='justify-center '>
        <p className='font-black flex ml-[100px] mt-[40px] mb-[5px]'>A   <span className='text-[blue] ml-[3px] mr-[3px]'> price perfect</span>  for your needs.</p>
        <p>From catering for your personal, business, event, socials needs, you can be <br /> rest assured we have you in mind in our pricing.</p>
       </div>
       </div>
       <div>

       </div>
    </div>
    
  )
}

export default Social
