import React from 'react'
import { motion } from 'framer-motion';


const BuyerRequest = ({setCount, count}) => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };
  return (
    <motion.div 
    initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    className='flex flex-col items-center justify-center w-full mt-20 lg:px-10 lg:items-start xl:mt-24 xl:px-32'>
                    <p className='text-xl font-semibold text-center md:text-2xl md:w-[65%] lg:w-full lg:text-start xl:text-[27px]'>
                         Do you want to make a custom purchase request?
                    </p>

                    <button onClick={()=>setCount(2)}
                    className='text-center h-12 w-[90%] border-[1px] border-[#A4A4A4] rounded-lg mt-9 px-2 text-xs font-semibold hover:bg-black hover:text-white md:h-11
                     md:w-[45%] lg:w-[70%] xl:w-[72%] xl:h-12 xl:text-sm'>
                          Yes, I want to make a custom purchase request 
                    </button>
                    <button onClick={()=>setCount(2)}
                    className='text-center h-12 w-[90%] border-[1px] border-[#A4A4A4] rounded-lg mt-4 px-2 text-xs font-semibold hover:bg-black hover:text-white md:h-11
                     md:w-[45%] lg:w-[70%] xl:w-[72%] xl:h-12 xl:text-sm'>
                          No, I just want to see what is available
                    </button>
     </motion.div>
  )
}

export default BuyerRequest
