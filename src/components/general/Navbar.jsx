import React, { useState } from 'react'
import logo1 from '../../assets/images/obaLogo.svg'
import logo2 from '../../assets/images/obaLogo2.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

  return (
    <div className={`flex flex-col items-center justify-start w-full lg:flex-row lg:items-center ${open && 'bg-white h-[100vh] fixed z-50'}`}>
    <div className={`flex flex-row items-start justify-between w-full px-6 pt-3 lg:items-center lg:px-14 xl:px-20`}>
        <div className='flex flex-row items-center justify-start'>
               {/* OBA LOGO */}
            <img className='h-16 w-16 z-50 md:h-[70px] md:w-[70px] xl:h-[80px] xl:w-[80px]'
            src={open ? logo2 : logo1} alt="Oba Logo" />

               {/* WEB MIDDLE LINKS */}
            <div className='hidden lg:flex flex-row items-center justify-between ml-14 z-50 lg:ml-12 xl:ml-20'>
                <p className='text-[12px] font-light text-white px-5 xl:text-sm xl:px-7'>
                    Explore
                </p>
                <p className='text-[12px] font-light text-white px-5 xl:text-sm xl:px-7'>
                    FAQs
                </p>
                <p className='text-[12px] font-light text-white px-5 xl:text-sm xl:px-7'>
                    Reviews
                </p>
                <p className='text-[12px] font-light text-white px-5 xl:text-sm xl:px-7'>
                    About
                </p>
                <p className='text-[12px] font-light text-white px-5 xl:text-sm xl:px-7'>
                    Admin Login
                </p>
            </div>
        </div>


        {/* HAMBURGER TO ONLY SHOW ON MOBILE AND TABS */}
        <div className={`flex items-center justify-center h-9 w-9 border-[1px] border-white bg-white rounded-md mt-5 z-50 lg:hidden ${open && 'bg-transparent border-none'}`}>
            {
                open
                ?<IoCloseOutline onClick={handleOpen} className='h-7 w-7' />
                :<RxHamburgerMenu onClick={handleOpen} className='h-6 w-6' />
            }
        </div>

         {/* WEB */}
        <div className='hidden lg:flex flex-row items-center justify-center z-50'>
            <button className='h-9 w-24 text-center bg-white rounded-[34px] text-[11px] font-normal xl:text-[12px] xl:h-10 xl:w-28'>
                 Get Started
            </button>

            <button className='w-20 text-center rounded-[34px] text-[11px] font-normal text-white xl:text-[12px] xl:w-24'>
                 Sign in
            </button>
        </div>

        {
           open === false &&
           <div className={`h-40 lg:flex absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b from-black to-transparent lg:h-40`}></div>
        }

    </div>

    {/* MOBILE AND TABS LINKS */}
    { open && 
    <div className='flex flex-col items-center justify-start mt-10 z-[500]'>
         <p className='text-sm text-black my-6'>
             Explore
         </p>
         <p className='text-sm text-black my-6'>
             FAQs
         </p>
         <p className='text-sm text-black my-6'>
             Reviews
         </p>
         <p className='text-sm text-black my-6'>
             About
         </p>
         <p className='text-sm text-black my-6'>
             Admin Login
         </p>

         <div className='flex flex-col items-center justify-center w-full mt-8'>
             <button className='h-12 w-48 text-center bg-black text-white rounded-[34px] text-[13px] font-medium md:w-72'>
                  Get Started
             </button>
             <button className='h-12 w-48 text-center bg-white text-black rounded-[34px] text-[13px] font-medium mt-5 shadow-md md:w-96 md:mt-6'>
                     Sign in
             </button>
         </div>
     </div>
    }
    </div>
  )
}

export default Navbar