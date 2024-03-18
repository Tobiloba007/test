import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { VscClose } from "react-icons/vsc";
import { GoCheckCircleFill } from "react-icons/go";
import package_item from '../../../assets/icons/package.svg'
import { motion } from 'framer-motion';
import { IoIosCheckmarkCircle } from "react-icons/io";




const CommodityModal = ({setOpenModal, data}) => {
    const slideInVariants = {
        hidden: { y: '100%' },
        visible: { y: 0 },
      };

      const [user, setUser] = useState('')



    const offTaker = [
        {
            name: 'Request type:',
            details: data.order_frequency,
        },
        {
            name: 'Requested by:',
            details: `${user.last_name} ${user.first_name}`
        },
        {
            name: 'Request date:',
            details: data.created_at.slice(0, 10),
        },
        {
            name: 'Request Time:',
            details: data.created_at.slice(12, 16),
        },
        {
            name: 'Request status:',
            details: <div className='flex items-center justify-center px-3 rounded-lg h-5 bg-[#FFFAEB]'>
                          <GoDotFill className='text-[9px] text-[#F79009] xl:text-[10px]' />
                          <p className='text-[9px] text-[#F79009] font-medium ml-1 xl:text-[10px]'>
                              {data.status}
                          </p>
                      </div>
        }
    ]

    const purchaseRequest = [
        {
            name: 'Commodity:',
            details: data.name
        },
        {
            name: 'Quantity Requested:',
            details: `${data.quantity} Metric tons`
        },
        {
            name: 'Ore type:',
            details: data.ore_type
        },
        {
            name: 'Frequency of Request:',
            details: data.order_frequency
        },
        {
            name: 'Delivery Address:',
            details: data.address
        },
    ]

    
    const timeline = [
        {
            id: 1,
            stage: 'Order Received',
            date: '20/04/23',
            status: 'completed',
        },
        {
            id: 2,
            stage: data.status,
            date: '20/04/23',
            status: 'pending',
        },
        {
            id: 3,
            stage: 'Order Confirmed and Verified',
            date: '20/04/23',
            status: 'inactive',
        },
        {
            id: 4,
            stage: 'Out for Delivery',
            date: '20/04/23',
            status: 'inactive',
        },
        {
            id: 5,
            stage: 'Delivered',
            date: '20/04/23',
            status: 'inactive',
        },
    ]


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      className='absolute top-28 bottom-0 mb-3 flex flex-col items-center justify-start bg-white w-[90%] rounded-2xl overflow-y-auto no-scrollbar py-7 pb-20 md:w-[90%]
                  md:top-32 md:pb-10 lg:w-[70%] lg:pb-16 xl:top-32 xl:pb-16'>
           {/* HEADER */}
         <div className='flex items-start justify-between w-full px-4 md:px-8 xl:px-10'>
             <div className='flex flex-col items-start justify-start md:flex-row md:items-center'>
                 <p className='text-xs text-[#101828] font-semibold lg:text-sm xl:text-base'>
                     {data.name}<span className='font-normal'> ({data.id})</span>
                 </p>
             </div>

             <div onClick={()=>setOpenModal(false)}
              className='flex items-start justify-end'>
                   <VscClose className='text-xl xl:text-2xl' />
             </div>
         </div>


         {/* LINE */}
         <div className='w-full border-[1px] border-[#eeeeee] mt-3'></div>
   


         <div className='flex flex-col items-start justify-center w-full px-4 md:px-8 md:flex-row xl:px-10'>

         {/* LEFT */}
         <div className='flex flex-col items-start justify-start w-full md:w-[50%]'>

         {/* DETAILS 1 */}
         <div className='flex flex-col items-start justify-start w-full mt-6 xl:mt-10'>
              <p className='text-[11px] text-[#D0D5DD] font-medium xl:text-sm'>
                    OFF-TAKER DETAILS
              </p>

              <div className='flex flex-col items-start justify-start w-full mt-2'>
                 {offTaker.map((item, index) => {
                    return(
                        <div key={index} className='flex items-start justify-start w-full mt-2 xl:mt-4'>
                           <p className='text-[10px] text-[#667085] font-medium w-[30%] xl:text-[13px] xl:w-[35%]'>
                                {item.name}
                           </p>
                           <p className='text-[10px] text-[#101828] font-medium ml-5 xl:text-[13px]'>
                                {item.details}
                           </p>
                        </div>
                    )
                 })}
              </div>

         </div>


         {/* DETAILS 2 */}
         <div className='flex flex-col items-start justify-start w-full mt-8 lg:mt-12 xl:mt-16'>
              <p className='text-[11px] text-[#D0D5DD] font-medium xl:text-sm'>
                   PURCHASE REQUEST DETAILS
              </p>

              <div className='flex flex-col items-start justify-start w-full mt-2'>
                 {purchaseRequest.map((item, index) => {
                    return(
                        <div key={index} className='flex items-start justify-start w-full mt-2 xl:mt-4'>
                           <p className='text-[10px] text-[#667085] font-medium w-[30%] xl:text-[13px] xl:w-[35%]'>
                                {item.name}
                           </p>
                           <p className='text-[10px] text-[#101828] font-medium ml-5 w-40 xl:text-[13px] xl:w-52'>
                                {item.details}
                           </p>
                        </div>
                    )
                 })}
              </div>

         </div>
         </div>



         {/* RIGHT */}
         <div className='flex flex-col items-start justify-start w-full h-full md:w-[50%] md:flex-row'>
              {/* LINE */}
             <div className='hidden md:flex h-full border-[0.5px] border-[#eeeeee] mr-10 lg:mr-7 xl:mr-14'></div>

             <div className='flex flex-col items-start justify-start w-full mt-10 md:mt-6 xl:mt-10'>
             <p className='text-[11px] text-[#D0D5DD] font-medium xl:text-sm'>
                 TIMELINE
             </p>

             <div className='flex items-center justify-start w-full'>
             <div className='flex flex-col flex-wrap items-center justify-start mt-2 md:mt-2 lg:mt-3'>
             {timeline.map((item) => {
                return(
                         <div key={item.id} 
                         className='flex flex-row items-start justify-start mr-2 lg:justify-start lg:mt-1'>
                             <div className='flex flex-col items-center justify-start lg:flex-col lg:items-center lg:justify-start lg:mt-0 xl:mt-2'>
                                  {item.status === 'completed' 
                                   ? <GoCheckCircleFill className='text-2xl my-2 text-[#159600] lg:text-[23px] xl:text-[27px]' />

                                   : item.status === 'pending'
                                   ? <div className='flex items-center justify-center w-8 h-8 my-2 border-[1px] border-[#F79009] rounded-[100px] py-2 lg:mb-0 lg:h-[33px] 
                                   lg:w-[33px] xl:h-9 xl:w-9 xl:ml-[-4px]'>
                                         <div className='flex items-center justify-center w-6 h-6 bg-[#F79009] rounded-full lg:h-[25px] lg:w-[25px] xl:h-7 xl:w-7'>
                                            <img className='h-4 w-4'
                                            src={package_item} alt='package' />
                                         </div>
                                      </div>

                                   : item.status === 'inactive'
                                   && <div className='flex items-center justify-center w-6 h-6 my-2 border-[1px] border-[#D0D5DD] rounded-[100px] xl:h-7 xl:w-7 xl:ml-[2px]'>
                                         <div className='flex items-center justify-center w-4 h-4 bg-[#D0D5DD] rounded-full xl:h-5 xl:w-5'></div>
                                      </div>
                                  }
                                  <div className={`border-[1px] h-10 ${item.status === 'completed' ? 'border-[#159600]' : 'border-[#D0D5DD]'} ${item.id === 5 && 'hidden'}
                                   lg:w-0 lg:ml-0 lg:mt-1 lg:h-12 lg:border-[1.5px] xl:mt-2`}></div>
                             </div>

                             <div className='flex items-start justify-between w-full mt-2'>
                                  <div className='flex flex-col items-start justify-start w-32 ml-5 lg:ml-5 xl:mt-3'>
                                      <p className={`text-[9px] font-medium w-[75px] ${item.status === 'completed' ? 'text-black' : item.status === 'pending' ? 
                                      'text-white bg-[#F79009] p-1 font-normal' : item.status === 'inactive' && 'text-[#D0D5DD]'} lg:w-28 xl:text-xs xl:w-full`}>
                                          {item.stage}
                                      </p>
                                      {item.status === 'inactive'
                                      ? ''
                                      :<p className='text-[8px] text-[#667085] font-normal pt-1 xl:text-[10px]'>
                                          {item.date} 
                                       </p>
                                     }
                                  </div>

                                  <div className='flex flex-1 justify-start w-full lg:ml-8 xl:ml-20'>
                                  <div className={`flex items-center justify-center w-[70px] h-7 rounded-md bg-[${item.status === 'completed' ? '#F2F2F2' : '#159600'}] 
                                                   border-[1px] shadow-xl border-[#D0D5DD] xl:w-[100px] xl:h-9`}>
                                         <p className={`text-[8px] xl:text-xs text-[${item.status === 'completed' ? '#101828' : '#FFFFFF'}] font-semibold`}>
                                            {item.status === 'completed' ? 'Invalidate' : 'Validate'}
                                         </p>
                                         {item.status !== 'completed' &&
                                         <IoIosCheckmarkCircle className='text-white ml-2 text-xs' />
                                         }
                                  </div>
                                  </div>

                             </div>
                         </div>
                  )
              })}
              </div>
              </div>


              </div>

         </div>
         </div>

    </motion.div>
  )
}

export default CommodityModal

