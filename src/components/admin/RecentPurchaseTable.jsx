import React, { useState } from 'react'
import metal1 from '../../assets/images/Metal1.svg'
import metal2 from '../../assets/images/Metal2.svg'
import metal3 from '../../assets/images/Metal3.svg'
import { MdOutlineFileCopy } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";




const RecentPurchaseTable = () => {
    const openData = [
        {
          id: 1,
          sn: 1,
          image: metal1,
          name: 'Cobalt',
          quantity: '3',
          Purchase_id: 'AD33342222',
          Tracking_no: '23555332-119',
          time: '22 Sept 2023 - 01:25 pm',
        },
        {
          id: 2,
          sn: 2,
          image: metal2,
          name: 'Lead',
          quantity: '5',
          Purchase_id: 'AD33342222',
          Tracking_no: '23555332-119',
          status: 'Pending',
          time: '22 Sept 2023 - 01:25 pm',
        },
        {
          id: 3,
          sn: 3,
          image: metal3,
          name: 'Lead',
          quantity: '2',
          Purchase_id: 'AD33342222',
          Tracking_no: '23555332-119',
          status: 'Pending',
          time: '22 Sept 2023 - 01:25 pm',
        },
        {
          id: 4,
          sn: 4,
          image: metal1,
          name: 'Aluminuim',
          quantity: '6',
          Purchase_id: 'AD33342222',
          Tracking_no: '23555332-119',
          status: 'Pending',
          time: '22 Sept 2023 - 01:25 pm',
        },
        {
          id: 5,
          sn: 5,
          image: metal2,
          name: 'Zinc',
          quantity: '6',
          Purchase_id: 'AD33342222',
          Tracking_no: '23555332-119',
          status: 'Pending',
          time: '22 Sept 2023 - 01:25 pm',
        },
      ]

      const [dropdown, setDropdown] = useState(null);

      const handleDropdown = (item) => {
        setDropdown((prevState) => (prevState === item ? null : item));
      }

  return (
    <div className='flex flex-col w-full'>
         <div className='flex flex-col items-start justify-start w-full mt-10 xl:mt-12'>
              <p className='text-base font-medium text-[#101828] xl:text-xl '>
                  Recent Purchase Requests
              </p>
         </div>


         {/*  TABLE */}
         <div className='relative flex flex-col items-center justify-start w-full overflow-x-auto border-[1px] border-[#dddddd] rounded-lg mt-5 py-2 pb-1 md:w-full'>

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
                  {openData.map((item) => {
                    return(
                  <tr key={item.id} className='h-14'>

                      <td class="border-b text-[10px] pl-6 font-medium">{item.sn}</td>

                      <td class="flex items-center justify-start h-14 border-b text-[10px] font-medium pr-14">
                           <img className='w-9 rounded-lg'
                           src={item.image} alt='metal' />
                           <p className='pl-4'>{item.name}</p>
                      </td>

                      <td class="border-b text-[10px] font-medium">{item.quantity}</td>

                      <td class="border-b text-[10px] font-medium">
                          <div className='flex items-center justify-start'>
                             <p className=''>{item.Purchase_id}</p>
                             <MdOutlineFileCopy className='text-[#D0D5DD] ml-2 text-xs' />
                          </div>
                      </td>

                      <td class="border-b text-[9px] font-medium">
                          <div className='flex items-center justify-start'>
                             <p className=''>{item.Tracking_no}</p>
                             <MdOutlineFileCopy className='text-[#D0D5DD] ml-2 text-xs' />
                          </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">
                           <div className='flex flex-wrap items-center justify-start w-full'>
                              <p className='text-[#6E7079] text-[9px]'>{item.time}</p>
                           </div>
                      </td>


                      <td class="relative border-b text-[10px] font-medium w-24 mr-4">
                           <div onClick={()=>handleDropdown(item.id)} 
                           className='flex justify-center items-center h-7 px-1 w-20 border-[#D0D5DD] border-[1px] bg-[#FFFFFF] rounded-full'>
                                  <p className='text-[9px] text-light text-[#667085] pl-1'>Pending</p>
                                  {dropdown === item.id
                                  ?<MdKeyboardArrowUp className='text-[#000000] ml-1 text-sm' />
                                  :<MdKeyboardArrowDown className='text-[#000000] ml-1 text-sm' />
                                  }
                           </div>

                           {dropdown === item.id &&
                           <div className='absolute mt-1 right-1 flex flex-col items-start justify-start w-full rounded-md shadow-lg z-50 bg-white border-[1px] border-[#D0D5DD] py-3'>
                                 <p onClick={()=>setDropdown(false)}
                                 className='text-[#000000] text-[10px] text-center px-2'>Completed</p>

                                 <div className='border-[1px] border-[#D0D5DD] w-full my-2'></div>
                                 
                                 <p onClick={()=>setDropdown(false)}
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
