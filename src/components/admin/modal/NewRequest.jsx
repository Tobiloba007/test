import React from 'react'
import { motion } from 'framer-motion';
import { VscClose } from "react-icons/vsc";



const NewRequest = ({setNewRequest}) => {
    const slideInVariants = {
        hidden: { y: '100%' },
        visible: { y: 0 },
      };

  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    variants={slideInVariants}
    transition={{ ease: 'easeOut', duration: 0.5 }}
    className='absolute top-[30%] flex flex-col item-center justify-start w-[85%] bg-white rounded-lg p-5 pb-6 md:w-[45%] md:top-[27%] lg:w-[35%] xl:w-[25%] xl:pb-7'
    >
        <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#101828] font-medium lg:text-sm xl:text-base'>
                    New Supply Request
                </p>

             <div onClick={()=>setNewRequest(false)}
              className='flex items-start justify-end'>
                   <VscClose className='text-base xl:text-2xl' />
             </div>
        </div>


        <div className='flex flex-col items-start justify-start w-full mt-3'>
              {/* SUPPLIER */}
             <div className='flex flex-col items-start justify-start w-full mt-4'>
                 <p className='text-[9px] text-[#101828] font-normal'>
                      Supplier
                  </p>
                  <input className='w-full h-8 border-[0.5px] border-[#D0D5DD] rounded-md mt-1 pl-4 text-[9px] text-[#101828] outline-[#2196F3]'
                  placeholder="Supplier's Name"
                  />
             </div>

              {/* QUANTITY */}
             <div className='flex flex-col items-start justify-start w-full mt-4'>
                 <p className='text-[9px] text-[#101828] font-normal'>
                          Quantity(Metric Tons)
                  </p>
                  <input className='w-full h-8 border-[0.5px] border-[#D0D5DD] rounded-md mt-1 pl-4 text-[9px] text-[#101828] outline-[#2196F3]'
                  placeholder="0.00"
                  />
             </div>

              {/* PRICE */}
             <div className='flex flex-col items-start justify-start w-full mt-4'>
                 <p className='text-[9px] text-[#101828] font-normal'>
                          Price Per Ton
                  </p>
                  <input className='w-full h-8 border-[0.5px] border-[#D0D5DD] rounded-md mt-1 pl-4 text-[9px] text-[#101828] outline-[#2196F3]'
                  placeholder="0.00"
                  />
             </div>

              {/* REFERENCE ID */}
             <div className='flex flex-col items-start justify-start w-full mt-4'>
                 <p className='text-[9px] text-[#101828] font-normal'>
                       Reference ID
                  </p>
                  <div className='relative w-full'>
                      <input className='w-full h-8 border-[0.5px] border-[#D0D5DD] rounded-md mt-1 pl-4 text-[9px] text-[#101828] outline-[#2196F3]'
                      placeholder="000000"
                      />
                      <button className='absolute bottom-1 right-2 h-6 px-4 border-[#DDE1E6] rounded-md border-[1px] bg-white text-center text-[8px] font-medium'>
                            Generate                     
                      </button>
                  </div>
             </div>


             {/* BUTTONS */}
             <div className='flex items-center justify-start w-full mt-5'>
                  <button className='h-8 w-[35%] border-[#DDE1E6] rounded-md border-[1px] bg-white text-center text-[8px] font-medium xl:text-[9px]'>
                         Cancel
                  </button>

                  <button className='h-8 flex-1 ml-3 rounded-md  bg-[#2196F3] text-center text-[8px] text-white font-medium xl:text-[9px]'>
                         Create Request
                  </button>
             </div>

        </div>

    </motion.div>
  )
}

export default NewRequest
