import React from 'react'
import { TfiClose } from "react-icons/tfi";
import { IoIosSend } from "react-icons/io";



const SellerChatModal = ({setOpenChat}) => {
  return (
    <div className='fixed flex flex-col items-start justify-start bg-white rounded-lg w-[90%] h-[450px] mt-32 py-5 md:w-[50%] lg:w-[35%] xl:w-[27%] xl:mt-44'>
            {/* HEADER */}
           <div className='flex items-center justify-between w-full px-4'>
              <p className='text-sm text-black font-medium'>
                   Cobalt (52 metric tons)
              </p>
              <TfiClose onClick={()=>setOpenChat(false)} className='text-sm' />
           </div>
           <div className='w-full border-[#dddddd] border-[0.4px] opacity-40 mt-2 mb-1'></div>

           <div className='flex flex-col items-center justify-start w-full overflow-y-auto no-scrollbar px-4 pb-12'>
               {/* ADMIN */}
               <div className='flex flex-col items-start justify-start w-full'>
                   <div className='flex flex-col items-center justify-start max-w-[60%] bg-[#60b7ff] rounded-[15px] text-black px-4 py-3 mb-1'>
                        <p className='text-[10px] text-start font-normal text-black'>
                              Lorem ipsum dolor
                        </p>
                    </div>
                   <div className='flex flex-col items-center justify-start max-w-[60%] bg-[#60b7ff] rounded-[15px] text-black px-4 py-3 mb-1'>
                        <p className='text-[10px] text-start font-normal text-black'>
                              Lorem ipsum dolor sit amet dolor
                        </p>
                    </div>
                    <p className='text-[8px] text-start font-normal text-black ml-1'>
                          10:23
                    </p>
               </div>

               {/* SELLER */}
               <div className='flex flex-col items-end justify-start w-full'>
                   <div className='flex flex-col items-center justify-start max-w-[60%] bg-[#DDDDDD] rounded-[15px] text-black px-4 py-3 mb-1'>
                        <p className='text-[10px] text-end font-normal text-black'>
                              Lorem ipsum dolor
                        </p>
                    </div>
                   <div className='flex flex-col items-center justify-start max-w-[60%] bg-[#DDDDDD] rounded-[15px] text-black px-4 py-3 mb-1'>
                        <p className='text-[10px] text-end font-normal text-black'>
                              Lorem ipsum dolor sit amet dolor
                        </p>
                    </div>
                    <p className='text-[8px] text-start font-normal text-black mr-1'>
                          10:28
                    </p>
               </div>

               {/* ADMIN */}
               <div className='flex flex-col items-start justify-start w-full'>
                   <div className='flex flex-col items-center justify-start max-w-[60%] bg-[#60b7ff] rounded-[15px] text-black px-4 py-3 mb-1'>
                        <p className='text-[10px] text-start font-normal text-black'>
                             Neque porro quisquam est
                        </p>
                    </div>
                    <p className='text-[8px] text-start font-normal text-black ml-1'>
                          10:32
                    </p>
               </div>

               {/* SELLER */}
               <div className='flex flex-col items-end justify-start w-full'>
                   <div className='flex flex-col items-center justify-start max-w-[60%] bg-[#DDDDDD] rounded-[15px] text-black px-4 py-3 mb-1'>
                        <p className='text-[10px] text-end font-normal text-black'>
                             unde omnis
                        </p>
                    </div>
                    <p className='text-[8px] text-start font-normal text-black mr-1'>
                          10:46
                    </p>
               </div>
               {/* SELLER */}
               <div className='flex flex-col items-end justify-start w-full'>
                   <div className='flex flex-col items-center justify-start max-w-[60%] bg-[#DDDDDD] rounded-[15px] text-black px-4 py-3 mb-1'>
                        <p className='text-[10px] text-end font-normal text-black'>
                             unde omnis
                        </p>
                    </div>
                    <p className='text-[8px] text-start font-normal text-black mr-1'>
                          10:46
                    </p>
               </div>

           </div>


           <div className='absolute bottom-3 flex items-center w-full px-4 bg-white pt-1'>
                <input className='flex-1 h-10 rounded-2xl border-[#dddddd] border-[1px] pl-4 text-black font-normal outline-[#2196F3] text-[10px]' 
                placeholder='Type a Message'
                />
                <div className='flex items-center justify-center bg-[#2196F3] rounded-full h-9 w-9 p-2 ml-2'>
                     <IoIosSend className='text-[#ffffff] text-3xl' />
                </div>
           </div>

    </div>
  )
}

export default SellerChatModal
