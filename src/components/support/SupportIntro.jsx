import React from 'react'
import Navbar from '../general/Navbar'
import logo from '../../assets/images/obaLogo2.svg'
import flag from '../../assets/icons/nigeria.svg'
import image from '../../assets/images/support-image.svg'
import { SlArrowDown } from "react-icons/sl";


const SupportIntro = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full font-poppins'>
           <div className={`flex flex-row items-center justify-center absolute top-0 w-full bg-white h-20 shadow-md lg:h-24`}>
                <Navbar logo={logo} text2={'#101828'} support={'#2196F3'} />
           </div>

           <div className='flex flex-col items-start justify-start w-full mt-36 lg:flex-row-reverse lg:mt-24 lg:px-0 lg:items-center'>
                 <div className='flex flex-col items-start justify-start w-full mb-8 px-5 md:px-10 lg:mb-0 lg:w-[50%] lg:px-14 lg:items-center xl:px-24'>
                        <p className='text-sm font-semibold text-[#101828] lg:text-base lg:mb-3 xl:text-lg xl:mb-6 xl:font-bold'>
                             TALK TO US ABOUT YOUR ENQUIRES
                        </p>

                        <form className='bg-white shadow-lg border-[0.2px] border-[#eeeeee] rounded-md py-5 px-3 w-full mt-5 md:w-[75%] lg:w-full lg:mt-0 
                        lg:px-4 xl:px-6 xl:py-6'>
                           <div className='flex flex-col items-start justify-center h-12 w-full border-[1.5px] border-[#667085 rounded-md pl-4 mb-3 
                            lg:border-[1.8px] xl:h-14 xl:rounded-lg xl:mb-5'>
                               <p className='text-[10px] font-semibold text-[#101828] mb-1 xl:text-[12px]'>
                                    Name
                               </p>
                               <input className='text-[10px] outline-none xl:text-[12px]' 
                                placeholder='John Dorime'
                               />
                           </div>

                           <div className='flex flex-col items-start justify-center h-12 w-full border-[1.5px] border-[#667085 rounded-md pl-4 my-3 
                            lg:border-[1.8px] xl:h-14 xl:rounded-lg xl:my-5'>
                               <p className='text-[10px] font-semibold text-[#101828] mb-1 xl:text-[12px]'>
                                    Email
                               </p>
                               <input className='text-[10px] outline-none xl:text-[12px]' 
                                placeholder='example@example.com'
                               />
                           </div>

                           <div className='flex flex-row items-center justify-start h-12 w-full border-[1.5px] border-[#667085 rounded-md pl-4 my-3 
                            lg:border-[1.8px] xl:h-14 xl:rounded-lg xl:my-5'>
                               <div className='flex flex-row items-center justify-start h-full'>
                                   <img className='h-6 w-6 xl:w-8 xl:h-8'
                                   src={flag} alt='flag' />
                                   <p className='text-[10px] font-semibold text-[#101828] px-2 xl:text-[12px]'>
                                        +234
                                   </p>
                                   <SlArrowDown className='text-[9px] text-[#101828] xl:text-[11px]' />
                               </div>
                               <div className='flex flex-col items-start justify-center h-full ml-4'>
                                    <p className='text-[10px] font-semibold text-[#101828] mb-1 xl:text-[12px]'>
                                         Phone Number (optional)
                                    </p>
                                    <input className='text-[10px] outline-none xl:text-[12px]' 
                                     placeholder='8023456789'
                                    />
                               </div>
                           </div>

                           <div className='flex flex-col items-start justify-start h-36 w-full border-[1.5px] border-[#667085 rounded-md px-4 pt-2 my-3 
                            lg:border-[1.8px] xl:h-40 xl:rounded-lg xl:my-5'>
                               <p className='text-[10px] font-semibold text-[#101828] mb-1 xl:text-[12px]'>
                                    Message
                               </p>
                               <textarea className='text-[10px] outline-none w-full xl:text-[12px]' 
                                placeholder='Type Message'
                                rows={8}
                               />
                           </div>

                           <button className='text-center h-10 w-full rounded-[25px] text-[10px] bg-[#2196F3] mt-3 text-white xl:text-[12px] xl:h-12'>
                                  Submit
                           </button>

                        </form>
                 </div>

                 <div className='flex items-center justify-center w-full mt-10 lg:my-0 lg:w-[50%]'>
                       <img className='w-full h-full'
                       src={image} alt='phone' />
                 </div>
           </div>
     </div>
  )
}

export default SupportIntro
