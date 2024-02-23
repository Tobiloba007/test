import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";



const SellerPage5 = ({setCount}) => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

      const [dropdowm, setDropdown] = useState(false);
      const [select, setSelect] = useState('Select Currency')

      const grade = ['Nigerian Naira (NGN)', 'United States Dollar (USD)', 'Great Britain Pounds (GBP)', 'Euros (EUR)']

      const selectCountry = (item) => {
        setDropdown(false);
        setSelect(item)
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
                      Could you specify the pricing for your commodity?
              </p>
              <p className='text-xs text-[#667085] font-normal text-center mt-2 md:text-xs md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-sm'>
                     Tell us how much you think your commodity is worth - per metric ton <span className='font-bold'>NOTE:</span> This is for estimation purposes only The real value will be negotiated 
              </p>
          </div>


          <div className='relative flex flex-col items-start justify-start w-[80%] mt-8 md:flex-row md:items-start md:justify-start md:w-full'>
                 <div onClick={() => setDropdown(!dropdowm)}
                 className={`flex flex-row items-center justify-between h-12 w-full border-[1px] border-[#A4A4A4] text-[#A4A4A4] rounded-lg mt-3 px-4 md:mt-8
                  md:w-[45%] md:h-[50px] lg:w-[45%] lg:h-16 xl:w-[50%]`}>
                       <p className={`text-xs font-normal ${select !== 'Select Grade' ? 'text-black' : 'text-[#ABAFB1]'} xl:text-sm`}>
                            {select}
                       </p>
                       {
                         dropdowm
                         ? <SlArrowUp className='text- text-black hover:text-white' />
                         : <SlArrowDown className='text-sm text-black hover:text-white' />
                       }
                 </div>

                 {dropdowm && 
                   <div className='flex flex-col items-start justify-start px-8 py-2 absolute top-16 w-full rounded-md border-[#A4A4A4] border-[1px] 
                   bg-white shadow-lg z-20 md:w-[45%] md:top-[85px] lg:w-[43%] lg:top-[100px] xl:w-[46%] xl:top-[100px]'>
                           {grade.map((item, index) => {
                             return(
                                 <p key={index} onClick={() => selectCountry(item)}
                                 className='text-sm font-normal text-black w-full py-4'>
                                       {item}
                                  </p>
                             )
                           })}
                    </div>
                  }

                  <div className='flex flex-row items-end justify-start w-full md:w-[50%] md:ml-5 lg:w-[55%]'>
                         <div className='flex flex-col items-start justify-center h-16 w-full border-[1px] border-[#A4A4A4] text-[#A4A4A4] rounded-lg mt-6 pl-4 md:mt-8'>
                              <p className='text-xs w-full text-black font-light xl:text-sm'>
                                    Amount
                              </p>
                              <input 
                              type='number'
                              className='outline-none border-none w-full pr-4 lg:mt-2 xl:text-sm' />
                         </div>
                         <div className='w-[45%] lg:w-[60%]'>
                              <p className='text-xs w-full text-[#A4A4A4] font-normal ml-3 md:text-sm xl:text-base'>
                                    / metric ton
                              </p>
                         </div>
                  </div>
            </div>

            <div className='flex flex-row items-center justify-between w-[80%] mt-10 md:w-[90%] md:mt-16 lg:w-full'>
                  <button onClick={() => setCount(6)}
                      disabled={select === null }
                      className={`text-center text-sm font-normal text-black bg-white border-[1px] border-[#dddddd] rounded-sm h-11 w-[49%] mt-12 md:w-[49%] 
                      md:h-14 lg:w-[49%] lg:mt-14`}>
                                           Skip
                  </button>
                  <button onClick={() => setCount(6)}
                      disabled={select === null }
                      className={`text-center text-sm font-normal text-white bg-black rounded-sm h-11 w-[49%] mt-12 md:w-[49%] md:h-14 lg:w-[49%] lg:mt-14`}>
                                           Next
                  </button>
            </div>

    </motion.div>
  )
}

export default SellerPage5
