import React, { useEffect, useState } from 'react'
import { TfiClose } from "react-icons/tfi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { createOfferRequest } from '../../../features/admin/AdminActions';



const SellerBroadcastOffer = ({setOpenModal, data, setBroadcastDetails}) => {
    const [metricTons, setMetricTons] = useState('')
    const [pricePerTon, setPricePerTon] = useState('')
    const [location, setLocation] = useState('')
    const [currency, setCurrency] = useState('USD')
    const [dropdown, setDropDown] = useState(false)
    const [progressToggle, setProgressToggle] = useState(false);
    const [loading, setLoading] = useState(false);


    const currencyLists = ['USD', 'NGN', 'EUR']


    const values = {'currency': currency, 'quantity': metricTons, 'counter_offer': pricePerTon, 'location': location, 'broadcast_id': data.id}

    const handleCurrency = (item) => {
        setCurrency(item)
        setDropDown(false)
    }

    const dispatch = useDispatch();

    const isButtonDisabled = metricTons === '' || pricePerTon === '' || location === '' || progressToggle === false

    const handleSubmit = () => {
        dispatch(createOfferRequest(values, setOpenModal, setLoading, setBroadcastDetails))
    }


  return (
    <div className='fixed flex flex-col items-center justify-start h-[26rem] w-[85%] mt-36 px-4 py-6 z-50 bg-white rounded-lg overflow-y-auto no-scrollbar md:w-[50%]
                    lg:w-[40%] lg:h-[28rem] lg:mt-28 xl:h-[29rem] xl:w-[30%] xl:mt-40'>
          <div className='flex items-start justify-between w-full'>
               <div className='flex flex-col items-start w-[70%]'>
                    <p className='text-base font-medium text-black'>
                        Submit your offer
                    </p>
                    <p className='text-[10px] pt-1 text-[#667085]'>
                          Specify the number of <span className='font-semibold'>cobalt</span> you can provide
                    </p>
               </div>

               <div onClick={()=>setOpenModal(false)}>
                    <TfiClose />
               </div>
          </div>

          <div className='flex flex-col items-start w-full mt-2'>
          {/*  METRIC TONS */}
                <div className='flex flex-col items-start justify-start w-full mt-2'>
                     <p className='text-[10px] font-medium mt-2 text-black'>
                           Metric tons you can provide
                     </p>
                     <input className='w-full text-[10px] text-black border-[1px] border-[#D0D5DD] h-9 rounded-md pl-4 mt-1 outline-[#2196F3]'
                     placeholder='e.g.: 12,000 metric tons'
                     onChange={(e)=>setMetricTons(e.target.value)}
                     value={metricTons}
                      />
                      <p className='text-[9px] pt-1 text-[#667085]'>
                          0/<span className='font-medium'>{data.amount}</span> Metric tons currently available
                    </p>
                </div>

                        {/*  PRICE PER TONS */}
                <div className='flex flex-col items-start justify-start w-full mt-5'>
                     <p className='text-[10px] font-medium mt-2 text-black'>
                           Price per ton
                     </p>
                     <div className='relative w-full'>
                         <input className='w-full text-[10px] text-black border-[1px] border-[#D0D5DD] h-9 rounded-md mt-1 outline-[#2196F3] pl-14'
                         placeholder='0.00'
                         onChange={(e)=>setPricePerTon(e.target.value)}
                         value={pricePerTon}
                          />
                          <div className='absolute top-[10px] left-2'>
                               <div onClick={()=>setDropDown(!dropdown)}
                               className='flex items-center justify-start'>
                                   <p className='text-xs font-medium pt-1 text-[#667085]'>
                                         {currency}
                                   </p>
                                   {dropdown
                                   ?<IoIosArrowUp className='text-sm ml-1 mt-1' />
                                   :<IoIosArrowDown className='text-sm ml-1 mt-1' />
                                   }
                               </div>
                          </div>
                          {
                            dropdown &&
                          <div className='absolute mt-1 left-0 flex flex-col items-start justify-start w-[21%] bg-white border-[1px] border-[#D0D5DD] rounded-md px-3 py-2'>
                                {currencyLists.map((item) => {
                                    return(
                                        <p onClick={()=>handleCurrency(item)}
                                        key={item} className='text-[10px] text-[#000000] py-2'>
                                             {item}
                                        </p>
                                    )
                                })}
                          </div>
                           }
                     </div>

                      <p className='text-[9px] pt-1 text-[#667085]'>
                           One metric ton is currently valuated at: <span className='font-medium'>$220</span>. You can counter offer here.
                    </p>
                </div>

                 {/*  LOCATION */}
                 <div className='flex flex-col items-start justify-start w-full mt-2'>
                     <p className='text-[10px] font-medium mt-2 text-black'>
                           Location
                     </p>
                     <input className='w-full text-[10px] text-black border-[1px] border-[#D0D5DD] h-9 rounded-md pl-4 mt-1 outline-[#2196F3]'
                     placeholder='Address'
                     onChange={(e)=>setLocation(e.target.value)}
                     value={location}
                      />
                </div>

                <div className='flex items-start justify-start w-full mt-8'>
                      <div onClick={()=>setProgressToggle(!progressToggle)}
                      className={`flex items-center justify-start h-[20px] w-9 rounded-xl bg-[#E3E5E5] ${progressToggle && 'justify-end'} xl:w-10`}>
                           <div className={`flex items-start justify-center h-4 w-4 rounded-full bg-[#323F4B]`}></div>
                      </div>

                      <div className='flex-1 ml-6'>
                          <p className='text-[8px] text-[#7B8794]'>
                                   By agreeing to the terms and conditions of OAT, you confirm that you possess the specified quantity and type of commodity you're proposing to offer on our platform. You understand and accept your responsibilities, including compliance with all laws and regulations, truthful representation of your offered commodity, and adherence to our trading policies. Furthermore, you agree to indemnify OAT and its affiliates from any claims, losses, or damages arising from your use of our service or any breach of our terms of agreement.
                          </p>
                      </div>
                </div>


                <div className='flex items-center justify-end w-full mt-8'>
                         <button onClick={()=>setOpenModal(false)}
                         className='text-[10px] text-black font-medium text-center bg-white border-[#D0D5DD] border-[1px] h-8 rounded-md px-4'>
                               Cancel
                         </button>

                         <button onClick={handleSubmit}
                         disabled={isButtonDisabled}
                         className={`flex items-center justify-center text-[10px] text-white font-medium bg-[#007CD7]  border-[1px] h-8 rounded-md px-4 ml-4 ${isButtonDisabled && 'bg-[#bddef6]'}`}>
                            { loading
                               ?<div className="relative flex items-center justify-center w-6 h-6 border-4 border-gray-500 border-solid rounded-full">
                                  <div className="absolute w-6 h-6 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                               </div>
                               : 'Submit offer'
                              }
                         </button>
                </div>
          </div>

    </div>
  )
}

export default SellerBroadcastOffer
