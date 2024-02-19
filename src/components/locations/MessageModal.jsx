import React from 'react'
import flag from '../../assets/icons/nigeria.svg'
import { SlArrowDown } from "react-icons/sl";
import { VscClose } from "react-icons/vsc";




const MessageModal = ({setMessage}) => {

    const closeModal = () => {
        setMessage(false);
    }

  return (
    <div className='fixed flex flex-col items-center justify-center w-full h-full px-5'>

    <div className='fixed w-full h-full z-20 bg-[#cccccc] opacity-50'></div>

    <div className='flex flex-col items-start justify-center w-full bg-white shadow-lg border-[0.2px] border-[#eeeeee] rounded-md px-3 py-5 z-50 md:w-[60%] md:px-5 lg:mb-0 
    lg:w-[40%] lg:items-center xl:w-[35%] lg:mt-3 xl:mt-5'>

    <div className='flex flex-row items-center justify-between w-full'>
         <p className='text-xs font-semibold text-[#101828] lg:text-base lg:mb-3 xl:text-lg xl:mb-6 xl:font-bold'>
              Leave a Message
         </p>
         <VscClose onClick={closeModal} className='text-lg lg:text-xl xl:text-2xl' />
    </div>

    <form className='w-full mt-5 lg:w-full'>
       <div className='flex flex-col items-start justify-center h-12 w-full border-[1.5px] border-[#667085 rounded-md pl-4 mb-3 
        lg:border-[1.8px] xl:h-14 xl:rounded-lg xl:mb-5'>
           <p className='text-[10px] font-semibold text-[#101828] mb-1 xl:text-[12px]'>
                Name
           </p>
           <input className='text-[10px] outline-none xl:text-[12px]' 
            placeholder='John Dorime'
           />
       </div>

       <div className='flex flex-col items-start justify-center h-12 w-full border-[1.5px] border-[#667085 rounded-md pl-4 my-3 
        lg:border-[1.8px] xl:h-14 xl:rounded-lg xl:my-5'>
           <p className='text-[10px] font-semibold text-[#101828] mb-1 xl:text-[12px]'>
                Email
           </p>
           <input className='text-[10px] outline-none xl:text-[12px]' 
            placeholder='example@example.com'
           />
       </div>

       <div className='flex flex-row items-center justify-start h-12 w-full border-[1.5px] border-[#667085 rounded-md pl-4 my-3 
        lg:border-[1.8px] xl:h-14 xl:rounded-lg xl:my-5'>
           <div className='flex flex-row items-center justify-start h-full'>
               <img className='h-6 w-6 xl:w-8 xl:h-8'
               src={flag} alt='flag' />
               <p className='text-[10px] font-semibold text-[#101828] px-2 xl:text-[12px]'>
                    +234
               </p>
               <SlArrowDown className='text-[9px] text-[#101828] xl:text-[11px]' />
           </div>
           <div className='flex flex-col items-start justify-center h-full ml-4'>
                <p className='text-[10px] font-semibold text-[#101828] mb-1 xl:text-[12px]'>
                     Phone Number (optional)
                </p>
                <input className='text-[10px] outline-none xl:text-[12px]' 
                 placeholder='8023456789'
                />
           </div>
       </div>

       <div className='flex flex-col items-start justify-start h-36 w-full border-[1.5px] border-[#667085 rounded-md px-4 pt-2 my-3 
        lg:border-[1.8px] xl:h-40 xl:rounded-lg xl:my-5'>
           <p className='text-[10px] font-semibold text-[#101828] mb-1 xl:text-[12px]'>
                Message
           </p>
           <textarea className='text-[10px] outline-none w-full xl:text-[12px]' 
            placeholder='Type Message'
            rows={8}
           />
       </div>

       <div className='flex flex-row items-center justify-between w-full mt-4'>
            <button onClick={closeModal}
            className='text-center h-9 w-full rounded-[25px] text-[10px] bg-[#FFFFFF] text-[#101828] xl:text-[12px] xl:h-12'>
                   Cancel
            </button>
            <button className='text-center h-9 w-full rounded-[25px] text-[10px] bg-[#2196F3] text-white xl:text-[12px] xl:h-12'>
                   Send Message
            </button>
       </div>

    </form>
</div>
    </div>
  )
}

export default MessageModal
