import React from 'react'
import Disk from '../Assets/Disk.svg'
function Analytics() {
  return (
    <div id='Analytics' className='mt-[40px]'>
       <img src={Disk} alt="" />
         <div className='flex gap-[300px] justify-center mt-[20px]'>
          <div>
            <p className='text-[22px] font-black'>One Stop</p>
            <p className='text-[22px] font-black'>Four <span className='text-[blue]'>Possibilities</span></p>
          </div>
          <div className='flex  gap-[100px]'>
            <div>
              <p className='font-black'>3M</p>
              <p className='text-[14px]'>Active users</p>
            </div>
            <div>
              <p className='font-black'>60M</p>
              <p className='text-[16px]'>Links & QR</p>
              <p className='text-[14px]'>codes created</p>
            </div>
            <div>
              <p className='font-black'>1B</p>
              <p className='text-[14px]'>Clicked & Scanned</p>
              <p className='text-[14px]'>connections</p>
            </div>
            <div>
              <p className='font-black'>300k</p>
              <p className='text-[14px]'>App Integrations</p>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Analytics
