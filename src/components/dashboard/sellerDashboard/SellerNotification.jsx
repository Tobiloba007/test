import React from 'react'
import { GoDotFill } from "react-icons/go";
import { GoCheck } from "react-icons/go";



const SellerNotification = () => {
    const notification = [
        {
            id: 1,
            title: 'Your payment has been confirmed!',
            desc: 'Your purchase request payment for “Aluminium” has been confirmed your tracking number and purchase ID are DS-N75-1575286692-9348 and 23555332-119 respectively',
            time: '2min ago',
            status: 'new',
        },
        {
            id: 2,
            title: "Your purchase request for 'Cobalt' has been accepted!",
            desc: "Generation of 'Cobalt' purchase Order successfully processed and confirmed, please proceed to make your payment.",
            time: '3hrs ago',
            status: 'new',
        },
        {
            id: 3,
            title: "Congratulations! Your delivery has been successfully fulfilled.",
            desc: "Your purchase order with purchase ID: #23555332-119, has been successfully delivered.",
            time: '3hrs ago',
            status: 'new',
        },
        {
            id: 4,
            title: "Congratulations! Your delivery has been successfully fulfilled.",
            desc: "Your purchase order with purchase ID: #23555332-119, has been successfully delivered.",
            time: '3hrs ago',
            status: 'old',
        },
        {
            id: 5,
            title: "Congratulations! Your delivery has been successfully fulfilled.",
            desc: "Your purchase order with purchase ID: #23555332-119, has been successfully delivered.",
            time: '3hrs ago',
            status: 'old',
        },
        {
            id: 6,
            title: "Congratulations! Your delivery has been successfully fulfilled.",
            desc: "Your purchase order with purchase ID: #23555332-119, has been successfully delivered.",
            time: '3hrs ago',
            status: 'old',
        },
        {
            id: 7,
            title: "Congratulations! Your delivery has been successfully fulfilled.",
            desc: "Your purchase order with purchase ID: #23555332-119, has been successfully delivered.",
            time: '3hrs ago',
            status: 'old',
        },
    ]

  return (
    <div className='flex flex-col items-center justify-start w-full px-5 md:px-10 mt-28 lg:mt-0 lg:pt-[120px] xl:pt-[150px] xl:px-8 xl:py-8'>
        <div className='flex items-start justify-start w-full pt-6'>
           <p className='text-sm font-medium text-[#101828] lg:text-base xl:text-xl'>
                You have 3 unread notifications
           </p>
        </div>


        <div className='flex flex-col items-center justify-start w-full mt-7 pb-10 lg:mt-9'>

        {notification.map((item) => {
            return (
        <div  key={item.id} 
        className='flex flex-col items-center justify-start w-full mt-5 lg:items-start'>
          <div className='flex items-start justify-start w-full lg:items-center lg:w-[90%] xl:w-[80%]'>
               {/* LEFT */}
               <div className='flex items-center justify-start'>
                     <GoDotFill className={`text-[10px] text-[${item.status === 'new' ? '#DA1E28' : '#FFFFFF'}] xl:text-xs`} />
                     <div className='flex items-center justify-center h-7 w-7 bg-[#DCF0E2] ml-2 rounded-full lg:ml-4 xl:h-9 xl:w-9'>
                         <GoCheck className='text-sm text-[#25A249] xl:text-base' />
                     </div>
               </div>
               {/* RIGHT */}
               <div className='flex flex-col items-start justify-start ml-5'>
                    <p className='text-[11px] font-semibold text-[#101828] xl:text-[13px]'>
                          {item.title}
                    </p>
                    <p className='text-[10px] font-normal text-[#667085] mt-1 xl:text-xs xl:leading-5'>
                          {item.desc} 
                    </p>
                    <p className='text-[10px] font-semibold text-[#667085] mt-2 xl:text-xs xl:mt-3'>
                         {item.time}
                    </p>
               </div>
          </div>

          <div className='border-[0.5px] border-[#DDE1E6] w-full mt-3'></div>

        </div>
            )
        })}
        
        </div>

    </div>
  )
}

export default SellerNotification
