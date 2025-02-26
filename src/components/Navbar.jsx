import React, {useState} from "react";
import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import logo from '../assets/image/tour buddy.png'
import { useNavigate } from "react-router";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate() 

    const handlePayment =()=>{
         navigate('/payment')
    }

  const handleHome = ()=>{
    navigate('/')
  }
  return (
    <>
         <div className="max-w-6xl mx-auto mt-5">
         <nav className="flex items-center justify-between w-full relative">

              {/* logo */}
              <img src={logo} alt="logo" className=""/>

               {/* nav menus */}
             <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden ">
                 <li onClick={handleHome} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500              cursor-pointer hover:text-[#3B9DF8] capitalize  font-semibold text-[15px] leading-[147%] text-[#495560]              tracking-wide">home</li>
                 <li onClick={handlePayment} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500              cursor-pointer hover:text-[#3B9DF8] capitalize  font-semibold text-[15px] leading-[147%] text-[#495560]              tracking-wide">Payment
                 </li>
                 <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500              cursor-pointer hover:text-[#3B9DF8] capitalize  font-semibold text-[15px] leading-[147%] text-[#495560]              tracking-wide">Our Most Rated Guides</li>
                 <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500              cursor-pointer hover:text-[#3B9DF8] capitalize  font-semibold text-[15px] leading-[147%] text-[#495560]              tracking-wide">Our Packages</li>
                 <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500              cursor-pointer hover:text-[#3B9DF8] capitalize  font-semibold text-[15px] leading-[147%] text-[#495560]              tracking-wide">Most Desired Places</li>
    
             </ul>

            {/* search bar and community links */}
          <div className="flex items-center gap-[10px]">

            <button className="w-[140px] h-[50px] bg-[#FFDA32] rounded-md shadow-md font-extrabold text-[16px] leading-[137%] text-center text-[#1c2b38] tracking-wide">Sign In</button>
               <CiMenuFries
                 className="text-[1.6rem] text-[#424242] cursor-pointer md:hidden flex"
                onClick={() => setIsMenuOpen(!isMenuOpen)}/>
          </div>

{/* mobile sidebar */}
{/* <aside
    className={` ${isMenuOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden bg-[#3B9DF8] p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>

    <div className="w-full relative mb-5">
        <input
            className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-[#3B9DF8]"
            placeholder="Search..."/>
        <IoIosSearch
            className="absolute top-[9px] left-5 text-[#424242] text-[1.3rem]"/>
    </div>

    <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
        <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
        <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">about
            us
        </li>
        <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">services</li>
    </ul>

</aside> */}

        </nav>
         </div>

        <div className="mt-5">
             <hr />
        </div>
    </>
  )
}
