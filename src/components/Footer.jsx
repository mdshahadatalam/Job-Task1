import React from 'react'
import logo from '../assets/image/tour buddy.png'
import { RiArrowDropDownFill } from 'react-icons/ri'
import img from '../assets/image/image 27.png'
import img2 from '../assets/image/image 28.png'
import img3 from '../assets/image/image 29.png'
import img4 from '../assets/image/image 30.png'
import img5 from '../assets/image/image 31.png'
import img6 from '../assets/image/image 37.png'
import img7 from '../assets/image/image 33.png'
import img8 from '../assets/image/image 34.png'
import img9 from '../assets/image/image 35.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiPelican } from 'react-icons/si'
// import { SiPearson } from 'react-icons/si'
export const Footer = () => {
  return (
    <>
           <section className='bg-[#13253F] py-14 px-4 sm:px-6 lg:px-8'>
       <div className='max-w-6xl mx-auto'>
         <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              <div className='flex flex-col items-center md:items-start'>
                  <img src={logo} alt="logo" className='w-32 md:w-auto' />
                  
                    <div className='mt-5'>
                           <button className='flex justify-center items-center gap-2 pt-2 w-[210px] h-[46px] bg-[#13253f] border border-white/20 text-white/60'>English (UK)  <span className='text-2xl'><RiArrowDropDownFill /></span> </button>
                    </div>

                    <div className='mt-8'>
                           <button className='flex justify-center items-center gap-2 pt-2 w-[210px] h-[46px] bg-[#13253f] border border-white/20 text-white/60'>U.S. Dollar ($)<span className='text-2xl'><RiArrowDropDownFill /></span> </button>
                    </div>
              </div>

              <div>
                  <h4 className='font-bold text-[15px] text-white/40'>Payment</h4>
                  <p className='font-normal text-[15px] leading-[200%] text-white/40 hover:cursor-pointer'>About Us</p>
                  <p className='font-normal text-[15px] leading-[200%] text-white/40 hover:cursor-pointer'>Blog</p>
                  <p className='font-normal text-[15px] leading-[200%] text-white/40 hover:cursor-pointer'>Press Room</p>
                  <p className='font-normal text-[15px] leading-[200%] text-white/40 hover:cursor-pointer'>Careers</p>
              </div>


              <div>
              <h4 className='font-bold text-[15px] text-white/40'>Help</h4>
                  <p className='font-normal text-[15px] leading-[200%] text-white/40 hover:cursor-pointer'>Contact Us</p>
                  <p className='font-normal text-[15px] leading-[200%] text-white/40 hover:cursor-pointer'>FAQs</p>
                  <p className='font-normal text-[15px] leading-[200%] text-white/40 hover:cursor-pointer'>Terms and Conditions</p>
                  <p className='font-normal text-[15px] leading-[200%] text-white/40 hover:cursor-pointer'>Privacy Policy</p>
                  <p className='font-normal text-[15px] leading-[200%] text-white/40 hover:cursor-pointer'>Site Map</p>
              </div>

              <div className='mt-12'>
                     <div className='grid grid-cols-10 justify-center'>
                        <div><img src={img} alt="" className=' object-contain'/></div>
                        <div><img src={img2} alt="" className=' object-contain'/></div>
                        <div><img src={img3} alt="" className=' object-contain'/></div>
                        <div><img src={img4} alt="" className=' object-contain'/></div>
                        <div><img src={img5} alt="" className=' object-contain'/></div>
                     </div>

                     <div className='grid grid-cols-10  justify-center'>
                        <div><img src={img5} alt="" className=' object-contain'/></div>
                        <div><img src={img6} alt="" className=' object-contain'/></div>
                        <div><img src={img7} alt="" className=' object-contain'/></div>
                        <div><img src={img8} alt="" className=' object-contain'/></div>
                        <div><img src={img9} alt="" className=' object-contain'/></div>
                     </div>
              </div>
         </div>
       </div>
    </section>

    <section className='bg-black py-3 px-4 sm:px-6 lg:px-8'>
       <div className='max-w-6xl mx-auto flex justify-between'>

           <div>
              <span className=' pt-3 font-normal text-[15px] text-white/40'>Copyright 2025 Tour Buddy. All Rights Reserved</span>
            </div>

           <div className='flex justify-center lg:justify-end space-x-2'>
               <div className='w-10 h-10 rounded-full bg-white flex justify-center pt-3'><span className='text-black'><FaFacebookF /></span> </div>
               <div className='w-10 h-10 rounded-full bg-white flex justify-center pt-3'><span className='text-black'><FaTwitter /></span></div>
               <div className='w-10 h-10 rounded-full bg-white flex justify-center pt-3'> <span className='text-black'><FaInstagram /></span></div>
               <div className='w-10 h-10 rounded-full bg-white flex justify-center pt-3'> <span className='text-black'><SiPelican /></span></div>
           </div>
       </div>
    </section>
    </>
  )
}
