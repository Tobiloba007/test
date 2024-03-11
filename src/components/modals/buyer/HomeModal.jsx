import React, { useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { VscClose } from "react-icons/vsc";
import { GoCheckCircleFill } from "react-icons/go";
import { MdLocationSearching } from "react-icons/md";
import package_item from '../../../assets/icons/package.svg'
import { motion } from 'framer-motion';
import { PiWarningFill } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { BuyerProfileActions } from '../../../features/buyer/BuyerActions';




const HomeModal = ({setOpenModal, setTab, setPayment, data}) => {
    const slideInVariants = {
        hidden: { y: '100%' },
        visible: { y: 0 },
      };

      const [user, setUser] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(BuyerProfileActions(setUser))
        console.log(user.last_name);

    }, [dispatch, user])



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
            details: '2024-03-04'
        },
        {
            name: 'Request Time:',
            details: '12:45 PM'
        },
        {
            name: 'Request status:',
            details: <div className='flex items-center justify-center w-[70px] rounded-lg h-5 bg-[#FFFAEB]'>
                          <GoDotFill className='text-[9px] text-[#F79009] xl:text-[10px]' />
                          <p className='text-[9px] text-[#F79009] font-medium ml-1 xl:text-[10px]'>
                              In Transit
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
            stage: 'Pending Confirmation',
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

    const handlePayment = () => {
        setPayment(true);
        setOpenModal(false)
    }


  return (
    <motion.div
    initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.5 }}
     className='flex flex-col items-center justify-start bg-white h-full w-full rounded-2xl z-50 py-7 mb-16 pb-8 lg:pb-0 xl:pb-20'>
           {/* HEADER */}
         <div className='flex items-start justify-between w-full px-4 md:px-8 xl:px-10'>
             <div className='flex flex-col items-start justify-start md:flex-row md:items-center'>
                 <p className='text-xs text-[#101828] font-semibold lg:text-sm xl:text-base'>
                     {data.name}<span className='font-normal'> ({data.buyer_id})</span>
                 </p>
                 <div className='flex items-center justify-center w-[70px] rounded-lg h-5 bg-[#FFFAEB] mt-1 md:mt-0 md:ml-2'>
                     <GoDotFill className='text-[9px] text-[#F79009] xl:text-[10px]' />
                     <p className='text-[9px] text-[#F79009] font-medium ml-1 xl:text-[10px]'>
                         In Transit
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


         <div className='flex flex-col items-start justify-start w-full px-4 md:px-8 lg:flex-row xl:px-10'>
         {/* LEFT */}

         <div className='flex flex-col items-start justify-start w-full lg:w-[55%]'>


         <div className='flex flex-col items-start justify-start w-full mt-5 md:w-[60%] lg:w-full'>
             {data.payment_status === 'pending' &&
             <div className='flex items-center justify-start w-[90%] h-12 bg-[#FFF4E7] lg:h-14 xl:h-16'>
                 <div className='border-[2px] border-[#F79009] h-full'></div>
                 <PiWarningFill className='text-sm text-[#F6BB31] mx-3 lg:text-lg xl:text-2xl xl:mx-4' />
                 <div className='w-full'>
                      <p className='text-[8px] text-[#8A6100] font-medium lg:text-[9px] xl:text-xs'>
                           NOTE
                      </p>
                      <p className='text-[8px] text-[#8A6100] font-normal mt-1 lg:mt-0 xl:text-[11px] xl:mt-1'>
                           Your Order is currently pending a payment verification
                      </p>
                 </div>
             </div>
             }

             <div className='flex items-center justify-start w-full mt-7 lg:w-[90%] xl:mt-8'>
                  <div className='flex items-center justify-center w-full h-8 bg-[#2196F3] rounded-md mr-3 px-2 xl:h-10 xl:rounded-lg'>
                      <p className='text-[9px] text-[#FFFFFF] font-medium mr-2 md:text-[10px] xl:text-xs xl:mr-3'>
                          Proceed to Checkout
                      </p>
                      <IoWalletOutline className='text-sm text-white xl:text-lg' />
                  </div>

                  <div onClick={handlePayment}
                  className='flex items-center justify-center w-full h-8 bg-[#FFFFFF] border-[1px] border-[#dddddd] rounded-md mr-3 px-3 xl:h-10 xl:rounded-lg'>
                      <p className='text-[9px] text-[#2196F3] font-medium md:text-[10px] xl:text-xs'>
                          Upload Payment Reciept
                      </p>
                  </div>
             </div>
         </div>

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
         <div className='flex flex-col items-start justify-start w-full h-full lg:w-[45%] lg:flex-row lg:items-start lg:justify-start'>
              {/* LINE */}
             <div className='hidden lg:flex h-[100vh] border-[0.5px] border-[#eeeeee] mr-16 xl:mr-20'></div>

             <div className='flex flex-col items-start justify-start w-full mt-10'>
             <p className='text-[11px] text-[#D0D5DD] font-medium xl:text-sm'>
                 TIMELINE
             </p>

             <div className='flex flex-row flex-wrap items-end justify-start w-full lg:mt-3 xl:flex-col xl:items-start xl:justify-start'>
             {timeline.map((item) => {
                return(
                         <div key={item.id} className='flex flex-col items-start justify-start mt-6 mr-2 md:mt-4 lg:flex-row-reverse lg:justify-start lg:mt-1'>
                             <div className='flex flex-col items-start justify-start lg:ml-5 xl:mt-3'>
                                 <p className={`text-[9px] font-medium w-24 ${item.status === 'completed' ? 'text-black' : item.status === 'pending' ? 
                                 'text-white bg-[#F79009] p-1 px-2 font-normal' : item.status === 'inactive' && 'text-[#D0D5DD]'} lg:w-28 xl:text-xs xl:w-full`}>
                                     {item.stage}
                                 </p>
                                 {item.status === 'inactive'
                                 ? ''
                                 :<p className='text-[8px] text-[#667085] font-normal pt-1 xl:text-[10px]'>
                                     {item.date} 
                                  </p>
                                }
                             </div>

                             <div className='flex items-center justify-start mt-2 lg:flex-col lg:items-center lg:justify-start lg:mt-0 xl:mt-2'>
                                  {item.status === 'completed' 
                                   ? <GoCheckCircleFill className='text-xl text-[#159600] lg:text-[23px] xl:text-[27px]' />

                                   : item.status === 'pending'
                                   ? <div className='flex items-center justify-center w-8 h-8 border-[1px] border-[#F79009] rounded-[100px] py-2 -mb-1 lg:mb-0 lg:h-[33px] 
                                   lg:w-[33px] ml-[-4px] xl:h-9 xl:w-9 xl:ml-[-4px]'>
                                         <div className='flex items-center justify-center w-6 h-6 bg-[#F79009] rounded-full lg:h-[25px] lg:w-[25px] xl:h-7 xl:w-7'>
                                            <img className='h-4 w-4'
                                            src={package_item} alt='package' />
                                         </div>
                                      </div>

                                   : item.status === 'inactive'
                                   && <div className='flex items-center justify-center w-6 h-6 border-[1px] border-[#D0D5DD] rounded-[100px] xl:h-7 xl:w-7 xl:ml-[2px]'>
                                         <div className='flex items-center justify-center w-4 h-4 bg-[#D0D5DD] rounded-full xl:h-5 xl:w-5'></div>
                                      </div>
                                  }
                                  <div className={`border-[1px] ml-2 w-24 ${item.status === 'completed' ? 'border-[#159600]' : 'border-[#D0D5DD]'} ${item.id === 5 && 'hidden'}
                                   lg:w-0 lg:ml-0 lg:mt-1 lg:h-12 lg:border-[1.5px] xl:mt-2`}></div>
                             </div>
                         </div>
                  )
              })}
              </div>


              <div onClick={()=>setTab('Shipment Tracking')}
              className='flex flex-row items-center justify-center px-3 h-8 mt-10 rounded-md bg-[#2196F3] lg:mt-14 lg:px-4 xl:h-9 xl:mt-20'>
                  <p className='text-[10px] text-[#FFFFFF] font-normal xl:text-xs'>
                       Track Shipment
                  </p>
                  <MdLocationSearching className='text-white ml-2 text-sm xl:text-base' />
              </div>

              </div>

         </div>
         </div>

    </motion.div>
  )
}

export default HomeModal
