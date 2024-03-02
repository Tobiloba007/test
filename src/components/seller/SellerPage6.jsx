import React from 'react'
import { motion } from 'framer-motion';


const SellerPage6 = ({setCount}) => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

      const frequency = ['This a one-off purchase request', 'This a monthly purchase request', 'This is an annual purchase request', 'Monthly, but with varying requirements', 'Annually, but with varying Requirements']


  return (
    <motion.div
    initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.4 }}
      className='flex flex-col items-center justify-center w-full mt-20 pb-24 md:px-12 lg:items-start lg:pl-10 lg:mt-10 xl:pl-28 xl:mt-12'
    >

    <div className='flex flex-col items-center justify-center w-full md:flex-row-reverse lg:justify-end'>
            <p className='text-xs text-black font-normal mb-1 md:mb-0 md:ml-4 md:text-sm'>
                   85% Complete
            </p>
            <div className='flex items-center justify-start w-[80%] h-[5px] rounded-2xl bg-[#dddddd] md:h-[7px] lg:w-[60%] xl:w-[75%]'>
                  <div className='flex items-center justify-start w-[85%] h-full rounded-full bg-green-500'></div>
            </div>
    </div>
    <div className='flex flex-col items-center justify-center w-full mt-8 mb-7 md:items-center'>
                <p className='text-xl font-semibold text-center md:text-2xl md:text-start lg:w-full lg:text-start xl:text-[27px]'>
                       What is the frequency of this order?
                </p>
                <p className='text-xs text-[#667085] font-normal text-center mt-2 md:text-xs md:text-start lg:w-full lg:text-start xl:text-sm'>
                        How often do you want this delivered to you?
                </p>
    </div>
    {frequency.map((item, index) => {
        return(
            <button key={index} onClick={()=>setCount(7)}
                    className='text-center h-12 w-[90%] border-[1px] border-[#A4A4A4] rounded-lg mt-6 px-2 text-xs font-semibold hover:bg-black hover:text-white md:h-11
                     md:w-[45%] lg:w-[70%] xl:w-[72%] xl:h-12 xl:text-sm'>
                          {item}
            </button>
        )
    })}
    </motion.div>
  )
}

export default SellerPage6
