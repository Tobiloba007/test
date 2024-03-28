import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiSortDescending } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { IoFilterSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFileCopy } from "react-icons/md";
import { useDispatch } from "react-redux";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { broadcastDetails, getBroadcasts, searchBroadcastList } from "../../../features/seller/SellerAction";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const BroadcastResponseTab = ({setBroadcastDetails}) => {
    const [activeRequest, setActiveRequest] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
      const [searchResults, setSearchResults] = useState([]);
      const [search, setSearch] = useState(false);   


      const dispatch = useDispatch();


      const itemsPerPage = 5; // Number of items to display per page
      const totalPages = Math.ceil(activeRequest.length / itemsPerPage); // Calculate total pages
      const [currentPage, setCurrentPage] = useState(1); // Current page state
    
      // Function to handle page changes
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
      // Calculate start and end index of items for current page
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
    
      // Get current page items
      const currentPageItems = activeRequest.slice(startIndex, endIndex);

      const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
      };


    useEffect(()=>{
        dispatch(getBroadcasts(setActiveRequest, setLoading, setError))
        if (searchTerm !== '') {
            dispatch(searchBroadcastList(setSearchResults, searchTerm))
            setSearch(true)
          } else {
            setSearchResults([]);
            setSearch(false)
          }
    },[dispatch, searchTerm])


    const handleBroadcast = (item) => {
        dispatch(broadcastDetails(setBroadcastDetails, setLoading, setError, item))
        console.log(item)
    }


  return (
    <div className='w-full'>
     {loading
      ?<div className='justify-start w-full h-[29.5rem] rounded-lg mt-3 md:h-[27.5rem] 
      lg:h-[27.1rem] xl:h-[27.6rem]'>  
         <Skeleton height="15%" baseColor="#ebebeb" borderRadius="8px" count={1} />
         <Skeleton height="65%" baseColor="#ebebeb" borderRadius="8px" count={1} />
         <Skeleton height="15%" baseColor="#ebebeb" borderRadius="8px" count={1} />
     </div>
    :<div className='relative flex flex-col items-center justify-start w-full h-[29.5rem] border-[1px] border-[#dddddd] rounded-lg mt-3 mb-12 py-2 pb-5 md:h-[27.5rem] 
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
                 <td className='text-[10px] text-[#667085] xl:text-[11px]'>Counter Offer</td>
                 <td className='text-[10px] text-[#667085] xl:text-[11px]'>status</td>
                 <td className='text-[10px] text-[#667085] xl:text-[11px] pr-4'>Date/Time</td>
                 <td className='text-[10px] text-[#667085] xl:text-[11px] pr-4'>Action</td>
             </tr>
             </thead>


             {!search
             ?<tbody className='w-full'>
               {currentPageItems.map((item, index) => {
                return(
                  <tr key={index} onClick={()=>handleBroadcast(item.id)}
                  className='h-14 hover:bg-[#EEEEEE]'>

                      <td className="border-b text-[10px] pl-6 font-medium">{index + 1}</td>

                      <td className="flex items-center justify-start h-14 border-b text-[10px] font-medium pr-8">{item.product_name}</td>

                      <td className="border-b text-[10px] font-medium">
                          <div className='flex items-center justify-start'>
                             <p className=''>{item.reference_number}</p>
                             <MdOutlineFileCopy className='text-[#D0D5DD] ml-2 text-xs' />
                          </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">{item.quantity}</td>

                      <td class="border-b text-[10px] font-medium">
                           <div className="flex items-start">
                               <p className="text-[#8b8c8e] font-normal">{item.currency}</p>
                               <p className="pl-1">{item.amount}</p>
                           </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">
                         <div className='flex items-center justify-center w-[125px] py-[3px] rounded-lg bg-[#FFFAEB]'>
                             <GoDotFill className={`text-[10px] text-[#F79009]`} />
                             <p className={`text-[9px] font-normal  text-[#F79009]`}>
                                  pending verification
                             </p>
                         </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">
                           <div className='flex flex-col items-start justify-start w-full'>
                              <p className='text-[10px] font-medium'>{item.created_at.slice(0, 10)}</p>
                              <p className='text-[#6E7079] text-[9px]'>{item.created_at.slice(12, 16)}</p>
                           </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">
                           <div className='flex flex-row items-center justify-start w-full'>
                              <RiDeleteBin6Line className="text-lg text-[#E86F6F]" />
                           </div>
                      </td>

                  </tr>
                  )
                })}
             </tbody>
             :<tbody className='w-full'>
               {searchResults.map((item, index) => {
                return(
                  <tr key={index} onClick={()=>handleBroadcast(item.id)} className='h-14 hover:bg-[#EEEEEE]'>

                      <td className="border-b text-[10px] pl-6 font-medium">{index + 1}</td>

                      <td className="flex items-center justify-start h-14 border-b text-[10px] font-medium pr-8">{item.product_name}</td>

                      <td className="border-b text-[10px] font-medium">
                          <div className='flex items-center justify-start'>
                             <p className=''>{item.reference_number}</p>
                             <MdOutlineFileCopy className='text-[#D0D5DD] ml-2 text-xs' />
                          </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">{item.quantity}</td>

                      <td class="border-b text-[10px] font-medium">
                            <div className="flex items-start">
                                <p className="text-[#8b8c8e] font-normal">{item.currency}</p>
                                <p className="pl-1">{item.amount}</p>
                            </div>
                      </td>

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
                              <p className='text-[10px] font-medium'>{item.created_at.slice(0, 10)}</p>
                              <p className='text-[#6E7079] text-[9px]'>{item.created_at.slice(12, 16)}</p>
                           </div>
                      </td>

                      <td class="border-b text-[10px] font-medium">
                           <div className='flex flex-row items-center justify-start w-full'>
                              <RiDeleteBin6Line className="text-lg text-[#E86F6F]" />
                           </div>
                      </td>

                  </tr>
                  )
                })}
             </tbody>
             }
         </table>
         </div>

               {/* PAGINATION */}
               <div className='absolute bottom-5 flex flex-row iems-center justify-between w-full px-5 mt-3'>
                  <div onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
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
                    </div> 

               </div>

        </div>
      }
      </div>
  )
}

export default BroadcastResponseTab
