import React, { useState } from 'react'
import Navbar from '../general/Navbar'
import logo from '../../assets/images/obaLogo2.svg'
import logo2 from '../../assets/images/obaLogo2.svg'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IoWallet } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import demo from '../../assets/images/Metal1.svg'
import MessageModal from './MessageModal';
import CallModal from './CallModal';






const LocationsIntro = () => {
    const [message, setMessage] = useState(false);
    const [call, setCall] = useState(false);

    const handleMessage = () => {
        setMessage(true);
        console.log('message', message);
    }

    const handleCall = () => {
        setCall(true);
        console.log('phone number', call);
    }

  return (
    <div className='flex flex-col items-center justify-start w-full font-poppins'>
         <div className={`flex flex-row items-center justify-center absolute top-0 w-full bg-white h-20 shadow-md lg:h-24`}>
             <Navbar logo={logo} logo2={logo2} text2={'#101828'} locations={'#2196F3'} regBackground={'#2196F3'} reg={'#FFFFFF'} />
         </div>

         <div className='flex flex-col items-center justify-start w-full mt-36 px-5 pb-12 md:px-10 md:pb-16 md:mt-40 lg:flex-row lg:mt-44 lg:px-14 lg:items-start xl:mt-56 
         xl:pb-32 xl:px-20'>
             {/* LEFT */}
           <div className='flex flex-col items-center justify-start w-full lg:items-start'>
              <div className='flex flex-row items-center justify-between w-full lg:w-[80%]'>
                    <div className='flex items-center justify-center h-6 w-6 rounded-full border-[0.5px] border-[#101828] md:h-7 md:w-7 xl:h-8 xl:w-8'>
                          <SlArrowLeft className='text-[9px] md:text-[10px] xl:text-[11px]' />
                    </div>
                    <p className='text-xl font-bold xl:text-[35px]'>ABUJA FCT</p>
                    <div className='flex items-center justify-center h-6 w-6 rounded-full border-[0.5px] border-[#101828] md:h-7 md:w-7 xl:h-8 xl:w-8'>
                          <SlArrowRight className='text-[9px] md:text-[10px] xl:text-[11px]' />
                    </div>
              </div>

              <div className='flex flex-col items-center justify-start md:flex-row md:items-start md:mt-5 lg:w-[80%] xl:mt-8 xl:w-[90%]'>
                   <div className='w-full py-8 xl:w-[80%]'>
                         <img src={demo} alt='location1' />
                   </div>
                   <div className='flex flex-col items-center justify-start w-full md:w-[40%] md:mt-28 xl:mt-24'>
                        <p className='text-[13px] font-normal text-[#667085] lg:font-medium xl:text-base xl:font-semibold'>ABUJA FCT</p>
                        <div className='flex flex-row items-end justify-center w-full mt-1 lg:flex-col lg:items-center xl:mt-2'>
                             <p className='text-lg font-bold text-[#000000] xl:text-2xl'>4,500</p>
                             <p className='text-[10px] font-semibold text-[#000000] ml-1 leading-6 lg:leading-3 lg:text-[8px] xl:text-[10px] xl:leading-4'>METRIC TONS</p>
                        </div>
                   </div>
              </div>

           </div>



           {/* RIGHT */}
           <div className='flex flex-col items-center justify-center w-full mt-14 lg:w-[45%] lg:mt-8 lg:items-start xl:w-[40%]'>
                 <p className='text-base font-semibold text-[#000000] text-center lg:font-bold lg:text-start xl:text-xl'>
                       DISCOVER AVAILABLE METRIC TONS ACCROSS STATES.
                 </p>
                 <div className='flex flex-col items-center justify-start w-full mt-3 md:flex-row md:justify-between lg:flex-col lg:items-start lg:mt-5'>
                      <div className='flex flex-row items-center justify-center bg-[#2196F3] w-[75%] mt-5 h-11 rounded-full md:w-[28%] lg:w-[72%] xl:w-[65%] xl:h-[52px] xl:mt-6'>
                           <IoWallet className='text-white text-xl xl:text-2xl' />
                           <p className='text-[12px] font-normal text-white ml-4 xl:text-[13px]'>Request Purchase</p>
                      </div>
                      <div onClick={handleMessage}
                      className='flex flex-row items-center justify-center bg-[#2196F3] w-[75%] mt-5 h-11 rounded-full md:w-[28%] lg:w-[72%] xl:w-[65%] xl:h-[52px] xl:mt-6'>
                           <TbMailFilled className='text-white text-xl xl:text-2xl' />
                           <p className='text-[12px] font-normal text-white ml-4 xl:text-[13px]'>Send a Message</p>
                      </div>
                      <div onClick={handleCall}
                      className='flex flex-row items-center justify-center bg-[#2196F3] w-[75%] mt-5 h-11 rounded-full md:w-[28%] lg:w-[72%] xl:w-[65%] xl:h-[52px] xl:mt-6'>
                           <FaPhoneAlt className='text-white text-lg xl:text-2xl' />
                           <p className='text-[12px] font-normal text-white ml-4 xl:text-[13px]'>Call to Confirm</p>
                      </div>
                 </div>
                 <div className='flex flex-row items-center justify-start mt-6 md:mt-10 lg:mt-7 xl:text-mt-8'>
                           <IoCheckmarkCircleSharp className='text-[#25A249] text-xl xl:text-2xl' />
                           <p className='text-[12px] font-normal text-[#000000] ml-2 xl:text-sm xl:ml-3'>
                               Enquire to check location and availability.
                           </p>
                 </div>
                 
           </div>

         </div>


         {message && <MessageModal setMessage={setMessage} />}
         {call && <CallModal setCall={setCall} />}
    </div>
  )
}

export default LocationsIntro
