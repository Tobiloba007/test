import React, { useState } from 'react'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { motion } from 'framer-motion';



const BuyerPage2 = ({setCount}) => {
  const [dropdowm, setDropdown] = useState(false);
  const [select, setSelect] = useState('Select Location')

  const selectCountry = (item) => {
        setDropdown(false);
        setSelect(item)
  }

  const slideInVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  };

  return (
    <motion.div 
    initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.4 }}
    className='flex flex-col items-center justify-center w-full mt-20 md:px-12 lg:px-10 lg:items-start lg:mt-10 xl:px-28'>
          <div className='flex flex-col items-center justify-center w-full md:flex-row-reverse lg:justify-end'>
              <p className='text-xs text-black font-normal mb-1 md:mb-0 md:ml-4 md:text-sm'>
                     30% Complete
              </p>
              <div className='flex items-center justify-start w-[80%] h-[5px] rounded-2xl bg-[#dddddd] md:h-[7px] lg:w-[60%] xl:w-[75%]'>
                    <div className='flex items-center justify-start w-[30%] h-full rounded-full bg-green-500'></div>
              </div>
          </div>

          <div className='flex flex-col items-center justify-center w-full mt-8 md:items-start'>
                <p className='text-xl font-semibold text-center md:text-2xl md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-[27px]'>
                       Where are you located
                </p>
                    <div onClick={() => setDropdown(!dropdowm)}
                    className={`flex flex-row items-center justify-between h-14 w-[80%] border-[1px] border-[#A4A4A4] text-[#A4A4A4] rounded-lg mt-12 px-4 hover:text-white hover:bg-black md:mt-8
                     md:w-[45%] lg:w-[50%] lg:h-12 xl:w-[50%] xl:h-14 xl:text-sm`}>
                          <p className={`text-sm font-normal`}>
                               {select}
                          </p>
                          {
                            dropdowm
                            ? <SlArrowUp className='text- text-black hover:text-white' />
                            : <SlArrowDown className='text-sm text-black hover:text-white' />
                          }
                    </div>

                    {dropdowm && 
                      <div className='flex flex-col items-start justify-start px-8 py-2 absolute top-[12.3rem] w-[80%] rounded-md border-[#A4A4A4] border-[1px] 
                      bg-white shadow-lg z-20 md:w-[40%] lg:w-[42%] lg:top-[10.7rem] xl:w-[35%] xl:top-[11.2rem]'>
                              <p onClick={() => selectCountry('Cairo, Egypt')}
                              className='text-sm font-normal text-black w-full py-4'>
                                  Cairo, Egypt
                               </p>
                              <p onClick={() => selectCountry('Lagos, Nigeria')}
                              className='text-sm font-normal text-black w-full py-4'>
                                  Lagos, Nigeria
                               </p>
                              <p onClick={() => selectCountry('Accra, Ghana')}
                              className='text-sm font-normal text-black w-full py-4'>
                                  Accra, Ghana
                               </p>
                              <p onClick={() => selectCountry('Paris, France')}
                              className='text-sm font-normal text-black w-full py-4'>
                                  Paris, France
                               </p>
                    </div>
                  }
                    
                    <button onClick={() => setCount(3)}
                    disabled={select === 'Select Location'}
                    className={`flex items-center justify-center text-sm font-normal text-white ${select === 'Select Location' ? 'bg-[#dddddd]' : 'bg-black'} rounded-sm h-14 w-[80%] mt-12 md:w-[45%] lg:w-[50%]`}>
                                    Next
                    </button>
           </div>
    </motion.div>
  )
}

export default BuyerPage2
