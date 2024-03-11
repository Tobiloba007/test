import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { HiSortDescending } from "react-icons/hi";
import { IoFilterSharp } from "react-icons/io5";
import metal1 from '../../assets/images/Metal1.svg'
import metal2 from '../../assets/images/Metal2.svg'
import metal3 from '../../assets/images/Metal3.svg'
import { MdOutlineFileCopy } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";




const PurchaseRequest = () => {
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
      const [page, setPage] = useState(1)


      const handleDropdown = (item) => {
        setDropdown((prevState) => (prevState === item ? null : item));
      }

      const handlePagination = (item) => {
          setPage(item)
          console.log(page);
      }

  return (
    <div className='flex flex-col items-center justify-start w-full border-[1px] border-[#dddddd] rounded-lg mt-10 py-2 pb-5'>
               <div className='flex flex-col items-center w-full bg-[#F9FAFB] px-3 py-2 md:flex-row md:justify-between'>
                   <div className='relative w-full'>
                       <input 
                       className='h-9 w-full z-20 rounded-md border-[1px] border-[#DDE1E6] pl-9 text-xs font-light outline-[#2196F3] md:w-[80%] lg:h-8 xl:h-10 xl:w-[65%] xl:text-sm'
                       placeholder='Search'
                       />
                       <CiSearch className='absolute top-[11px] left-3 text-base text-[#818181] xl:text-xl' />
                   </div>

                   <div className='flex flex-row items-center justify-between w-full mt-2 md:justify-end md:mt-0'>
                       <div className='flex flex-row items-center justify-center bg-white border-[#dddddd] border-[1px] rounded px-2 py-1 md:py-[5px]
                        md:rounded-md md:px-4 xl:py-2'>
                            <HiSortDescending className='text-sm md:text-base' />
                            <p className='text-black text-[10px] font-normal ml-1 xl:text-xs'>
                                Sort
                            </p>
                       </div>

                       <div className='flex flex-row items-center justify-center bg-white border-[#dddddd] border-[1px] rounded px-2 py-1 md:py-[5px] 
                       md:rounded-md md:px-4 md:ml-3 xl:py-2'>
                            <IoFilterSharp className='text-sm md:text-base' />
                            <p className='text-black text-[10px] font-medium ml-2 xl:text-xs'>
                                Filters
                            </p>
                       </div>
                   </div>

               </div>

               <div className='w-full mt-4 overflow-x-auto'>
               <table className='w-[800px] px-5 md:w-full'>
             <thead className='border-separate border-b border-slate-[#dddddd]'>
             <tr tr className='w-full mb-1'>
                 <td className='text-[9px] text-[#667085] xl:text-[10px] pl-4'>S/N</td>
                 <td className='text-[9px] text-[#667085] xl:text-[10px]'>Commodity</td>
                 <td className='text-[9px] text-[#667085] xl:text-[10px]'>Quantity(Metric tons)</td>
                 <td className='text-[9px] text-[#667085] xl:text-[10px]'>Purchase ID</td>
                 <td className='text-[9px] text-[#667085] xl:text-[10px]'>Tracking Number</td>
                 <td className='text-[9px] text-[#667085] xl:text-[10px]'>Date/Time</td>
                 <td className='text-[9px] text-[#667085] xl:text-[10px] pr-4'>Status</td>
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

               {/* PAGINATION */}
               <div className='flex flex-row iems-center justify-between w-full px-5 mt-3'>
                    <div className='flex flex-row items-center border-[#dddddd] border-[1px] rounded-md h-7 px-2'>
                         <IoIosArrowRoundBack className='text-[#344054] text-lg' />
                         <p className='text-[#344054] text-[10px] ml-1 font-medium'>Previous</p>
                    </div>

                    <div className='flex flex-row items-center justify-center'>
                         <div onClick={()=>handlePagination(1)}
                         className={`flex items-center justify-center cursor-pointer ${page === 1 ? 'bg-[#D3EFFD]' : 'bg-[#FFFFFF]' } h-6 w-6 rounded-md mx-1`}>
                             <p className={` ${page === 1 ? 'text-[#2196F3]' : 'text-[#667085'} text-[10px] font-medium pt-[2px]`}>1</p>
                         </div>
                         <div onClick={()=>handlePagination(2)}
                         className={`flex items-center justify-center cursor-pointer ${page === 2 ? 'bg-[#D3EFFD]' : 'bg-[#FFFFFF]' } h-6 w-6 rounded-md mx-1`}>
                             <p className={` ${page === 2 ? 'text-[#2196F3]' : 'text-[#667085'} text-[10px] font-medium pt-[2px]`}>2</p>
                         </div>
                         <div onClick={()=>handlePagination(3)}
                         className={`flex items-center justify-center cursor-pointer ${page === 3 ? 'bg-[#D3EFFD]' : 'bg-[#FFFFFF]' } h-6 w-6 rounded-md mx-1`}>
                             <p className={` ${page === 3 ? 'text-[#2196F3]' : 'text-[#667085'} text-[10px] font-medium pt-[2px]`}>3</p>
                         </div>
                    </div>

                    <div className='flex flex-row items-center border-[#dddddd] border-[1px] rounded-md h-7 px-2'>
                         <p className='text-[#344054] text-[10px] font-medium'>Next</p>
                         <IoIosArrowRoundForward className='text-[#344054] text-lg ml-1' />
                    </div>

               </div>

        </div>
  )
}

export default PurchaseRequest
