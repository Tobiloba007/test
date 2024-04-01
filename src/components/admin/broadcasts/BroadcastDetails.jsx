import React, { useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import ActiveDetailTable from './ActiveDetailTable';
import { IoChatbubblesSharp } from "react-icons/io5";
import AdminChatModal from './AdminChatModal';




const BroadcastDetails = ({setBroadcastDetails, broadcastDetails}) => {
    const [openChat, setOpenChat] = useState(false);


    const data = broadcastDetails

    const details = [
        {
            id: 1,
            key: 'Request type:',
            value:  data.broadcast.order_frequency,
        },
        {
            id: 2,
            key: 'Commodity:',
            value: data.broadcast.product_name,
        },
        {
            id: 3,
            key: 'Ore Type:',
            value: data.broadcast.ore_type,
        },
        {
            id: 4,
            key: 'Minimum Purity:',
            value: data.broadcast.purity,
        },
        {
            id: 5,
            key: 'Metric tons:',
            value: data.broadcast.quantity,
        },
        {
            id: 6,
            key: 'Date Requested:',
            value: data.broadcast.created_at.slice(0, 10),
        },
        {
            id: 7,
            key: 'Time Requested:',
            value: data.broadcast.created_at.slice(12, 16),
        },
    ]



  return (
    <div className='flex flex-col items-center w-full'>
    <div className='flex flex-col items-start justify-start w-full py-6 px-6 mt-24 lg:mt-0 lg:pt-[110px] xl:px-14 xl:pt-[85px] xl:mt-10'>
          <div className='flex flex-row items-center justify-start w-full'>
              <p className='text-[11px] text-[#667085] cursor-pointer xl:text-xs xl:font-medium'>
                  <span onClick={()=>setBroadcastDetails(false)}>Broadcast /</span><span className='text-[#2196F3]'> View Details</span>
              </p>
          </div>

          <div className='flex flex-col items-start w-full mt-6 md:flex-row md:justify-between lg:mt-8'>
               <div className='flex flex-col items-start w-full'>
                   <div className='flex flex-col items-start justify-start w-full'>
                       <p className='text-lg text-[#101828] font-medium xl:text-2xl'>
                               {data.broadcast.quantity} metric tons of igneous {data.broadcast.product_name} with a minimum purity level of {data.broadcast.purity}
                       </p>
                       {/*<p className='text-xs text-[#667085] mt-1 xl:text-[15px]'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit... 
                        </p>*/}
                   </div>

                   <div className='flex flex-col items-start justify-start w-full mt-10'>
                        <p className='text-[10px] text-[#667085] mb-3 font-medium lg:mb-2 xl:text-sm'>
                               REQUEST DETAILS
                        </p>
                        {details.map((item) => {
                            return(
                                <div key={item.id} className='flex items-start justify-start w-full mt-2'>
                                   <p className='text-[11px] text-[#667085] w-24 xl:text-sm xl:w-28'>
                                         {item.key}
                                   </p>
                                   <p className='text-[11px] text-[#101828] ml-7 font-medium xl:text-sm'>
                                          {item.value} 
                                   </p>
                                </div>
                            )
                        })}
                   </div>
               </div>

               <div className='flex flex-col items-start justify-start w-full md:items-end'>
               <div className='flex flex-row items-center justify-start mt-8 md:mt-0'>
                     <div className='flex items-center justify-center px-4 h-8 bg-[#3E4451] rounded-md xl:h-9 xl:px-5'>
                          <FiEdit className='text-white text-sm xl:text-base' />
                          <p className='text-xs text-[#FFFFFF] ml-2 font-normal xl:text-sm xl:ml-3 xl:font-medium'>
                               Edit Broadcast Details
                          </p>
                     </div>

                     <div className='flex items-center justify-center px-4 h-8 bg-[#DF4848] rounded-md ml-4 xl:h-9 xl:px-5'>
                          <RiDeleteBin6Fill className='text-white text-sm xl:text-base' />
                          <p className='text-xs text-[#FFFFFF] ml-2 font-normal xl:text-sm xl:ml-3 xl:font-medium'>
                               Delete Request
                          </p>
                     </div>
               </div>

               </div>
          </div>

          <div className='flex items-center justify-between w-full mt-3'>
              <p className='text-[11px] text-[#667085] font-medium mt-10 xl:text-sm xl:mt-14'>
                       OFFERS RECIEVED
              </p>
              <div onClick={()=>setOpenChat(true)}
                    className='flex items-center justify-start mt-8 cursor-pointer'>
                   <IoChatbubblesSharp className='text-3xl text-[#2196F3]' />
                   <p className='text-[10px] text-[#667085] font-medium ml-2 xl:text-xs'>
                      MESSAGE SELLER
                   </p>
               </div>
          </div>


          <ActiveDetailTable tableData={data} />

    </div>


    {openChat && <div onClick={()=>setOpenChat(false)} className='fixed w-full h-full bg-[#000000] opacity-30'></div>}

    {openChat && <AdminChatModal setOpenChat={setOpenChat} />}
    </div>
  )
}

export default BroadcastDetails
