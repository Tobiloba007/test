import React, { useEffect, useState } from 'react'
import metal2 from '../../../assets/images/Metal2.svg'
import { GoDotFill } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { metricsData, recentSupplyRequestAction } from '../../../features/seller/SellerAction';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import HomeModal from '../../modals/buyer/HomeModal';
import OrderModal from './OrderModal';



const SellerHome = ({setTab}) => {
      const [loading, setLoading] = useState(false);
      const [loadMetrics, setLoadMetrics] = useState(false);
      const [error, setError] = useState(false);
      const [recentSupplyRequest, setRecetSupplyRequest] = useState([]);
      const [openModal, setOpenModal] = useState(null);
      const [modalData, setModalData] = useState(null);


      
     const [metrics, setMetrics] = useState(0);


    const dispatch = useDispatch();


     useEffect(() => {
          dispatch(metricsData(setMetrics, setLoadMetrics))
          dispatch(recentSupplyRequestAction(setRecetSupplyRequest, setLoading, setError))
     }, [dispatch])

     const data = recentSupplyRequest.slice(0, 5)

     const handleOpenModal = (item) => {
          setOpenModal(true)
          setModalData(item)
       }


  return (
     <div className='flex flex-col items-center w-full'>
    <div className='flex flex-col items-start justify-start w-full py-6 px-6 mt-28 lg:mt-0 lg:pt-[120px] xl:pt-[150px] xl:px-8 xl:py-8'>
         <div className='flex flex-row flex-wrap items-center justify-between w-full md:justify-start'>
         {!loadMetrics
             ?<div className='flex flex-col items-start justify-center w-[48%] h-24 border-[1px] border-[#dddddd] shadow-md rounded-md p-3 md:w-[170px] xl:w-[220px] xl:h-28 xl:pl-5'>
                  <p className='text-[10px] font-medium text-black xl:text-xs'>
                         Purchase orders fulfilled                 
                  </p>
                  <p className='text-xl font-medium text-black my-2 xl:text-2xl xl:my-3'>
                         {metrics.completed}
                  </p>
              </div>
             :<div className='w-[48%] h-[90px] rounded-md md:w-[170px] xl:w-[220px] lg:h-24 xl:h-[110px]'>  
                  {loadMetrics && <Skeleton height="100%" baseColor="#ebebeb" count={1} />}
              </div>
          }

          {!loadMetrics
             ?<div className='flex flex-col items-start justify-center w-[48%] h-24 border-[1px] border-[#dddddd] shadow-md rounded-md p-3 md:w-[170px] md:ml-4 xl:w-[220px] xl:h-28 
             xl:pl-5 xl:ml-5'>
                  <p className='text-[10px] font-medium text-black xl:text-xs'>
                        Ongoing purchase orders
                  </p>
                  <p className='text-xl font-medium text-black my-2 xl:text-2xl xl:my-3'>
                       {metrics.ongoing}
                  </p>
             </div>
             :<div className='w-[48%] h-[90px] rounded-md md:w-[170px] md:ml-4 xl:w-[220px] lg:h-24 xl:h-[110px] xl:ml-5'>  
                  {loadMetrics && <Skeleton height="100%" baseColor="#ebebeb" count={1} />}
              </div>
          }

          {!loadMetrics
             ?<div onClick={()=>setTab('Broadcast')}
             className='relative flex flex-col items-start justify-center w-[48%] h-24 mt-4 border-[1px] border-[#dddddd] bg-[#2196F3] hover:bg-[#58abef] cursor-pointer shadow-md rounded-md p-3 md:w-[170px] md:mt-0 md:ml-4 xl:w-[220px] xl:h-28 
             xl:pl-5 xl:ml-5'>
                  <p className='text-[10px] font-medium text-black xl:text-xs'>
                        Supply offers made
                  </p>
                  <p className='text-xl font-medium text-black my-2 xl:text-2xl xl:my-3'>
                        {metrics.total}
                  </p>
                  <div className='absolute -top-2 -right-2 flex items-center justify-center h-7 w-7 text-xs rounded-full bg-red-500 text-white'>
                        8
                  </div>
             </div>
             :<div className='w-[48%] h-[90px] rounded-md mt-4 md:w-[170px] md:mt-0 md:ml-4 xl:w-[220px] lg:h-24 xl:h-[110px] xl:ml-5'>  
                  {loadMetrics && <Skeleton height="100%" baseColor="#ebebeb" count={1} />}
              </div>
          }
         </div>


         <div className='flex flex-col items-start justify-start w-full mt-12 xl:mt-14'>
             {!loading
              ?<p className='text-base font-medium text-[#101828] xl:text-xl '>
                  Recent Supply Requests
               </p>
              :<p className='text-base font-medium w-full md:w-[60%] xl:text-xl'>  
                  <Skeleton height="100%" baseColor="#ebebeb" count={1} />
               </p>
              }
         </div>


         {/*  TABLE */}
       {!loading 
        ?<div className='flex flex-col items-center justify-start w-full border-[1px] h-[340px] overflow-x-auto no-scrollbar border-[#dddddd] rounded-lg mt-5 
                         md:w-full xl:h-[340px]'>

                       
         <div className='w-full mt-4'>
         <table className='w-[800px] px-5 md:w-full'>
             <thead className='border-separate border-b border-slate-[#dddddd]'>
             <tr tr className='w-full mb-1 h-8'>
                 <td className='text-[11px] text-[#667085] pl-4'>S/N</td>
                 <td className='text-[11px] text-[#667085]'>Commodity</td>
                 <td className='text-[11px] text-[#667085]'>Quantity(Metric tons)</td>
                 <td className='text-[11px] text-[#667085]'>Ore type</td>
                 <td className='text-[11px] text-[#667085]'>Date/Time</td>
                 <td className='text-[11px] text-[#667085]'>Status</td>
             </tr>
             </thead>

             <tbody className='w-full'>
                  {data.map((item, index) => {
                    return(
                  <tr key={item.id} className='h-14 hover:bg-[#EEEEEE]'>

                      <td class="border-b text-[10px] pl-6 font-medium">{index + 1}</td>

                      <td class="flex items-center justify-start h-14 border-b text-[10px] font-medium pr-14">
                           <img className='w-9 rounded-lg'
                           src={metal2} alt='metal' />
                           <p className='pl-4'>{item.name}</p>
                      </td>

                      <td class="border-b text-[10px] font-medium">{item.quantity}</td>

                      <td class="border-b text-[10px] font-medium">{item.ore_type}</td>

                      <td class="border-b text-[9px] font-medium">
                           <div className='flex flex-col items-start justify-start w-14'>
                                  <p className=''>{item.created_at.slice(0, 10)}</p>
                                  <p className='text-[#989ba0] text-[8px]'>{item.created_at.slice(12, 16)}</p>
                           </div>
                      </td>

                      <td class="border-b text-[10px] font-medium w-24 pr-6">
                           <div className='flex items-center justify-center py-[3px] rounded-lg bg-[#FFFAEB]'>
                                 <GoDotFill className={`text-[10px] text-[#F79009]`} />
                                 <p className={`text-[9px] font-normal ml-1  text-[#F79009]`}>
                                      {item.status}
                                 </p>
                           </div>
                      </td>


                      <td class="border-b text-[10px] font-medium">
                           <div onClick={()=>handleOpenModal(item)}
                           className='flex justify-center items-center h-7 w-[72px] border-[#D0D5DD] border-[1px] bg-[#F2F4F7] rounded-md'>
                                  <p className='text-[#2196F3]'>View Order</p>
                           </div>
                      </td>

                  </tr>
                  )
                  })}
             </tbody>
         </table>
         </div>

  </div>
  :<div className=' w-full h-44 rounded-lg mt-5'>
       <Skeleton height="40%" borderRadius="8px" baseColor="#ebebeb" count={1} />
       <Skeleton height="16rem" borderRadius="8px" baseColor="#ebebeb" count={1} />
   </div>
   }


    </div>

    {openModal &&
     <div onClick={()=>setOpenModal(false)}
     className='fixed w-full h-full justify-center items-center bg-[#000000] p-5 lg:w-[80%] opacity-50 xl:w-[80%]'></div>
    }

    {openModal &&
     <div className='absolute top-32 flex flex-col items-center justify-start w-[90%] z-20 md:w-[80%] lg:w-[70%] xl:w-[65%]'>
             <OrderModal setOpenModal={setOpenModal} modalData={modalData} />  
     </div>
    }

    </div>
  )
}

export default SellerHome
