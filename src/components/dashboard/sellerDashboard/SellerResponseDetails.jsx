import React, { useEffect, useState } from 'react'
import { VscClose } from "react-icons/vsc";
import Image from '../../../assets/images/broadcastImg.svg'
import { GoDotFill } from "react-icons/go";
import { useSelector } from 'react-redux';
import { IoIosArrowBack } from "react-icons/io";
import SellerBroadcastOffer from './SellerBroadcastOffer';




const SellerResponseDetails = ({broadcastDetails, setBroadcastDetails}) => {
    const [openModal, setOpenModal] = useState(false);

    const data = broadcastDetails.broadcast

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


      const response = [
        {
            property: 'Metric Tons',
            value: 20,
        },
        {
            property: 'Counter Offer',
            value: <p className='text-[10px] text-black font-medium  xl:text-xs'>
                      USD 500 <span className='text-[#667085]'>/per ton</span>
                   </p>,
            
        },
        {
            property: 'Offer Status',
            value: <div className='flex items-center justify-center py-[6px] px-2 rounded-lg bg-[#FFFAEB] xl:px-3'>
                       <GoDotFill className='text-[10px] text-[#F79009]' />
                       <p className='text-[8px] text-[#B54708] font-medium ml-[3px] xl:text-xs'>
                            Pending Verification
                       </p>
                   </div>,
            
        },
        {
            property: 'Location',
            value: '121 Kings street, Lagos state, Nigeria',
        },
        {
            property: 'Response Data',
            value: data.created_at.slice(0, 10),
        },
        {
            property: 'Response Time',
            value: data.created_at.slice(11, 16),
        },
      ]



  return (
    <div className='flex items-start justify-center w-full h-full'>
    <div className='flex flex-col items-start justify-start w-full py-6 px-6 pb-10 mt-24 lg:mt-0 lg:pt-[110px] xl:px-8 xl:pt-[85px] xl:mt-10 xl:pb-16'>
             {/* HEADER */}
         <div className='flex items-start justify-between w-full pt-4 md:pt-8 lg:pt-6 xl:pt-8'>
         <div onClick={()=>setBroadcastDetails(false)}
         className='flex items-start justify-start cursor-pointer md:flex-row md:items-center'>
               <IoIosArrowBack />
               <p className='text-xs text-semibold text-[#000000 pl-1 xl:text-sm'>Back</p>

         </div>
     </div>


     <div className='w-full mt-8 xl:mt-12'>
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

              <div className='flex items-center justify-end w-[33%]'>
                   <p className='text-xs text-[#2196F3] font-medium md:text-lg md:font-bold xl:text-2xl'>{data.currency} {data.amount}</p>
                   <p className='text-[10px] text-[#667085] font-normal md:text-sm xl:text-base'>/per ton</p>
              </div>
         </div>
         {/*<p className='text-[10px] text-[#667085] mt-3 md:mt-5 md:text-xs xl:mt-8 xl:text-sm xl:w-[80%]'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit vitae magna mollis gravida. Duis eget nunc eu nibh aliquet eleifend ut et mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </p>*/}
     </div>

     <div className='flex flex-col items-start justify-start w-full md:flex-row lg:mt-5 xl:mt-8'>
          <div className='w-full mt-8'>
                <p className='text-[10px] text-[#667085] font-medium xl:text-xs'>
                     REQUEST DETAILS
                </p>

                <div className='flex flex-col items-start justify-start w-full mt-3 xl:mt-5'>
                {info.map((item, index) => {
                 return(
                       <div key={index} className='flex items-center justify-start mb-2 xl:mb-3'>
                           <p className='text-[10px] text-[#667085] w-24 xl:text-xs xl:w-32'>
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
          <div className='w-full mt-8'>
                <p className='text-[10px] text-[#667085] font-medium xl:text-xs'>
                     RESPONSE DETAILS
                </p>

                <div className='flex flex-col items-start justify-start w-full mt-3 xl:mt-5'>
                {response.map((item, index) => {
                 return(
                       <div key={index} className='flex items-center justify-start mb-2 xl:mb-3'>
                           <p className='text-[10px] text-[#667085] w-24 xl:text-xs xl:w-32'>
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
     </div>



     {/* BUTTONS*/}
     <div className='flex items-center justify-between w-full mt-14 md:mt-24 lg:mt-28'>
              <button className='text-[10px] text-center text-[#2196F3] font-medium border-[1px] border-[#2196F3] rounded-md h-9 w-[48%] md:h-11 md:w-[47%]'>
                     Contact Support
              </button>
              <button
               className='text-[10px] text-center text-[#FFFFFF] font-medium border-[1px] bg-red-500 rounded-md h-9 w-[48%] md:h-11 md:w-[47%]'>
                     Delete Offer
              </button>
     </div>

     
     </div>

     {openModal && <div onClick={()=>setOpenModal(false)} className='fixed w-full h-full bg-[#000000] opacity-30'></div>}

    {openModal && <SellerBroadcastOffer setOpenModal={setOpenModal} data={data} setBroadcastDetails={setBroadcastDetails} />}


    </div>
  )
}

export default SellerResponseDetails
