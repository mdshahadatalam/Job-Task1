import React, { useState } from 'react'
import man from '../assets/image/man.png'
import { CiStar } from 'react-icons/ci';
import { PiStarDuotone } from 'react-icons/pi';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FaCarSide } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';

import rang from '../assets/image/img (2).png'
import img1 from '../assets/image/img (1).png'
import img2 from '../assets/image/img (3).png'
import { LuCheckCheck } from 'react-icons/lu';

// import { Star } from "lucide-react";
export const Guide = ({ totalStars = 5, onRatingChange }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    const handleClick = (value) => {
        setRating(value);
        if (onRatingChange) onRatingChange(value);
      };
  return (
      <>

        {/* profle section  */}
        
<section className="py-5 mt-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col space-y-6">
        <h4 className="font-normal text-[20px] leading-[120%] capitalize text-black py-3">
          Your Selected Guide:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-2 rounded-md shadow-lg flex flex-col md:flex-row items-center md:items-start p-4">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img src={man} alt="Guide" className="" />
              <div className="md:ps-4 w-full">
                <div className="flex items-center py-3">
                  <button className="w-[130px] h-[26px] bg-[#7BBCB0] font-bold text-[11px] uppercase text-white tracking-wide rounded-2xl">
                    Kuakata
                  </button>
                  <span className="px-4 text-[#c7cdd0]">|</span>
                  {/* <CiStar totalStars={5} /> */}
                  <div className=''>
                                             
                                             <div className="flex space-x-1">
                                         {[...Array(totalStars)].map((_, index) => {
                                             const starValue = index + 1;
                                             return (
                                               <PiStarDuotone  
                                                 key={starValue}
                                                 className={`w-4 h-4  cursor-pointer transition-colors duration-200 ${
                                         starValue <= (hover || rating) ? "fill-yellow-400  stroke-yellow-400" : "fill-gray-300 stroke-gray-300"
                                       }`}
                                     onClick={() => handleClick(starValue)}
                                     onMouseEnter={() => setHover(starValue)}
                                     onMouseLeave={() => setHover(0)}
                                   />
                                    );
                                   })}
                                            </div>
                 </div>
                  
                  <span className="font-semibold text-[15px] text-[#778088] ps-2 w-[50%]">(584 reviews)</span>
                </div>
                <h4 className="font-bold text-[20px] leading-[110%] text-[#1c2b38]">Raihan Ahmad</h4>
                <div className="flex flex-wrap pt-3 gap-3">
                  <div className="flex items-center font-semibold text-[14px] text-[#495560]">
                    <MdOutlineWatchLater className="mr-1" />
                    <small>2 hours</small>
                  </div>
                  <div className="flex items-center font-semibold text-[14px] text-[#495560]">
                    <FaCarSide className="mr-1" />
                    <small>Transport</small>
                  </div>
                  <div className="flex items-center font-semibold text-[14px] text-[#495560]">
                    <FaUserGroup className="mr-1" />
                    <small>Family plans</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 md:pt-12 text-center md:text-right w-full">
              <h4 className="font-bold text-[20px] leading-[130%] text-[#7bbcb0]">Tk 250.00</h4>
              <span className="font-semibold text-[12px] text-[#778088]">per person</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-start lg:justify-center">
            <button className="w-[261px] h-[96px] bg-[#13253F] rounded-full shadow-md font-normal text-[26px] leading-[85%] text-white">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>


    {/* rating section  */}

    
    <div className='max-w-6xl mx-auto py-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4 className='font-black text-[48px] capitalize text-[#1c2b38]'>4.0</h4>
            <span className='font-normal text-[23px] capitalize text-[#778088]'>14 reviews</span>
          </div>

          <div className=''>
            <div className="flex space-x-1">
              {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <PiStarDuotone
                    key={starValue}
                    className={`w-10 h-10 cursor-pointer transition-colors duration-200 ${starValue <= (hover || rating) ? "fill-yellow-400 stroke-yellow-400" : "fill-gray-300 stroke-gray-300"}`}
                    onClick={() => handleClick(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className='bg-[#e6e6e6] rounded-2xl'>
          <p className='font-normal text-[16px] leading-[137%] text-[#000] font-sans p-2 mt-4'>
            Proficiency in: English, Bangla, and French. Guided: Nearly 20 individuals.
          </p>
        </div>
      </div>
    </div>




{/* customer review section  */}
<section className='mt-10 px-4 sm:px-6 lg:px-8'>
       <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3 items-center'>
               <div>
                <h4 className='font-bold text-[22px] capitalize text-[#1c2b38] font-serif text-center md:text-left'>Customer Review</h4>
               </div>

               <div className='hidden md:block'></div>

               <div className='flex justify-center md:justify-end'>
                 <img src={rang} alt="" className='w-full max-w-[250px] object-contain' />
               </div>
          </div>
       </div>
  </section>



  <section>      
      <div className='max-w-6xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-5'>         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">             
            <div className='flex flex-col md:flex-row'>                   
                <img src={img1} alt="" className='w-16 h-16 object-cover rounded-full' />                                           
                <div className='mt-4 md:mt-0 md:ml-4'>           
                    <div className=''>             
                        <div className="flex space-x-1">               
                            {[...Array(totalStars)].map((_, index) => {                 
                                const starValue = index + 1;                 
                                return (                   
                                    <PiStarDuotone                     
                                        key={starValue}                     
                                        className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${starValue <= (hover || rating) ? "fill-yellow-400 stroke-yellow-400" : "fill-gray-300 stroke-gray-300"}`}                     
                                        onClick={() => handleClick(starValue)}                     
                                        onMouseEnter={() => setHover(starValue)}                     
                                        onMouseLeave={() => setHover(0)}                   
                                    />                 
                                );               
                            })}             
                        </div>                          
                    </div>                                                        
                    <div className='flex items-center space-x-1'>                               
                        <h4 className='font-bold text-[15px] capitalize text-[#1c2b38] py-1'>Arlene McCoy</h4>                                
                        <span className='text-blue-500'><LuCheckCheck /></span>                            
                    </div>                              
                    <span className='font-normal text-[13px] capitalize text-[#778088]'>2 October 2012</span>                         
                </div>                   
            </div>             
            
            <div className='md:col-span-2'>                                 
                <div className='flex flex-col sm:flex-row sm:justify-between'>                     
                    <h4 className='font-bold text-[15px] leading-[120%] capitalize text-[#1c2b38]'>Good tour, really well organised</h4>                     
                    <span className='font-semibold text-[13px] capitalize text-[#778088]'>Helpful? <span className='text-blue-500'> Yes </span></span>                                     
                </div>                   
                <div className='pt-3'>                     
                    <p className='font-normal text-[14px] leading-[171%] capitalize text-[#000] text-justify'>
                        "Amazing Guide!" Our tour guide in Kuakata was fantastic! They showed us the best spots for sunrise and sunset, shared fascinating local stories, and made the trip smooth and enjoyable. Their friendly attitude and attention to detail truly made our visit unforgettable. Highly recommend!
                    </p>                  
                </div>             
            </div>              
        </div>   


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ">             
            <div className='flex flex-col md:flex-row'>                   
                <img src={img2} alt="" className='w-16 h-16 object-cover rounded-full' />                                           
                <div className='mt-4 md:mt-0 md:ml-4'>           
                    <div className=''>             
                        <div className="flex space-x-1">               
                            {[...Array(totalStars)].map((_, index) => {                 
                                const starValue = index + 1;                 
                                return (                   
                                    <PiStarDuotone                     
                                        key={starValue}                     
                                        className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${starValue <= (hover || rating) ? "fill-yellow-400 stroke-yellow-400" : "fill-gray-300 stroke-gray-300"}`}                     
                                        onClick={() => handleClick(starValue)}                     
                                        onMouseEnter={() => setHover(starValue)}                     
                                        onMouseLeave={() => setHover(0)}                   
                                    />                 
                                );               
                            })}             
                        </div>                          
                    </div>                                                        
                    <div className='flex items-center space-x-1'>                               
                        <h4 className='font-bold text-[15px] capitalize text-[#1c2b38] py-1'>Jenny Wilson</h4>                                
                        <span className='text-blue-500'><LuCheckCheck /></span>                            
                    </div>                              
                    <span className='font-normal text-[13px] capitalize text-[#778088]'>2 October 2012</span>                         
                </div>                   
            </div>             
            
            <div className='md:col-span-2'>                                 
                <div className='flex flex-col sm:flex-row sm:justify-between'>                     
                    <h4 className='font-bold text-[15px] leading-[120%] capitalize text-[#1c2b38]'>Informative but disappointed not seeing changing of the guards</h4>                     
                    <span className='font-semibold text-[13px] capitalize text-[#778088]'>Helpful? <span className='text-blue-500'> Yes </span></span>                                     
                </div>                   
                <div className='pt-3'>                     
                    <p className='font-normal text-[14px] leading-[171%] capitalize text-[#000] text-justify'>
                    "Fantastic Experience!" Our visit to Kuakata was unforgettable, thanks to our amazing guide. They were knowledgeable, friendly, and went above and beyond to ensure we enjoyed every moment. From exploring the beach to learning about local culture, everything was perfect. Highly recommended!
                    </p>                  
                </div>             
            </div>              
        </div>     
              

                 <div className='text-center mt-4'>
                      <a className=' font-bold text-[14px] leading-[129%] capitalize underline decoration-[none] text-center text-[#7bbcb0]' href="">View More Comments</a>
                 </div>
      </div>   
   </section>




          
      </>
  )
}
