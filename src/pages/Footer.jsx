import React from 'react'
import Logo from '../Assets/Logo.svg'
import Facebook from '../Assets/i.fi-social-facebook.svg'
import Twitter from '../Assets/i.fi-social-twitter.svg'
import Linkedin from '../Assets/i.fi-social-linkedin.svg'
import Feather from '../Assets/svg.feather.svg'
function Footer() {
  return (
    <div>
      <div className='flex justify-center gap-[100px] mt-[30px] mb-[100px]'>
        <div>
            <img src={Logo} alt="" />
            <div className='flex gap-[10px]'>
              <img src={Twitter} alt=""  className='cursor-pointer'/>
               <img src={Feather} alt=""  className='cursor-pointer'/>
                <img src={Linkedin} alt=""  className='cursor-pointer'/>
                 <img src={Facebook} alt=""  className='cursor-pointer'/>
            </div>
        </div>
        <div>
            <div>
                <p className='font-bold text-[black] mb-[10px]'>Why Scissor?</p>
                <ul>
                    <li>Scissor 101</li>
                    <li>Intergrations & API</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div>
                <p className='font-bold text-[black] mb-[10px] mt-[30px]'>Resources</p>
                <ul>
                    <li>Blog</li>
                    <li>Resource Library</li>
                    <li>Developers</li>
                    <li>App Connectors</li>
                    <li>Support</li>
                    <li>Trust Center</li>
                    <li>Browser Extension</li>
                    <li>Mobile App</li>

                </ul>
            </div>

        </div>
        <div>
            <div>
                <p className='font-bold text-[black] mb-[10px]'>Solutions</p>
                <ul>
                    <li>Social Media</li>
                    <li>Digital Marketing</li>
                    <li>Customer Service</li>
                    <li>For Developers</li>
                </ul>
            </div>
            <div>
                <p className='font-bold text-[black] mb-[10px] mt-[30px]'>Features</p>
                <ul>
                    <li>Branded Links</li>
                    <li>Mobile Links</li>
                    <li>Campaign</li>
                    <li>Management &</li>
                    <li>Analytics</li>
                    <li>QR Code generation</li>

                </ul>
            </div>
        </div>
        <div>
            <div>
                <p className='font-bold text-[black] mb-[10px]'>Products</p>
                <ul>
                    <li>Link Management</li>
                    <li>QR Codes</li>
                    <li>Link-in-bio</li>
                </ul>
            </div>
            <div>
                <p className='font-bold text-[black] mb-[10px] mt-[30px]'>Legal</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Terms of Service</li>
                    <li>Acceptable Use Policy</li>
                    <li>Code of Conduct</li>
                </ul>
            </div>
        </div>
        <div>
            <p className='font-bold text-[black] mb-[10px] '>Company</p>
            <ul>
                <li>About Scissor</li>
                    <li>Carrers</li>
                    <li>Partners</li>
                    <li>Press</li>
                    <li>Contact</li>
                    <li>Reviews</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
