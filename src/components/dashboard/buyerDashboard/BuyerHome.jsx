import React, { useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import Aluminium from '../../../assets/images/alu.svg'
import Cobalt from '../../../assets/images/cob.svg'
import HomeModal from '../../modals/buyer/HomeModal';
import PaymentReciept from '../../modals/buyer/PaymentReciept';
import { useDispatch } from 'react-redux';
import { metricsData, purchaseRequestAction } from '../../../features/buyer/BuyerActions';



const BuyerHome = ({setTab}) => {
     const [openModal, setOpenModal] = useState(null)
     const [payment, setPayment] = useState(false)


     const [metrics, setMetrics] = useState(0);
     const [purchaseRequestsData, setPurchaseRequestsData] = useState('');

     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(metricsData(setMetrics))
          dispatch(purchaseRequestAction(setPurchaseRequestsData))
     }, [dispatch])


  const purchaseRequests1 = [
    {
      id: 1,
      quantity: `x${purchaseRequestsData.quantity}`,
      name: purchaseRequestsData.name,
      img: Aluminium,
      purchaseId: purchaseRequestsData.purchase_id,
      trackingNo: '23444555-200',
      date: '12 . 09 . 2023',
      status: 'In-transit',
      initialDest: 'Lagos, Nigeria',
      finalDest: `${purchaseRequestsData.state}, ${purchaseRequestsData.location}`,
    },
    {
      id: 2,
      quantity: 'x2',
      name: 'Cobalt',
      img: Cobalt,
      purchaseId: 'AD33342222',
      trackingNo: '23444555-200',
      date: '12 . 09 . 2023',
      status: 'Completed',
      initialDest: 'Lagos, Nigeria',
      finalDest: 'Tokyo, Japan',
    },
  ]

  const handleCloseBackdrop = () => {
     setOpenModal(false)
     setPayment(false)
  }


  return (
     <div className='flex flex-col items-center justify-start w-full'>
    <div className='flex flex-col items-start justify-start w-full pb-14 py-6 px-6 mt-28 lg:mt-[100px] xl:mt-[115px] xl:px-8 xl:py-8'>
         <div className='flex flex-row items-center justify-between w-full md:justify-start'>
             <div className='flex flex-col items-start justify-center w-[48%] h-28 border-[1px] border-[#dddddd] shadow-md rounded-md p-3 md:w-[170px] xl:w-[220px] xl:h-36 xl:pl-5'>
                  <p className='text-[10px] font-medium text-black xl:text-xs'>
                       Total purchase orders
                  </p>
                  <p className='text-xl font-medium text-black my-2 xl:text-2xl xl:my-3'>
                      {metrics.total}
                  </p>
                  <p className='text-[9px] font-medium text-[#667085] xl:text-[11px]'>
                        {metrics.completed} Completed
                  </p>
             </div>

             <div className='flex flex-col items-start justify-center w-[48%] h-28 border-[1px] border-[#dddddd] shadow-md rounded-md p-3 md:w-[170px] md:ml-4 xl:w-[220px] xl:h-36 
             xl:pl-5 xl:ml-5'>
                  <p className='text-[10px] font-medium text-black xl:text-xs'>
                        purchase orders
                  </p>
                  <p className='text-xl font-medium text-black my-2 xl:text-2xl xl:my-3'>
                      {metrics.ongoing}
                  </p>
                  <p className='text-[9px] font-medium text-[#667085] xl:text-[11px]'>
                         {metrics.completed} Completed
                  </p>
             </div>
         </div>


         <div className='flex flex-col items-start justify-start w-full mt-10 xl:mt-12'>
              <p className='text-base font-medium text-[#101828] xl:text-xl '>
                     My Recent Purchase Requests
              </p>

              {purchaseRequests1.map((item) => {
                return(
              <div key={item.id}
              className='flex flex-col items-start justify-start w-full border-[1.5px] border-[#D0D5DD] shadow-md rounded-lg px-3 py-6 mt-5 md:px-7 md:flex-row md:items-center'>

                  <div className='hidden md:flex w-40'>
                       <img className='w-full h-full rounded-md'
                       src={item.img}  alt='aluminium'/>
                  </div>

                  <div className='flex flex-col item-start w-full md:ml-11'>
                       {/* TOP */}
                   <div className='flex flex-row items-start justify-between w-full'>
                        <div className='flex flex-col items-start justify-start'>
                            <p className='text-xs font-bold text-[#101828]'>{item.quantity}
                            <span className='font-normal ml-2'>{item.name}</span></p>

                            <div className='flex flex-col items-start mt-1 lg:flex-row'>
                               <p className='text-[10px] font-semibold text-[#667085]'>
                                    Purchase ID: <span className='font-normal lg:pr-1'> {item.purchaseId} - </span>
                               </p>
                               <p className='text-[10px] font-semibold text-[#667085] mt-1 lg:mt-0'>
                                    Tracking Number: <span className='font-normal'> {item.trackingNo}</span>
                               </p>
                            </div>

                            <div className='flex flex-row items-center justify-start mt-2'>
                               <p className='text-[11px] font-normal text-[#667085]'>
                                     {item.date}
                               </p>
                               <div className={`flex items-center justify-start py-[3px] px-1 rounded-lg ${item.status === 'Completed' ? 'bg-[#ECFDF3]' : item.status === 'In-transit' && 'bg-[#FFFAEB]'} ml-4`}>
                                    <GoDotFill className={`text-xs ${item.status === 'Completed' ? 'text-[#159600]' : item.status === 'In-transit' && 'text-[#F79009]'}`} />
                                    <p className={`text-[9px] font-normal ${item.status === 'Completed' ? 'text-[#159600]' : item.status === 'In-transit' && 'text-[#F79009]'} ml-1 pr-2`}>
                                         {item.status}
                                    </p>
                               </div>
                            </div>

                        </div>

                        <button onClick={()=>setOpenModal(true)}
                        className='text-[10px] text-white text-normal text-center bg-[#2196F3] h-7 w-20 rounded-md'>
                              View Order
                        </button>
                   </div>

                       {/* PROGRESS CONTAINER */}
                   <div className='flex items-center justify-start w-full h-[5px] mt-3 rounded-lg bg-[#D0D5DD]'>
                       <div className={`h-full rounded-full ${item.status === 'Completed' ? 'bg-[#159600] w-full' : item.status === 'In-transit' && 'bg-[#F79009] w-[70%]'} `}></div>
                   </div>


                       {/* LOCATIONS DIV */}
                   <div className='flex flex-row items-start justify-between w-full mt-3'>
                      <div className='flex flex-col items-start justify-start'>
                           <p className='text-[10px] font-normal text-[#667085]'>
                                  From:
                           </p>
                           <p className='text-[10px] font-medium text-black'>
                                  {item.initialDest}
                           </p>
                      </div>

                      <div className='flex flex-col items-end justify-start'>
                           <p className='text-[10px] font-normal text-[#667085]'>
                                  To:
                           </p>
                           <p className='text-[10px] font-medium text-black'>
                                  {item.finalDest}
                           </p>
                      </div>
                   </div>

                   </div>

              </div>
              )
              })}

         </div>
         
     </div>
            

          {
           openModal | payment &&
          <div onClick={handleCloseBackdrop}
          className='fixed w-full h-full bg-[#000000] p-5 opacity-60 z-40 lg:p-0'></div>
          }

          { 
            openModal &&
           <div className='absolute flex flex-col items-center justify-center w-[90%] mt-16 md:w-[80%] lg:w-[72%] xl:w-[65%]'>
              <HomeModal data={purchaseRequestsData} setOpenModal={setOpenModal} setPayment={setPayment} setTab={setTab} />  
           </div>
          }

          { 
            payment &&
           <div className='absolute flex flex-col items-center justify-center w-[90%] h-full md:w-[80%] lg:w-[72%] xl:w-[65%]'>
             <PaymentReciept setOpenModal={setOpenModal} setPayment={setPayment}  />  
           </div>
          }
          

      </div>
  )
}

export default BuyerHome
