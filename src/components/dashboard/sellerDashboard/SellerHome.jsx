import React, { useEffect, useState } from 'react'
import metal2 from '../../../assets/images/Metal2.svg'
import { GoDotFill } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { sellerRecentPurchaseRequest } from '../../../features/seller/SellerAction';



const SellerHome = () => {

      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);
      const [recetPurchaseRequest, setRecetPurchaseRequest] = useState([]);


    const dispatch = useDispatch();


     useEffect(() => {
          dispatch(sellerRecentPurchaseRequest(setRecetPurchaseRequest, setLoading, setError))
     }, [dispatch])

     const data = recetPurchaseRequest.slice(0, 5)


  return (
    <div className='flex flex-col items-start justify-start w-full py-6  px-6 mt-28 lg:mt-0 lg:pt-[120px] xl:pt-[150px] xl:px-8 xl:py-8'>
         <div className='flex flex-row items-center justify-between w-full md:justify-start'>
             <div className='flex flex-col items-start justify-center w-[48%] h-24 border-[1px] border-[#dddddd] shadow-md rounded-md p-3 md:w-[170px] xl:w-[220px] xl:h-28 xl:pl-5'>
                  <p className='text-[10px] font-medium text-black xl:text-xs'>
                         Purchase orders fulfilled                   
                  </p>
                  <p className='text-xl font-medium text-black my-2 xl:text-2xl xl:my-3'>
                         134
                  </p>
             </div>

             <div className='flex flex-col items-start justify-center w-[48%] h-24 border-[1px] border-[#dddddd] shadow-md rounded-md p-3 md:w-[170px] md:ml-4 xl:w-[220px] xl:h-28 
             xl:pl-5 xl:ml-5'>
                  <p className='text-[10px] font-medium text-black xl:text-xs'>
                        Ongoing purchase orders
                  </p>
                  <p className='text-xl font-medium text-black my-2 xl:text-2xl xl:my-3'>
                         2
                  </p>
             </div>
         </div>


         <div className='flex flex-col items-start justify-start w-full mt-12 xl:mt-14'>
              <p className='text-base font-medium text-[#101828] xl:text-xl '>
                  Recent Purchase Requests
              </p>
         </div>


         {/*  TABLE */}
         <div className='flex flex-col items-center justify-start w-full border-[1px] h-[340px] overflow-x-auto no-scrollbar border-[#dddddd] rounded-lg mt-5 
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
                           <div className='flex justify-center items-center h-7 w-[72px] border-[#D0D5DD] border-[1px] bg-[#F2F4F7] rounded-md'>
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

    </div>
  )
}

export default SellerHome
