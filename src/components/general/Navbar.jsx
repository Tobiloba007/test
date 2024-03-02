import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    const navigate = useNavigate();



  return (
    <div className={`flex flex-col items-center justify-start w-full mx-auto max-w-screen-2xl lg:flex-row lg:items-center ${open && `bg-[${props.reg}] h-[100vh] fixed top-0 z-50`}`}>
    <div className={`flex flex-row items-center justify-between w-full px-6 lg:items-center lg:px-14 xl:px-20`}>
        <div className={`flex flex-row items-center justify-start ${open && 'mt-2'}`}>
               {/* OBA LOGO */}
                <img onClick={()=>navigate('/')} className='h-16 w-16 z-50 cursor-pointer md:h-[70px] md:w-[70px] xl:h-[80px] xl:w-[80px]'
                src={open ? props.logo2 : props.logo} alt="Oba Logo" />

               {/* WEB MIDDLE LINKS */}
            <div className='hidden lg:flex flex-row items-center justify-between ml-14 z-50 lg:ml-12 xl:ml-20'>
                    <div className='flex flex-col items-center justify-center'>
                         <Link to='/our-metals' className={`text-[12px] font-light text-[${props.text2}] px-5 my-1 xl:text-sm xl:px-7`}>
                              Our Metals
                         </Link>
                         <div className={`w-[85px] h-[1.6px] bg-[${props.metal}] rounded-xl`}></div>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                         <Link to='/locations' className={`text-[12px] font-light text-[${props.text2}] px-5 my-1  xl:text-sm xl:px-7`}>
                                Locations
                         </Link>
                         <div className={`w-[85px] h-[1.6px] bg-[${props.locations}] rounded-xl`}></div>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                         <Link to='/about' className={`text-[12px] font-light text-[${props.text2}] px-5 my-1 xl:text-sm xl:px-7`}>
                                About OAT
                         </Link>
                         <div className={`w-[85px] h-[1.6px] bg-[${props.about}] rounded-xl`}></div>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                         <Link to='/support' className={`text-[12px] font-light text-[${props.text2}] px-5 my-1 xl:text-sm xl:px-7`}>
                                Support
                         </Link>
                         <div className={`w-[85px] h-[1.6px] bg-[${props.support}] rounded-xl`}></div>
                    </div>    
            </div>
        </div>


        {/* HAMBURGER TO ONLY SHOW ON MOBILE AND TABS */}
        <div className={`flex items-center justify-center h-9 w-9 border-[1px] border-white bg-white rounded-md mt-1 z-50 lg:hidden ${open && 'bg-transparent border-none'}`}>
            {
                open
                ?<IoCloseOutline onClick={handleOpen} className='h-7 w-7' />
                :<RxHamburgerMenu onClick={handleOpen} className='h-6 w-6' />
            }
        </div>

         {/* WEB */}
        <div className='hidden lg:flex flex-row items-center justify-center z-50'>
            <Link to='/register' className={`h-9 w-24 flex items-center justify-center bg-[${props.regBackground}] text-[${props.reg}] rounded-[34px] text-[11px] font-normal xl:text-[12px] xl:h-10 xl:w-28`}>
                 Get Started
            </Link>

            <Link to='/login' className={`w-20 flex items-center justify-center rounded-[34px] text-[11px] font-normal text-[${props.text2}] xl:text-[12px] xl:w-24`}>
                 Sign in
            </Link>
        </div>

    </div>

    {/* MOBILE AND TABS LINKS */}
    { open && 
    <div className='flex flex-col items-center justify-start mt-10 z-[500]'>
         <div className='flex flex-col items-center justify-center my-6'>
                <Link to='/our-metals' className={`text-sm text-[${props.link}] pb-1`}>
                      Our Metals
                </Link>
                <div className={`w-[85px] h-[1.6px] bg-[${props.metal}] rounded-xl`}></div>
         </div>

         <div className='flex flex-col items-center justify-center my-6'>
                <Link to='/locations' className={`text-sm text-[${props.link}] pb-1`}>
                      Locations
                </Link>
                <div className={`w-[85px] h-[1.6px] bg-[${props.locations}] rounded-xl`}></div>
         </div>

         <div className={`flex flex-col items-center justify-center my-6`}>
                <Link to='/about' className={`text-sm text-[${props.link}] pb-1`}>
                      About OAT
                </Link>
                <div className={`w-[85px] h-[1.6px] bg-[${props.about}] rounded-xl`}></div>
         </div>

         <div className={`flex flex-col items-center justify-center my-6`}>
                <Link to='/support' className={`text-sm text-[${props.link}] pb-1`}>
                       Support
                </Link>
                <div className={`w-[85px] h-[1.6px] bg-[${props.support}] rounded-xl`}></div>
         </div>

         <div className={`flex flex-col items-center justify-center w-full mt-8`}>
             <Link to='/register' className={`h-12 w-48 flex items-center justify-center bg-[#2196F3] text-white rounded-[34px] text-[13px] font-medium md:w-72`}>
                  Get Started
             </Link>
             <Link to='/login' className={`h-12 w-48 flex items-center justify-center bg-white text-black rounded-[34px] text-[13px] font-medium mt-5 shadow-md md:w-96 md:mt-6`}>
                     Sign in
             </Link>
         </div>
     </div>
    }
    </div>
  )
}

export default Navbar