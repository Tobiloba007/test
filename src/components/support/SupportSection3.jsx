import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMailUnread } from "react-icons/io";
import { TiLocation } from "react-icons/ti";



const SupportSection3 = () => {
  return (
    <div className='flex items-center justify-center w-full px-5 py-16 md:px-10 lg:px-14 xl:px-20'>
         <div className='flex flex-col items-start justify-center w-full px-6 py-12 bg-white rounded-lg shadow-xl border-[0.2px] 
         border-[#eeeeee] lg:px-8 xl:w-[80%] xl:px-12'>
              <p className='text-base font-semibold text-[#323F4B] lg:text-lg xl:text-xl'>
                    CONTACT INFO
              </p>

              <div className='flex flex-col items-start justify-start w-full md:flex-row md:items-center md:justify-start md:w-full'>
              <div className='flex flex-row items-start justify-center w-full mt-10 md:mt-12 md:items-center'>
                   <div className='flex flex-row items-start justify-start w-full md:items-center'>
                        <BiSolidPhoneCall className='text-3xl text-[#2196F3] lg:text-[35px]' />
                        <div className='flex flex-col items-start w-full ml-7 md:ml-4 xl:ml-7'>
                            <p className='text-xs font-medium text-[#323F4B] mb-2 xl:text-sm'>
                                 +234-813-9994-536
                            </p>
                            <p className='text-xs font-medium text-[#323F4B] mb-2 xl:text-sm'>
                                 +234-806-9646-641
                            </p>
                            <p className='text-xs font-medium text-[#323F4B] mb-2 xl:text-sm'>
                                 +234 813-9994536
                            </p>
                        </div>
                   </div>
              </div>

              <div className='flex flex-row items-start justify-center w-full mt-12 md:items-center'>
                   <div className='hidden md:flex border-[0.1px] border-[#dddddd] h-[9rem] max-lg:ml-5'></div>
                   <div className='flex flex-row items-start justify-start w-full md:items-center'>
                       <IoMdMailUnread className='text-3xl text-[#2196F3] md:ml-5 lg:text-[35px]' />
                       <div className='flex flex-col items-start w-full ml-7 md:ml-4 xl:ml-7'>
                           <p className='text-xs font-medium text-[#323F4B] mb-2 xl:text-sm'>
                                  sales@obaofalltrades.com
                           </p>
                           <p className='text-xs font-medium text-[#323F4B] mb-2 xl:text-sm'>
                                  hr@obaofalltrades.com
                           </p>
                       </div>
                   </div>
              </div>

              <div className='flex flex-row items-start justify-center w-full mt-12 pr-10 md:pr-0 md:items-center'>
                   <div className='hidden md:flex border-[0.1px] border-[#dddddd] h-[9rem] md:ml-8'></div>
                   <div className='flex flex-row items-start justify-start w-full md:items-center'>
                         <TiLocation className='text-3xl text-[#2196F3] md:ml-5 lg:text-[35px]' />
                         <div className='flex flex-col items-start w-full ml-7 md:ml-4 xl:ml-7'>
                             <p className='text-xs font-medium text-[#323F4B] mb-2 xl:text-sm'>
                                    Lagos: 16 Babatunde Jose Street, Victoria Island
                             </p>
                             <p className='text-xs font-medium text-[#323F4B] mb-2 xl:text-sm'>
                                    Abuja: Suit 36&37 Yasuha Plaza, Wuse 2, Abuja
                             </p>
                             <p className='text-xs font-medium text-[#323F4B] mb-2 xl:text-sm'>
                                    Kwara: 13A Offa Road, GRA, Ilorin
                             </p>
                         </div>
                   </div>
              </div>

              </div>

         </div>
    </div>
  )
}

export default SupportSection3
