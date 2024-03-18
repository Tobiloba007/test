import React, { useState } from 'react'
import metal3 from '../../assets/images/Metal3.svg'
import { MdOutlineFileCopy } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { updateCommodityStatus } from '../../features/admin/AdminActions';




const RecentPurchaseTable = ({recetPurchaseRequest}) => {
      const [dropdown, setDropdown] = useState(null);
      const [loading, setLoading] = useState(false);


      const dispatch = useDispatch();

      const handleDropdown = (item) => {
        setDropdown((prevState) => (prevState === item ? null : item));
      }

      const data = recetPurchaseRequest.slice(0, 5);


      const handleStatusChange = async (itemId, newStatus) => {
        setDropdown(false)
        dispatch(updateCommodityStatus(newStatus, itemId, setLoading))
      };


  return (
    <div className='flex flex-col w-full'>
         <div className='flex flex-col items-start justify-start w-full mt-10 xl:mt-12'>
              <p className='text-base font-medium text-[#101828] xl:text-xl '>
                  Recent Purchase Requests
              </p>
         </div>


         {/*  TABLE */}
         <div className='relative flex flex-col items-center justify-start w-full overflow-x-auto no-scrollbar border-[1px] border-[#dddddd] rounded-lg mt-5 py-2 pb-1 md:w-full'>

         <div className='w-full mt-4'>
         <table className='w-[800px] px-5 md:w-full'>
             <thead className='border-separate border-b border-slate-[#dddddd]'>
             <tr tr className='w-full mb-1'>
                 <td className='text-[11px] text-[#667085] pl-4'>S/N</td>
                 <td className='text-[11px] text-[#667085]'>Commodity</td>
                 <td className='text-[11px] text-[#667085]'>Quantity(Metric tons)</td>
                 <td className='text-[11px] text-[#667085]'>Purchase ID</td>
                 <td className='text-[11px] text-[#667085]'>Tracking Number</td>
                 <td className='text-[11px] text-[#667085]'>Date/Time</td>
                 <td className='text-[11px] text-[#667085] pr-4'>Status</td>
             </tr>
             </thead>

             <tbody className='w-full'>
                  {data.map((item, index) => {
                    return(
                  <tr key={item.id} className='h-14'>

                      <td class="border-b text-[10px] pl-6 font-medium">{index + 1}</td>

                      <td class="flex items-center justify-start h-14 border-b text-[10px] font-medium pr-14">
                           <img className='w-9 rounded-lg'
                           src={metal3} alt='metal' />
                           <p className='pl-4'>{item.name}</p>
                      </td>

                      <td class="border-b text-[10px] font-medium">{item.quantity}</td>

                      <td class="border-b text-[10px] font-medium">
                          <div className='flex items-center justify-start'>
                             <p className=''>{item.purchase_id}</p>
                             <MdOutlineFileCopy className='text-[#D0D5DD] ml-2 text-xs' />
                          </div>
                      </td>

                      <td class="border-b text-[9px] font-medium">
                          <div className='flex items-center justify-start'>
                             <p className=''>{item.tracking_number == null ? item.tracking_status : item.tracking_number}</p>
                             <MdOutlineFileCopy className='text-[#D0D5DD] ml-2 text-xs' />
                          </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">
                           <div className='flex flex-col items-start justify-start w-full'>
                              <p className='text-[#6E7079] text-[9px]'>{item.created_at.slice(0, 10)}</p>
                              <p className='text-[#6E7079] text-[9px]'>{item.created_at.slice(12, 16)}</p>
                           </div>
                      </td>


                      <td class="relative border-b text-[10px] font-medium w-24">
                           <div onClick={()=>handleDropdown(item.id)} 
                           className='flex justify-center items-center h-7 px-2 border-[#D0D5DD] border-[1px] bg-[#FFFFFF] rounded-full'>
                                  <p className='text-[9px] text-light text-[#667085] pl-1'>{item.status}</p>
                                  {dropdown === item.id
                                  ?<MdKeyboardArrowUp className='text-[#000000] ml-1 text-sm' />
                                  :<MdKeyboardArrowDown className='text-[#000000] ml-1 text-sm' />
                                  }
                           </div>

                           {dropdown === item.id &&
                           <div className='absolute mt-1 right-1 flex flex-col items-start justify-start w-full rounded-md shadow-lg z-50 bg-white border-[1px] border-[#D0D5DD] py-1'>
                                  <p onClick={()=>handleStatusChange(item.id, 'completed')}
                                  className='text-[#000000] text-[10px] text-center px-2'>Completed</p>

                                 <div className='border-[1px] border-[#D0D5DD] w-full my-2'></div>
                                 
                                 <p onClick={()=>handleStatusChange(item.id, 'In-transit')}
                                 className='text-[#000000] text-[10px] text-center px-2'>In-transit</p>
                           </div>
                           }
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

export default RecentPurchaseTable
