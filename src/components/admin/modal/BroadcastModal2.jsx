import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { VscClose } from "react-icons/vsc";
import 'react-datepicker/dist/react-datepicker.css';
import Image from '../../../assets/images/broadcastImg.svg'
import { GoDotFill } from "react-icons/go";
import { useSelector } from 'react-redux';




const BroadcastModal2 = ({setBroadcastModal2, setBroadcastModal}) => {
    const data = useSelector((state) => state.admin.broadcastData)

    useEffect(() => {
        console.log(data, 'YES');
    }, [data])

    const slideInVariants = {
        hidden: { y: '100%' },
        visible: { y: 0 },
      };

      const progressBar = [
        {
            id: 1,
            no: 1,
            status: 'Broadcast Details',
        },
        {
            id: 2,
            no: 2,
            status: 'Broadcast Settings',
            line: 'active'
        },
        {
            id: 3,
            no: 3,
            status: 'Preview',
            line: 'active'
        },
      ]

      const closeModal = () => {
        setBroadcastModal(false)
        setBroadcastModal2(false)
      }


      const info = [
        {
            property: 'Request Type',
            value: data.order_frequency,
        },
        {
            property: 'Commodity',
            value: data.product_name,
            
        },
        {
            property: 'Ore Type',
            value: data.ore_type,
        },
        {
            property: 'Minimun Purity',
            value: data.purity,
        },
        {
            property: 'Metric Tons',
            value: data.quantity,
        },
        {
            property: 'Date Requested',
            value: data.created_at.slice(0, 10),
        },
        {
            property: 'Time Requested',
            value: data.created_at.slice(11, 16),
        },
      ]




  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.85 }}
      className='flex flex-col items-center justify-start w-full h-full bg-white rounded-lg shadow-gray-900 pb-5 xl:pb-10'>
            {/* HEADER */}
         <div className='flex items-start justify-between w-full px-4 pt-4 md:px-8 lg:pt-6 xl:px-10 xl:pt-8'>
             <div className='flex flex-col items-start justify-start md:flex-row md:items-center'>
                 <p className='text-sm text-[#101828] font-semibold lg:text-base xl:text-lg'>
                      Broadcast Preview
                 </p>
             </div>

             <div onClick={closeModal}
              className='flex items-start justify-end'>
                   <VscClose className='text-xl xl:text-2xl' />
             </div>
         </div>


         {/* LINE */}
         <div className='w-full border-[1px] border-[#eeeeee] mt-3 lg:mt-4 xl:mt-6'></div>


           {/* PROGRESS */}
         <div className='flex flex-col items-center justify-start w-[300px] pt-8 px-4 md:pt-10 md:px-8 md:w-[650px] lg:w-[670px] xl:w-[830px]'>
         <div className='flex items-start justify-center w-full'>

                {progressBar.map((item) => {
                    return(
                <div className='flex items-center'>
                      {item.line && <div className='border-[1px] border-[#48adff] w-20 md:w-[180px] xl:w-[250px]'></div>}
                      <div className='flex flex-col items-center justify-start'>
                           <div className={`flex items-center justify-center bg-blue-500 border-none rounded-full h-7 w-7 border-[1px] border-[#D0D5DD] 
                                            lg:h-8 lg:w-8 xl:h-11 xl:w-11`}>
                              <p className={`text-xs text-white font-medium`}>{item.no}</p>
                           </div>
                           {/*<p className='text-[10px] text-[#2196F3] font-medium pt-2'>{item.status}</p>*/}
                      </div>
                </div>
                )
                })}

         </div>

         <div className='flex items-start justify-between w-full mr-3 md:w-[470px] xl:w-[655px]'>
                <p className='text-[10px] text-[#2196F3] font-medium pt-2 w-20 text-start md:w-full xl:text-sm'>Broadcast Details</p>
                <p className='text-[10px] text-[#2196F3] font-medium pt-2 w-20 text-center md:w-full xl:text-sm'>Recipients & Settings</p>
                <p className='text-[10px] text-[#2196F3] font-medium pt-2 w-20 text-end md:w-full xl:text-sm'>Preview</p>
         </div>
         </div>


         <div className='w-full px-4 mt-8 md:px-8 xl:px-10 xl:mt-12'>
             <img className='w-full h-full'
             src={Image} alt='commodity' />

             <div className='flex items-start justify-between w-full mt-5 xl:mt-8'>
                  <div className='flex flex-1 flex-wrap justify-start text-xs font-medium text-black md:text-base xl:text-xl'>
                       {data.quantity} metric tons of {data.ore_type} {data.name} with a minimum purity level of {data.purity}
                       <div className='flex items-center justify-center h-6 px-2 bg-[#FFFAEB] rounded-xl mt-1 text-[10px] xl:px-4'>
                           <GoDotFill className='mr-1 text-[#F79009] text-xs' />
                           <p className='text-[10px] text-[#B54708] xl:text-xs'>Urgent</p>
                       </div>
                  </div>

                  {/*<div className='flex items-center justify-end w-[33%]'>
                       <p className='text-xs text-[#2196F3] font-medium md:text-lg md:font-bold xl:text-2xl'>$122.8</p>
                       <p className='text-[10px] text-[#667085] font-normal pl-1 md:text-sm xl:text-base xl:pl-2'> /per ton</p>
                  </div>*/}
             </div>
             {/*<p className='text-[10px] text-[#667085] mt-3 md:mt-5 md:text-xs xl:mt-8 xl:text-sm xl:w-[80%]'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit vitae magna mollis gravida. Duis eget nunc eu nibh aliquet eleifend ut et mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
             </p>*/}
         </div>


         <div className='w-full px-4 mt-8 md:px-8 xl:px-10 xl:mt-12'>
               <p className='text-[10px] text-[#667085] font-medium xl:text-xs'>
                    REQUEST DETAILS
               </p>

               <div className='flex flex-col items-start justify-start w-full mt-3 xl:mt-5'>
               {info.map((item, index) => {
                return(
                      <div key={index} className='flex items-center justify-start mb-2 xl:mb-3'>
                          <p className='text-[10px] text-[#667085] w-20 xl:text-xs xl:w-28'>
                              {item.property}
                          </p>
                          <p className='text-[10px] text-black font-medium ml-2 xl:text-xs'>
                              {item.value}
                          </p>
                      </div>
                      )
                      })}
               </div>
         </div>


         {/*<div className='w-full px-4 mt-7 md:px-8 xl:px-10 xl:mt-12'>
               <p className='text-[10px] text-[#667085] font-medium xl:text-xs'>
                    PROGRESS BAR
               </p>
               <p className='text-[9px] text-[#667085] mt-2 md:text-[11px] xl:text-[13px] xl:w-[70%]'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit vitae magna mollis gravida. Duis eget nunc eu nibh aliquet eleifend ut et mauris. Vestibulum ante ipsum primis in faucibus orci luctus et
               </p>
         </div>


         <div className='flex items-center justify-start w-full px-4 mt-3 md:px-8 md:mt-6 xl:px-10'>
              <div className='flex flex-1 items-center justify-start bg-[#D0D5DD] h-[6px] rounded-xl md:h-2'>
                  <div className={`flex items-center justify-start w-[0%] bg-[#2196F3] h-full rounded-xl`}></div>
              </div>

              <p className='text-[#667085] text-[10px] ml-2 md:text-xs md:ml-5 xl:text-lg xl:ml-8'>
                   7,500
                   <span className='text-[#2196F3] font-medium'>/12,000</span>
              </p>
         </div>*/}



         {/* BUTTONS*/}
         <div className='flex items-center justify-end w-full mt-8 px-4 md:px-8 md:mt-12 xl:px-10'>
               <button onClick={closeModal}
               className='text-center text-white text-xs bg-[#007CD7] border-[1px] h-8 w-20 rounded-md xl:h-10 xl:w-24 xl:text-sm'>
                   close
               </button>
               {/*<button onClick={closeModal}
               className='text-center text-white text-xs bg-[#007CD7] h-8 w-20 rounded-md xl:h-10 xl:w-24 xl:text-sm'>
                   Publish
               </button>*/}
         </div>


    </motion.div>
  )
}

export default BroadcastModal2
