import React from 'react'
import payment from '../assets/image/payment 1.png'

import method from '../assets/image/all.png'

export const Payment = () => {
  return (
    
    <>

        <div className='max-w-6xl mx-auto mt-20'>
              <h4 className='font-bold text-[32px] text-[#000] font-sans'>Payment</h4>
        </div>
        <section className="pb-10 px-4 md:px-8 lg:px-16 bg-[#F9FAFD]">
  <div className="max-w-6xl mx-auto flex flex-col space-y-6">
    <div>
      <h4 className='font-normal text-[36px] text-[#000] font-mono py-4'>
        Choose Payment Method
      </h4>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <form action="">
          <div className="mb-6">
            <label className='font-bold text-[15px] leading-[120%] capitalize text-[#1c2b38]' htmlFor="name">
              Name:
            </label>
            <input
              className='rounded-md p-5 w-full h-[54px] bg-gray-200 outline-none'
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="mb-6">
            <label className='font-bold text-[15px] leading-[120%] capitalize text-[#1c2b38]' htmlFor="transaction-id">
              Transaction Id:
            </label>
            <input
              className='rounded-md p-5 w-full h-[54px] bg-gray-200 outline-none'
              type="password"
              name="transaction-id"
              id="transaction-id"
            />
          </div>

          <div className="mb-6">
            <label className='font-bold text-[15px] leading-[120%] capitalize text-[#1c2b38]' htmlFor="phone-number">
              Phone Number:
            </label>
            <input
              className='rounded-md p-5 w-full h-[54px] bg-gray-200 outline-none'
              type="number"
              name="phone-number"
              id="phone-number"
            />
          </div>

          <div className="mb-6">
            <label className='font-bold text-[15px] leading-[120%] capitalize text-[#1c2b38]' htmlFor="pin-code">
              Pin Code:
            </label>
            <input
              className='rounded-md p-5 w-full h-[54px] bg-gray-200 outline-none'
              type="password"
              name="pin-code"
              id="pin-code"
            />
          </div>
        </form>

         
        <div>
  <h4 className='font-bold text-[15px] leading-[120%] capitalize text-[#000]'>
    Select Method :
  </h4>
  <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 mt-3 gap-4'>
    <div className='flex justify-center'>
      <div className='w-[100px] h-[35px] rounded-3xl bg-[#37B1E2]  transition-all duration-300 ease-in-out transform hover:bg-[#2e7e9e] hover:scale-105 hover:cursor-pointer'>
        <div className='flex justify-center gap-2 pt-2'>
          <div className='w-[13px] h-[13px] rounded-full bg-white mt-[2px]'></div>
          <span className='font-bold text-[12px] sm:text-[13px] leading-[138%] capitalize text-[#fff]'>
            Bkash
          </span>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
      <div className='w-[100px] h-[35px] rounded-3xl bg-[#37B1E2]  transition-all duration-300 ease-in-out transform hover:bg-[#2e7e9e] hover:scale-105 hover:cursor-pointer'>
        <div className='flex justify-center gap-2 pt-2'>
          <div className='w-[13px] h-[13px] rounded-full bg-white mt-[2px]'></div>
          <span className='font-bold text-[12px] sm:text-[13px] leading-[138%] capitalize text-[#fff]'>
            Nagad
          </span>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
      <div className='w-[100px] h-[35px] rounded-3xl bg-[#37B1E2]  transition-all duration-300 ease-in-out transform hover:bg-[#2e7e9e] hover:scale-105 hover:cursor-pointer'>
        <div className='flex justify-center gap-2 pt-2'>
          <div className='w-[13px] h-[13px] rounded-full bg-white mt-[2px]'></div>
          <span className='font-bold text-[12px] sm:text-[13px] leading-[138%] capitalize text-[#fff]'>
            UPAY
          </span>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
      <div className='w-[100px] h-[35px] rounded-3xl bg-[#37B1E2]  transition-all duration-300 ease-in-out transform hover:bg-[#2e7e9e] hover:scale-105 hover:cursor-pointer'>
        <div className='flex justify-center gap-2 pt-2'>
          <div className='w-[13px] h-[13px] rounded-full bg-white mt-[2px]'></div>
          <span className='font-bold text-[12px] sm:text-[13px] leading-[138%] capitalize text-[#fff]'>
            VISA
          </span>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
      <div className='w-[100px] h-[35px] rounded-3xl bg-[#37B1E2]  transition-all duration-300 ease-in-out transform hover:bg-[#2e7e9e] hover:scale-105 hover:cursor-pointer'>
        <div className='flex justify-center gap-2 pt-2'>
          <div className='w-[13px] h-[13px] rounded-full bg-white mt-[2px]'></div>
          <span className='font-bold text-[10px] sm:text-[11px] leading-[138%] capitalize text-[#fff]'>
            Master Card
          </span>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
      <div className='w-[100px] h-[35px] rounded-3xl bg-[#37B1E2]  transition-all duration-300 ease-in-out transform hover:bg-[#2e7e9e] hover:scale-105 hover:cursor-pointer'>
        <div className='flex justify-center gap-2 pt-2'>
          <div className='w-[13px] h-[13px] rounded-full bg-white mt-[2px]'></div>
          <span className='font-bold text-[12px] sm:text-[13px] leading-[138%] capitalize text-[#fff]'>
            Others
          </span>
        </div>
      </div>
    </div>
  </div>
</div>



      </div>

      <div className="flex justify-center md:justify-start lg:justify-center">
        <div>
          <img src={payment} alt="Payment method" />
        </div>
      </div>
    </div>


                {/* button  */}

                  <div className='text-center my-3'>
                       <button className='w-[240px] h-[59px] rounded-full bg-[#13253f] font-bold text-[15px] leading-[120%] capitalize text-[#fff]  transition-all duration-300 ease-in-out transform hover:bg-[#0c182a] hover:scale-105'>Confirm Payment</button>
                  </div>



                  {/* method  */}


                  <div className='flex justify-center py-5'>
                     <img src={method} alt="" />
                  </div>
  </div>
</section>

    </>
  )
}
