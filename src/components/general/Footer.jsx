import React from 'react'
import logo from '../../assets/images/obaLogo.svg'
import { FaLinkedin, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiCopyrightLight } from "react-icons/pi";

import mgLogo from '../../assets/images/mgLogo.svg'




const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full px-5 pt-10 pb-6 bg-[#0F1828] md:pt-8 md:px-10 lg:px-24'>
         {/* FOOTER TOP */}
          <div className='flex flex-col items-start justify-start w-full lg:flex-row lg:justify-between lg:items-start'>
               {/* LOGO AND DESCRIOPTION */}
               <div className='flex flex-col items-start justify-start w-[50%] lg:w-[70%]'>
                    <img className='w-20 h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32'
                    src={logo} alt="logo" />
                    <p className='text-[9px] text-[#D0D5DC] font-light lg:w-[60%] lg:text-[10px] xl:text-[12px] xl:mt-3 xl:w-[50%]'>
                       Join OAT's platform for Effortless Resource Showcase and Sales, Redefining the Future of Global Trade.
                    </p>
               </div>

               <div className='flex flex-col items-start justify-start w-full md:flex-row md:justify-between md:items-start lg:mt-0'>
               {/* QUICK LINKS */}
               <div className='flex flex-col items-start justify-start w-full mt-8'>
                     <p className='text-[13px] font-medium text-[#667085] xl:text-[15px] xl:font-semibold'>
                        Quick Links
                     </p>
                     <p className='text-[12px] font-normal text-[#FFFFFF] mt-5 xl:text-[14px] xl:mt-6'>
                        FAQ's
                     </p>
                     <p className='text-[12px] font-normal text-[#FFFFFF] mt-5 xl:text-[14px] xl:mt-6'>
                        Explore
                     </p>
               </div>


               {/* CONTACT US */}
               <div className='flex flex-col items-start justify-start w-full mt-8 lg:mr-10 xl:mr-14'>
                     <p className='text-[13px] font-medium text-[#667085] xl:text-[15px] xl:font-semibold'>
                        Contact us
                     </p>
                     <p className='text-[12px] font-normal text-[#FFFFFF] mt-5 xl:text-[14px] xl:mt-6'>
                        www.obaofalltrades.com
                     </p>
                     <p className='text-[12px] font-normal text-[#FFFFFF] mt-5 xl:text-[14px] xl:mt-6'>
                        +234 123 456 7890
                     </p>
                     <p className='text-[12px] font-normal text-[#FFFFFF] mt-5 xl:text-[14px] xl:mt-6'>
                        +234 123 456 7890
                     </p>
               </div>

              
               {/* FOLLOW US */}
               <div className='flex flex-col items-start justify-start w-full mt-8'>
                    <p className='text-[13px] font-medium text-[#667085] xl:text-[15px] xl:font-semibold'>
                       Follow us
                    </p>
                     <div className='flex flex-row items-center justify-start mt-5 xl:mt-6'>
                         <FaLinkedin className='text-white xl:text-xl' />
                         <p className='text-[12px] font-normal text-[#FFFFFF] ml-2 xl:text-[14px]'>
                            LinkedIn
                         </p>
                     </div>
                     <div className='flex flex-row items-center justify-start mt-5 xl:mt-6'>
                         <FaTwitter className='text-white xl:text-xl' />
                         <p className='text-[12px] font-normal text-[#FFFFFF] ml-2 xl:text-[14px]'>
                            Twitter
                         </p>
                     </div>
                     <div className='flex flex-row items-center justify-start mt-5 xl:mt-6'>
                         <AiFillInstagram className='text-white xl:text-xl' />
                         <p className='text-[12px] font-normal text-[#FFFFFF] ml-2 xl:text-[14px]'>
                            Instagram
                         </p>
                     </div>
                     <div className='flex flex-row items-center justify-start mt-5 xl:mt-6'>
                         <FaFacebookSquare className='text-white xl:text-xl' />
                         <p className='text-[12px] font-normal text-[#FFFFFF] ml-2 xl:text-[14px]'>
                            Facebook
                         </p>
                     </div>

               </div>


               {/* POWERED BY */}
               <div className='flex flex-col items-start justify-start w-full mt-8 lg:items-center'>
                    <p className='text-[13px] font-medium text-[#667085] xl:text-[15px] xl:font-semibold'>
                       Powered by
                    </p>
                    <img className='h-24 w-24 xl:h-36 xl:w-36'
                    src={mgLogo} alt="Morgen Green Logo" />
               </div>

               </div>

          </div>



          {/* FOOTER BOTTOM */}
          <div className='flex flex-col items-center justify-start w-full mt-5 md:mt-10 lg:mt-14'>
                 <div className='w-full h-[0.4px] bg-[#D0D5DC]'></div>

                 <div className='flex flex-col items-start justify-start w-full mt-3 md:flex-row-reverse md:mt-5 md:mb-3'>
                      <div className='flex flex-row items-center justify-between w-full md:w-[55%]'>
                           <p className='text-[9px] font-light text-[#2196F3] underline underline-offset-1 xl:text-[12px] xl:underline-offset-2'>
                               Privacy Policy
                           </p>
                           <p className='text-[9px] font-light text-[#2196F3] underline underline-offset-1 xl:text-[12px] xl:underline-offset-2'>
                               Terms of Service
                           </p>
                           <p className='text-[9px] font-light text-[#2196F3] underline underline-offset-1 xl:text-[12px] xl:underline-offset-2'>
                               Cookies Settings
                           </p>
                      </div>

                      <div className='flex flex-row items-center justify-center w-full mt-8 md:mt-0 md:justify-start'>
                         <PiCopyrightLight className='text-[#D0D5DC] mr-1' />
                         <p className='text-[10px] font-light text-[#D0D5DC] xl:text-[12px]'>
                           2023 Oba Of All Trades. All rights reserved.
                         </p>
                      </div>
                 </div>

          </div>

    </div>
  )
}

export default Footer