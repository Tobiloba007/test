import React, { useState } from 'react'
import { motion } from 'framer-motion';


const SellerPage4 = ({setCount}) => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

      const certification = [
        {
            id: 1,
            name: 'ISO Certified',
        },
        {
            id: 2,
            name: 'ASTM Standard',
        },
        {
            id: 3,
            name: 'Industry-specific Certifications',
        },
        {
            id: 4,
            name: 'Not Applicable',
        },
      ]

      const [select, setSelect] = useState(null);

      const handleSelect = (item) => {
        setSelect(item)
        console.log(select)
      }


  return (
    <motion.div
    initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.4 }}
      className='flex flex-col items-center justify-center w-full mt-10 pb-24 md:px-12 md:mt-16 md:items-start lg:pl-10 lg:mt-10 xl:pl-28 xl:mt-12'
    >   
         <div className='flex flex-col items-center justify-center w-full md:flex-row-reverse lg:justify-end'>
             <p className='text-xs text-black font-normal mb-1 md:mb-0 md:ml-4 md:text-sm'>
                    95% Complete
             </p>
             <div className='flex items-center justify-start w-[80%] h-[5px] rounded-2xl bg-[#dddddd] md:h-[7px] lg:w-[60%] xl:w-[75%]'>
                   <div className='flex items-center justify-start w-[95%] h-full rounded-full bg-green-500'></div>
             </div>
         </div>
         <div className='flex flex-col items-center justify-center w-full mt-8 md:items-start'>
             <p className='text-xl font-semibold text-center md:text-2xl md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-[27px]'>
                    Choose relevant certification
             </p>
             <p className='text-xs text-[#667085] font-normal text-center mt-2 md:text-xs md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-sm'>
                    Choose the relevant/multiple certifications your commodity adheres to.
             </p>
         </div>

         <div className='flex flex-col items-start justify-start w-[80%] mt-7'>
                {certification.map((item) => {
                    return(
                        <div key={item.id} onClick={()=>handleSelect(item.id)}
                        className='flex flex-row items-center justify-between px-4 h-10 mt-4 border-[1px] border-[#A4A4A4] rounded-xl'>
                              <p className='text-xs text-black font-medium'>
                                     {item.name}
                              </p>
                              <div 
                              className='flex items-center justify-center h-4 w-4 rounded-full border-[1px] ml-4 border-[#A4A4A4] bg-white'>
                                      <div className={`h-4 w-5 rounded-full ${select === item.id && 'bg-green-600'} `}></div>
                              </div>
                        </div>
                    )
                })}
         </div>

         <button onClick={() => setCount(5)}
           disabled={select === null }
            className={`text-center text-sm font-normal text-white ${select === null ? 'bg-[#dddddd]' : 'bg-black'} rounded-sm h-14 w-[80%] mt-12 md:w-[45%] lg:w-[50%] lg:mt-14`}>
                                    Next
         </button>
    </motion.div>
  )
}

export default SellerPage4
