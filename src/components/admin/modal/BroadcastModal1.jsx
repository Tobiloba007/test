import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { VscClose } from "react-icons/vsc";
import { sendBroadcastRequest } from '../../../features/admin/AdminActions';
import { useDispatch } from 'react-redux';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";





const BroadcastModal1 = ({setBroadcastModal, setBroadcastModal2, data}) => {
    const slideInVariants = {
        hidden: { y: '100%' },
        visible: { y: 0 },
      };

      const progressBar = [
        {
            id: 1,
            no: 1,
            status: 'Broadcast Details',
        },
        {
            id: 2,
            no: 2,
            status: 'Broadcast Settings',
            line: 'active'
        },
        {
            id: 3,
            no: 3,
            status: 'Preview',
            line: 'active'
        },
      ]


      const recipient = [
        {
            id: 1,
            title: 'All Miners/Sellers',
        },
        {
            id: 2,
            title: 'Select Users only ',
        },
      ]




      const [radio, setRadio] = useState(null);
      const [selectedInitialDate, setSelectedInitialDate] = useState('');
      const [selectedFinalDate, setSelectedFinalDate] = useState('');
      const [isChecked, setIsChecked] = useState(false);
      const [requestToggle, setRequestToggle] = useState(false);
      const [progressToggle, setProgressToggle] = useState(false);
      const [percentage, setPercentage] = useState('');
      const [currency, setCurrency] = useState('USD')
      const [dropdown, setDropDown] = useState(false)
      const [pricePerTon, setPricePerTon] = useState('')
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(false);


      const handleRadio = (item) => {
        setRadio(item)
      }

      const handleInitialDateChange = (event) => {
        setSelectedInitialDate(event.target.value);
      };

      const handleFinalDateChange = (event) => {
        setSelectedFinalDate(event.target.value);
      };

      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

      const handleRequestToggle = () => {
        setRequestToggle(!requestToggle)
      }

      const handleProgressToggle = () => {
        setProgressToggle(!progressToggle)
      }

      const handlePercentage = (event) => {
        setPercentage(event.target.value)
      }

      const dispatch = useDispatch();

      const BroadcastValues = {'broadcast_start_time': selectedInitialDate, 'broadcast_end_time': selectedFinalDate, 'is_urgent': requestToggle, 'purity': percentage, 'currency': currency, 'amount': pricePerTon}

      const values = {...BroadcastValues, 'purchase_request_id': data.id}

      const noTimeLimit = percentage === '' || pricePerTon === ''
      const timeLimit = selectedInitialDate === '' || selectedFinalDate === '' || percentage === '' || pricePerTon === ''

      const isButtonDisabled = isChecked ? noTimeLimit : timeLimit


      const currencyLists = ['USD', 'GPB', 'NGN', 'EUR']

      const handleCurrency = (item) => {
        setCurrency(item)
        setDropDown(false)
    }


      const handleProceed = () => {
        dispatch(sendBroadcastRequest(values, setError, setLoading, setBroadcastModal2))
        console.log(values);
       }





  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.75 }}
      className='flex flex-col items-center justify-start w-full h-full bg-white rounded-lg shadow-gray-900 pb-5 xl:pb-10'>
            {/* HEADER */}
         <div className='flex items-start justify-between w-full px-4 pt-4 md:px-8 lg:pt-6 xl:px-10 xl:pt-8'>
             <div className='flex flex-col items-start justify-start md:flex-row md:items-center'>
                 <p className='text-sm text-[#101828] font-semibold lg:text-base xl:text-lg'>
                     Send Broadcast
                 </p>
             </div>

             <div onClick={()=>setBroadcastModal(false)}
              className='flex items-start justify-end'>
                   <VscClose className='text-xl xl:text-2xl' />
             </div>
         </div>


         {/* LINE */}
         <div className='w-full border-[1px] border-[#eeeeee] mt-3 lg:mt-4 xl:mt-6'></div>


           {/* PROGRESS */}
         <div className='flex flex-col items-center justify-start w-[300px] pt-8 px-4 md:pt-10 md:px-8 md:w-[650px] lg:w-[670px] xl:w-[830px]'>
         <div className='flex items-start justify-center w-full'>

                {progressBar.map((item, index) => {
                    return(
                <div key={index} className='flex items-center'>
                      {item.line && <div className={`border-[1px] border-[#D0D5DD] w-20 md:w-[180px] xl:w-[250px] ${item.no === 2 && 'border-[#48adff]' }`}></div>}
                      <div className='flex flex-col items-center justify-start'>
                           <div className={`flex items-center justify-center bg-[#FFFFFF] rounded-full h-7 w-7 border-[1px] border-[#D0D5DD] 
                                ${item.no === 1 | item.no === 2 && 'bg-blue-500 border-none'} lg:h-8 lg:w-8 xl:h-11 xl:w-11`}>
                              <p className={`text-xs text-[#667085] font-medium ${item.no === 1 | item.no === 2 && 'text-white'} xl:text-sm`}>{item.no}</p>
                           </div>
                           {/*<p className='text-[10px] text-[#2196F3] font-medium pt-2'>{item.status}</p>*/}
                      </div>
                </div>
                )
                })}

         </div>

         <div className='flex items-start justify-between w-full mr-3 md:w-[470px] xl:w-[655px]'>
                <p className='text-[10px] text-[#2196F3] font-medium pt-2 w-20 text-start md:w-full xl:text-sm'>Broadcast Details</p>
                <p className='text-[10px] text-[#2196F3] font-medium pt-2 w-20 text-center md:w-full xl:text-sm'>Recipients & Settings</p>
                <p className='text-[10px] text-[#667085] font-medium pt-2 w-20 text-end md:w-full xl:text-sm'>Preview</p>
         </div>
         </div>


         {/* RECIPIENTS */}
         {/*<div className='flex flex-col items-start justify-start w-full mt-8 px-4 md:px-8 xl:mt-10'>
              <p className='text-[11px] text-black font-medium mb-3 xl:text-[13px]'>
                  Recipients
              </p>

              {recipient.map((item) => {
                return(
              <div key={item.title} onClick={()=>handleRadio(item.title)}
              className='flex items-center justify-start mb-3'>
                     <div className={`w-3 h-3 border-[1px] border-[#D0D5DD] rounded-full ${radio === item.title && 'bg-[#2196F3]'} xl:h-4 xl:w-4`}></div>
                     <p className='text-[10px] text-[#667085] font-medium ml-2 xl:text-xs'>
                            {item.title}
                     </p>
              </div>
              )
            })}
         </div>*/}



         {/* BROADCASTS */}
         <div className='flex flex-col items-start justify-start w-full mt-5 px-4 md:px-8 md:mt-9 xl:mt-12'>
              <p className='text-[11px] text-black font-medium mb-3 xl:text-[13px]'>
                  Broadcast Up-time
              </p>

              {
                !isChecked &&
              <div className='flex flex-wrap items-center justify-between w-full'>
                    <div className='flex flex-col items-start justify-start w-full mb-3 md:w-[48%] md:mb-0'>
                       <p className='text-[10px] text-[#7B8794] font-medium mb-2 xl:text-xs'>
                            From
                        </p>
                        <div className='relative w-full'>
                             <input 
                             className='border-[1px] border-[#D0D5DD] rounded-md h-9 px-4 text-[10px] w-full outline-[#2196F3] xl:text-xs xl:h-10'
                             placeholder='January 2024'
                             type="date"
                             value={selectedInitialDate} 
                             onChange={handleInitialDateChange}
                             />
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-start w-full md:w-[48%]'>
                       <p className='text-[10px] text-[#7B8794] font-medium mb-2 xl:text-xs'>
                            To
                        </p>
                        <div className='relative w-full'>
                             <input 
                             className='border-[1px] border-[#D0D5DD] rounded-md h-9 px-4 text-[10px] w-full outline-[#2196F3] xl:text-xs xl:h-10'
                             placeholder='January 2024'
                             type="date"
                             value={selectedFinalDate} 
                             onChange={handleFinalDateChange}
                             />
                        </div>
                    </div>
                    
              </div>
              }

              <div className='flex items-center justify-start w-full mt-3 xl:mt-4'>
                    <input className='xl:h-4 xl:w-4'
                     type="checkbox"
                     checked={isChecked} 
                     onChange={handleCheckboxChange} 
                    />
                    <p className='text-[10px] text-[#667085] ml-2 xl:text-xs'>
                          No time Limit
                    </p>
              </div>

         </div>



         {/*  PRICE PER TONS */}
         <div className='flex flex-col items-start justify-start w-full mt-5 px-4 md:px-8'>
         <p className='text-[10px] font-medium mt-2 text-black'>
               Price per ton
         </p>
         <div className='relative w-[55%] md:w-[35%] xl:w-[25%]'>
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
              <div className='absolute mt-1 left-0 flex flex-col items-start justify-start w-[50%] bg-white border-[1px] z-50 border-[#D0D5DD] rounded-md px-3 py-2 md:w-[40%] lg:w-[35%]'>
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
            </div>


         <div className='flex flex-col items-start justify-start w-full pt-6 px-4 md:px-8 md:pt-8'>
            <p className='text-[11px] text-black font-medium xl:text-[13px]'>
                Minimum purity requirement
            </p>
            <div className='relative w-[20%] mt-1 md:w-[12%] xl:w-[10%]'>
                  <input 
                 className='border-[1px] border-[#D0D5DD] rounded-md h-9 px-3 text-[10px] w-full outline-[#2196F3] xl:text-xs xl:h-10'
                 placeholder='100%'
                 type="text"
                 value={percentage} 
                 onChange={handlePercentage}
                 />
            </div>
         </div>


         {/* URGENT REQUEST TAG */}
         <div className='flex flex-col items-start justify-start w-full px-4 pt-6 md:px-8 md:pt-8'>
            <div className='flex items-center justify-between w-full'>
                 <div className='flex flex-col items-start justify-between w-full'>
                     <p className='text-[11px] text-black font-medium xl:text-[13px]'>
                          Urgent Request Tag
                     </p>
                     <p className='text-[11px] text-[#7B8794] font-normal mt-1 w-[85%] xl:text-xs'>
                          Select this to show users this request is urgent
                     </p>
                 </div>

                 <div onClick={handleRequestToggle}
                 className={`flex items-center justify-start h-[20px] w-9 rounded-xl bg-[#E3E5E5] ${requestToggle && 'justify-end'} xl:w-10`}>
                      <div className={`flex items-start justify-center h-4 w-4 rounded-full bg-[#323F4B]`}></div>
                 </div>
             </div>
         </div>


         {/* PROGRESS BAR */}
         {/*<div className='flex flex-col items-start justify-start w-full px-4 pt-8 md:px-8'>
            <div className='flex items-center justify-between w-full'>
                 <div className='flex flex-col items-start justify-between w-full'>
                     <p className='text-[11px] text-black font-medium xl:text-[13px]'>
                           Progress Bar
                     </p>
                     <p className='text-[11px] text-[#7B8794] font-normal mt-1 w-[85%] xl:text-xs'>
                           Choose to display a progress bar indicating the degree of target achievement to users.
                     </p>
                 </div>

                 <div onClick={handleProgressToggle}
                 className={`flex items-center justify-start h-[20px] w-9 rounded-xl bg-[#E3E5E5] ${progressToggle && 'justify-end'} xl:w-10`}>
                      <div className={`flex items-start justify-center h-4 w-4 rounded-full bg-[#323F4B]`}></div>
                 </div>
             </div>
         </div>*/}


         {/* BUTTONS*/}
         <div className='flex items-center justify-between w-full mt-8 px-4 md:px-8 md:mt-12'>
               <button onClick={()=>setBroadcastModal(false)}
               className={`text-center text-black text-xs bg-[#F2F2F2] border-[1px] border-[#D0D5DD] h-8 w-20 rounded-md xl:h-10 xl:w-24 xl:text-sm`}>
                   Back
               </button>
               {error && 
                <p className='text-[10px] text-red-500 px-3 text-center md:text-xs xl:text-sm'>
                    {error}
                </p>
               }
               <button onClick={handleProceed}
               disabled={isChecked ? noTimeLimit : timeLimit}
               className={`flex items-center justify-center text-white text-xs bg-[#007CD7] h-8 w-20 rounded-md xl:h-10 xl:w-24 xl:text-sm ${isButtonDisabled && 'bg-[#bddef6]'}`}>
                   { loading
                    ?<div className="relative flex items-center justify-center w-6 h-6 border-4 border-gray-500 border-solid rounded-full">
                       <div className="absolute w-6 h-6 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                    </div>
                    : 'Proceed'
                   }
               </button>
         </div>


    </motion.div>
  )
}

export default BroadcastModal1
