import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiSortDescending } from "react-icons/hi";
import { IoFilterSharp } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFileCopy } from "react-icons/md";




const Active = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleInputChange = (e) => [
        setSearchTerm(e.target.value)
    ]



  return (
    <div className='relative flex flex-col items-center justify-start w-full h-[29.5rem] border-[1px] border-[#dddddd] rounded-lg mt-3 mb-12 py-2 pb-5 md:h-[27.5rem] 
                    lg:h-[27.1rem] xl:h-[27.6rem]'>
               <div className='flex flex-col items-center w-full bg-[#F9FAFB] px-3 py-2 md:flex-row md:justify-between'>
                   <div className='relative w-full'>
                       <input 
                       className='h-9 w-full z-20 rounded-md border-[1px] border-[#DDE1E6] pl-9 text-xs font-light outline-[#2196F3] md:w-[80%] lg:h-8 xl:h-10 xl:w-[65%] xl:text-sm'
                       placeholder='Search'
                       value={searchTerm}
                       onChange={handleInputChange}
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

               <div className='w-full mt-4 overflow-x-auto no-scrollbar'>
               <table className='w-[800px] px-5 md:w-full'>
             <thead className='border-separate border-b border-slate-[#dddddd]'>
             <tr tr className='w-full mb-1'>
                 <td className='text-[10px] text-[#667085] xl:text-[11px] pl-4'>S/N</td>
                 <td className='text-[10px] text-[#667085] xl:text-[11px]'>Commodity</td>
                 <td className='text-[10px] text-[#667085] xl:text-[11px]'>Reference Number</td>
                 <td className='text-[10px] text-[#667085] xl:text-[11px]'>Quantity(Metric tons)</td>
                 <td className='text-[10px] text-[#667085] xl:text-[11px]'>Price Per Ton</td>
                 <td className='text-[10px] text-[#667085] xl:text-[11px]'>Progress</td>
                 <td className='text-[10px] text-[#667085] xl:text-[11px] pr-4'>Date/Time</td>
                 <td className='text-[10px] text-[#667085] xl:text-[11px] pr-4'>Action</td>
             </tr>
             </thead>


             <tbody className='w-full'>
                  <tr className='h-14'>

                      <td class="border-b text-[10px] pl-6 font-medium">1</td>

                      <td class="flex items-center justify-start h-14 border-b text-[10px] font-medium pr-8">Cobalt</td>

                      <td class="border-b text-[10px] font-medium">
                          <div className='flex items-center justify-start'>
                             <p className=''>AD33342222</p>
                             <MdOutlineFileCopy className='text-[#D0D5DD] ml-2 text-xs' />
                          </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">13,000</td>

                      <td class="border-b text-[10px] font-medium">$ 220.23</td>

                      <td class="border-b text-[10px] font-medium">
                           <div className="flex flex-row items-center justify-start">
                                <div className="flex items-center justify-start h-[5px] bg-[#F2F4F7] rounded-xl w-[85px]">
                                      <div className={`bg-[#2196F3] w-[60%] h-full rounded-full`}></div>
                                </div>
                                <p className="text-[10px] ml-2">60%</p>
                           </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">
                           <div className='flex flex-col items-start justify-start w-full'>
                              <p className='text-[10px] font-medium'>03/09/23</p>
                              <p className='text-[#6E7079] text-[9px]'>12:45pm</p>
                           </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">
                           <div className='flex flex-row items-center justify-start w-full'>
                              <IoEyeOutline className="text-lg" />
                              <LuPencil className="text-lg mx-4" />
                              <RiDeleteBin6Line className="text-lg text-[#E86F6F]" />
                           </div>
                      </td>

                  </tr>
             </tbody>
         </table>
         </div>

               {/* PAGINATION */}
               <div className='absolute bottom-5 flex flex-row iems-center justify-between w-full px-5 mt-3'>
                  {/*   <div onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
                    className='flex flex-row items-center border-[#dddddd] border-[1px] rounded-md h-7 px-2'>
                         <IoIosArrowRoundBack className='text-[#344054] text-lg' />
                         <p className='text-[#344054] text-[10px] ml-1 font-medium'>Previous</p>
                    </div>

                    <div className='flex flex-row items-center justify-center'>
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index + 1} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1}
                        className={`flex items-center justify-center cursor-pointer bg-[${currentPage === index + 1 ? '#F3D7C7' : '#FFFFFF'}] h-6 w-6 rounded-md mx-1 
                                    text-[${currentPage === index + 1 ? '#2196F3' : '#667085'}] text-[10px] font-medium pt-[2px]`}
                        >
                          {index + 1}
                        </button>
                       ))}

                    </div>

                    <div onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
                    className='flex flex-row items-center border-[#dddddd] border-[1px] rounded-md h-7 px-2'>
                         <p className='text-[#344054] text-[10px] font-medium'>Next</p>
                         <IoIosArrowRoundForward className='text-[#344054] text-lg ml-1' />
                    </div>  */}

               </div>

        </div>
  )
}

export default Active
