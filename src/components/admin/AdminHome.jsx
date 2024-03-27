import React, { useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import AdminChart from './AdminChart';
import RecentPurchaseTable from './RecentPurchaseTable';
import { useDispatch } from 'react-redux';
import { RecentPurchaseRequestAction, adminCommodityMetrics, adminMetricsData } from '../../features/admin/AdminActions';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const AdminHome = () => {
    const [loadData, setLoadData] = useState(false);
    const [loadMetrics, setLoadMetrics] = useState(false);
    const [loadRequest, setLoadRequest] = useState(false);
    const [error, setError] = useState(null);
    const [metrics, setMetrics] = useState([]);
    const [commodityMetrics, setCommodityMetrics] = useState([]);
    const [recetPurchaseRequest, setRecetPurchaseRequest] = useState([]);


    const dispatch = useDispatch();


     useEffect(() => {
          dispatch(adminMetricsData(setMetrics, setLoadData, setError))
          dispatch(adminCommodityMetrics(setCommodityMetrics, setLoadMetrics, setError))
          dispatch(RecentPurchaseRequestAction(setRecetPurchaseRequest, setLoadRequest, setError))
     }, [dispatch])



  return (
    <div className='flex flex-col items-start justify-start w-full pb-14 py-6 px-6 mt-24 lg:mt-[100px] xl:mt-[115px] xl:px-14 xl:py-8'>
       <div className='flex flex-col items-start justify-start w-full md:flex-row'>
             <div className='flex flex-col items-start justify-start w-[70%] md:w-[45%] lg:w-[45%] xl:w-[43%]'>
                {!loadData
                 ?<div className='flex flex-col items-start justify-center w-full h-28 border-[1px] border-[#dddddd] shadow-md rounded-md p-3 md:h-32 xl:h-36 xl:pl-5'>
                     <p className='text-[10px] font-medium text-black xl:text-xs'>
                            Overall customer count                   
                     </p>
                     <p className='text-xl font-medium text-black my-3 xl:text-2xl xl:my-4'>
                            {metrics.total_users}
                     </p>
                     <div className='flex items-center justify-start'>
                         <p className='text-[10px] font-medium text-black xl:text-xs'>
                            {metrics.total_buyers} <span className='text-[9px] text-[#667085] xl:text-[10px]'> Off-takers</span>
                         </p>
                         <p className='text-[10px] font-medium text-black pl-3 xl:text-xs'>
                            {metrics.total_sellers} <span className='text-[9px] text-[#667085] xl:text-[10px]'> Suppliers</span>
                         </p>
                     </div>
                  </div>
                 :<div className='w-full h-28 md:h-32 xl:h-36 xl:pl-5'>  
                     {loadData && <Skeleton height="100%" borderRadius="6px" baseColor="#ebebeb" count={1} />}
                   </div>
                  }


                {!loadMetrics
                 ?<div className='flex flex-col items-start justify-center w-full h-28 border-[1px] mt-5 border-[#dddddd] shadow-md rounded-md p-3 md:h-32 xl:h-36 xl:pl-5 xl:mt-7'>
                     <p className='text-[10px] font-medium text-black xl:text-xs'>
                            Overall commodity trades                  
                     </p>
                     <p className='text-xl font-medium text-black my-3 xl:text-2xl xl:my-4'>
                            {commodityMetrics.total_commodity}
                     </p>
                     <div className='flex items-center justify-start'>
                         <p className='text-[10px] font-medium text-black xl:text-xs'>
                            {commodityMetrics.total_completed_commodity} <span className='text-[9px] text-[#667085] xl:text-[10px]'> Completed</span>
                         </p>
                         <p className='text-[10px] font-medium text-black pl-3 xl:text-xs'>
                            {commodityMetrics.total_pending_commodity} <span className='text-[9px] text-[#667085] xl:text-[10px]'> Pending</span>
                         </p>
                     </div>
                 </div>
                 :<div className='w-full h-28 mt-5 md:h-32 xl:h-36 xl:pl-5'>  
                     {loadMetrics && <Skeleton height="100%" borderRadius="6px" baseColor="#ebebeb" count={1} />}
                   </div>
                  }
             </div>


             {!loadData
             ?<div className='flex flex-col items-start justify-start w-full mt-5 bg-white py-4 px-3 border-[1px] border-[#dddddd] shadow-md rounded-md md:mt-0 md:ml-5 lg:ml-6 xl:ml-7'>
                   <p className='text-[10px] text-black font-medium xl:text-xs'>Total users</p>

                   <div className='border-[0.5px] border-[#dddddd] w-full mt-3'></div>

                   <div className='flex items-center justify-end w-full mt-3'>
                        <div className='flex items-center justify-center'>
                            <GoDotFill className='text-[#EBB79A] text-[10px]' />
                            <p className='text-[9px] text-[#667085] font-medium ml-1 xl:text-[10px]'>2022</p>
                        </div>

                        <div className='flex items-center justify-center ml-2 xl:ml-3'>
                            <GoDotFill className='text-[#F79009] text-[10px]' />
                            <p className='text-[9px] text-[#667085] font-medium ml-1 xl:text-[10px]'>2021</p>
                        </div>

                        <div className='flex items-center justify-center ml-2 xl:ml-3'>
                            <GoDotFill className='text-[#D15F1E] text-[10px]' />
                            <p className='text-[9px] text-[#667085] font-medium ml-1 xl:text-[10px]'>2020</p>
                        </div>
                   </div>

                   <div className='flex items-start justify-start w-full mt-2 h-44 md:h-[180px] xl:h-[220px]'>
                      <AdminChart />
                   </div>

              </div>
             :<div className='w-full h-60 mt-5 md:ml-5 md:mt-0 md:h-[275px] xl:h-[310px]'>  
                     {loadData && <Skeleton height="100%" borderRadius="6px" baseColor="#ebebeb" count={1} />}
              </div>
             }
       </div>


       {!loadRequest
       ?<div className='flex items-start justify-center w-full mt-2'>
            <RecentPurchaseTable recetPurchaseRequest={recetPurchaseRequest} />
       </div>
       :<div className='w-full h-80 mt-5 md:h-96 xl:h-[310px] xl:ml-5'>  
              {loadRequest && <Skeleton height="100%" borderRadius="6px" baseColor="#ebebeb" count={1} />}
        </div>
       }

    </div>
  )
}

export default AdminHome
