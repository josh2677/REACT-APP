import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
function HamburgerComponent(){
    const [open, setOpen] = useState(false);
  return (
    <div className=' text-blue-400 md:hidden leading-[40px] '>
     <Hamburger
     size={24}
     toggled={open}
     toggle={setOpen}
     />
    {open && <div className= ' bg-blue-400 rounded-[10px] ]c'>
        <ul className='p-[10px]  text-amber-50  md:hidden '>
        <li className='text-[white]'><a href="#">My URL</a></li>
         <li className='text-[white]'><a href="#">Features</a></li>
          <li className='text-[white]'><a href="#">Pricing</a></li>
           <li className='text-[white]'><a href="#">Analytics</a></li>
           <li className='text-[white'><a href="#">FAQs</a></li>
        </ul>
        </div>}
    </div>
  )
}

export default HamburgerComponent