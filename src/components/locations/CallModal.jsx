import React, { useState } from 'react'
import { VscClose } from "react-icons/vsc";
import { FaRegCopy } from "react-icons/fa";
import { LiaCheckSolid } from "react-icons/lia";



const CallModal = ({setCall}) => {
    const [copy, setCopy] = useState(null);

    const closeModal = () => {
        setCall(false)
    }

    const phone = [
        {
            id: 1,
            number: '+234 90 123 4567 89'
        },
        {
            id: 2,
            number: '+234 90 123 4567 88'
        },
        {
            id: 3,
            number: '+234 90 123 4567 87'
        },
    ]


    const handleCopy = async (item) => {
        try {
          await navigator.clipboard.writeText(item);
          setCopy(item);
          console.log(item);
        } catch (err) {
          console.error('Unable to copy to clipboard', err);
        }
      };

  return (
    <div className='fixed flex flex-col items-center justify-center w-full h-full px-5'>
          <div onClick={closeModal} className='fixed w-full h-full z-20 bg-[#cccccc] opacity-50'></div>

          <div className='relative flex flex-col items-center justify-center w-[85%] bg-white shadow-lg border-[0.2px] border-[#eeeeee] rounded-lg px-3 py-7 z-50
          md:w-[45%] md:py-8 lg:py-11 lg:w-[30%] xl:w-[23%]'>
              <p className='text-sm font-bold text-center text-[#101828] xl:text-base'>
                   CALL TO ENQUIRE
              </p>
              <VscClose onClick={closeModal} className='absolute top-7 right-4 text-lg lg:text-xl xl:text-2xl lg:top-10' />

              <div className='flex flex-col items-center justify-start w-full mt-3'>
                   {phone.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-row items-center justify-center w-full mt-3 lg:mt-4'>
                             <p className='text-sm font-semibold text-[#2196F3] xl:text-base'>
                                  {item.number}
                             </p>

                             <div onClick={() => handleCopy(item.number)}>
                                  {
                                    copy === item.number
                                    ?<LiaCheckSolid className='text-[#6fc570] ml-5 text-lg xl:text-xl' />
                                    :<FaRegCopy className='text-[#D0D5DD] ml-5 text-lg xl:text-xl' />
                                  }
                             </div>
                        </div>
                    )
                   })}
              </div>
          </div>
    </div>
  )
}

export default CallModal
