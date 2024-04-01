import React, { useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { VscClose } from "react-icons/vsc";
import { motion } from 'framer-motion';




const OrderModal = ({setOpenModal, modalData}) => {
    const slideInVariants = {
        hidden: { y: '100%' },
        visible: { y: 0 },
      };


    const offTaker = [
        {
            name: 'Request type:',
            details: modalData.supply_frequency,
        },
        {
            name: 'Purchase ID:',
            details: `AD33342222`
        },
        {
            name: 'Request date:',
            details: modalData.created_at.slice(0, 10),
        },
        {
            name: 'Request Time:',
            details: modalData.created_at.slice(12, 16),
        },
        {
            name: 'Request status:',
            details: <div className='flex items-center justify-center px-3 rounded-lg h-5 bg-[#FFFAEB]'>
                          <GoDotFill className='text-[9px] text-[#F79009] xl:text-[10px]' />
                          <p className='text-[9px] text-[#F79009] font-medium ml-1 xl:text-[10px]'>
                              {modalData.status}
                          </p>
                      </div>
        }
    ]

    const purchaseRequest = [
        {
            name: 'Commodity:',
            details: modalData.name,
        },
        {
            name: 'Quantity Requested:',
            details: `${modalData.quantity} Metric tons`
        },
        {
            name: 'Ore type:',
            details: modalData.ore_type,
        },
        {
            name: 'Frequency of Request:',
            details: modalData.supply_frequency,
        },
        {
            name: 'Delivery Address:',
            details: `${modalData.address}, ${modalData.city}, ${modalData.country}`
        },
    ]



  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      className='flex flex-col items-center justify-start bg-white w-full rounded-2xl z-50 overflow-y-auto py-7 mb-16 pb-8 lg:pb-16 lg:mt-10 xl:mt-14 xl:pb-20'>
           {/* HEADER */}
         <div className='flex items-start justify-between w-full px-4 md:px-8 xl:px-10'>
             <div className='flex flex-col items-start justify-start md:flex-row md:items-center'>
                 <p className='text-xs text-[#101828] font-semibold lg:text-sm xl:text-base'>
                     {modalData.name}<span className='font-normal'> ({modalData.id})</span>
                 </p>
                 <div className='flex items-center justify-center px-3 rounded-lg h-5 bg-[#FFFAEB] mt-1 md:mt-0 md:ml-2'>
                     <GoDotFill className='text-[9px] text-[#F79009] xl:text-[10px]' />
                     <p className='text-[9px] text-[#F79009] font-medium ml-1 xl:text-[10px]'>
                           {modalData.status}
                     </p>
                 </div>
             </div>

             <div onClick={()=>setOpenModal(false)}
              className='flex items-start justify-end'>
                   <VscClose className='text-xl xl:text-2xl' />
             </div>
         </div>


         {/* LINE */}
         <div className='w-full h-[0.5px] bg-[#eeeeee] mt-3 md:mt-5 lg:mt-4 xl:mt-5'></div>


         <div className='flex flex-col items-start justify-start w-full lg:flex-row lg:justify-between lg:w-full px-6'>

         {/* DETAILS 1 */}
         <div className='flex flex-col items-start justify-start w-full mt-8 xl:mt-10'>
              <p className='text-[11px] text-[#D0D5DD] font-medium xl:text-sm'>
                    OFF-TAKER DETAILS
              </p>

              <div className='flex flex-col items-start justify-start w-full mt-2'>
                 {offTaker.map((item, index) => {
                    return(
                        <div key={index} className='flex items-center justify-start w-full mt-2 xl:mt-4'>
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
         <div className='flex flex-col items-start justify-start w-full mt-8'>
              <p className='text-[11px] text-[#D0D5DD] font-medium xl:text-sm'>
                   PURCHASE REQUEST DETAILS
              </p>

              <div className='flex flex-col items-start justify-start w-full mt-2'>
                 {purchaseRequest.map((item, index) => {
                    return(
                        <div key={index} className='flex items-start justify-start w-full mt-2 xl:mt-4'>
                           <p className='text-[10px] text-[#667085] font-medium w-[30%] lg:w-[50%] xl:text-[13px] xl:w-[35%]'>
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


    </motion.div>
  )
}

export default OrderModal
