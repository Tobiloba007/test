import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const BuyerPage4 = ({setCount}) => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

      const [select, setSelect] = useState(null);
      const [counter, setCounter] = useState(1);
      const [showDefinition, setShowDefinition] = useState(false);

      const handleSelect = (item) => {
        setSelect(item)
        console.log(select)
      }

      const ores = [
        {
            id: 1,
            name: 'Igneous',
        },
        {
            id: 2,
            name: 'Sedimentary',
        },
        {
            id: 3,
            name: 'Metamorphic',
        },
        {
            id: 4,
            name: 'Hydrothermal',
        },
      ]

      const handleIncreaseCount = () => {
        setCounter(counter + 1)
      }

      const handleReduceCount = () => {
        if(counter >= 2){
            setCounter(counter -1)
        }
      }

  return (
    <motion.div
    initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.4 }}
      className='flex flex-col items-center justify-center w-full mt-20 pb-24 md:px-12 md:items-start lg:pl-10 lg:mt-10 xl:pl-28 xl:mt-12'
    >
        <div className='flex flex-col items-center justify-center w-full md:flex-row-reverse lg:justify-end'>
            <p className='text-xs text-black font-normal mb-1 md:mb-0 md:ml-4 md:text-sm'>
                   80% Complete
            </p>
            <div className='flex items-center justify-start w-[80%] h-[5px] rounded-2xl bg-[#dddddd] md:h-[7px] lg:w-[60%] xl:w-[75%]'>
                  <div className='flex items-center justify-start w-[80%] h-full rounded-full bg-green-500'></div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full mt-8 md:items-start'>
                <p className='text-xl font-semibold text-center md:text-2xl md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-[27px]'>
                       What product specifications are you looking for?
                </p>
                <p className='text-xs text-[#667085] font-normal text-center mt-2 md:text-xs md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-sm'>
                         Select  the quantity and Ore type of the product(s)
                </p>
        </div>

        <div className='flex flex-col items-center justify-center w-full mt-8 md:items-start'>
                <p className='text-xs font-semibold text-center md:text-2xl md:text-start lg:w-full lg:text-start xl:text-[27px]'>
                       Choose the Quantity <span className='text-[#667085]'>(Metric tons)</span>
                </p>
                <div className='flex flex-row items-center justify-center w-full mt-6'>
                     <button onClick={handleReduceCount}
                     className='text-center h-7 w-7 border-[1px] border-[#cccccc] text-xl bg-white cursor-pointer hover:bg-black hover:text-white'>
                              -
                     </button>

                         <p className='text-center text-[30px] text-black px-6'>{counter}</p>

                     <button onClick={handleIncreaseCount}
                     className='text-center h-7 w-7 border-[1px] border-[#cccccc] text-xl bg-white cursor-pointer hover:bg-black hover:text-white'>
                              +
                     </button>
                </div>

                <div className='flex flex-col items-center justify-center mt-12 md:mt-10'>
                       <p className='text-center text-base font-semibold text-black mb-2'>
                             Select the Ore type 
                       </p>
                       {ores.map((item) => {
                        return (
                            <div key={item.id} onClick={()=>handleSelect(item.id)}
                            className='flex flex-row items-center justify-start w-full mt-4'>
                                  <div className='flex items-center justify-center  h-5 w-5 rounded-full  border-[2px] border-[#A4A4A4] bg-white'>
                                            <div className={`h-4 w-5 rounded-full ${select === item.id ? 'bg-green-600' : 'bg-white'}`}></div>
                                  </div>
                                  <p className='text-center text-base font-light text-[#667085] ml-6'>
                                       {item.name}
                                 </p>
                            </div>
                        )
                       })}
                </div>
        </div>

        <div className='flex flex-row items-center justify-center w-full mt-10 md:justify-start'>
              <p className='text-start text-base font-normal text-[#04ADE3]'>
                   Not sure what ore type means?
              </p>
              {
                showDefinition
                ?<IoIosArrowDown onClick={() =>setShowDefinition(!showDefinition)}
                className='text-[#04ADE3] ml-3 font-medium text-xl' />
                :<IoIosArrowUp onClick={() =>setShowDefinition(!showDefinition)}
                className='text-[#04ADE3] ml-3 font-medium text-xl' />
              }
        </div>
        {
            showDefinition &&
            <div className='flex items-center justify-center w-full mt-4 md:justify-start'>
                  <p className='text-center text-base font-light text-[#667085] md:text-start'>
                        The type of ores that are based on how the ore was formed include <span className='font-semibold'>igneous, sedimentary, metamorphic, hydrothermal.</span>
                          <br />
                          <br />
                        Igneous ore forms when lava or magma cools at or near the Earth's surface and includes the settling or wide dispersal of precious metals such as diamonds, copper, tin and silver, among others.
                  </p>
            </div>
        }

        <button onClick={() => setCount(5)}
        disabled={select === null}
            className={`text-center text-sm font-normal text-white ${select === null ? 'bg-[#dddddd]' : 'bg-black'} rounded-sm h-14 w-[80%] mt-12 md:w-[45%] lg:w-[50%] lg:mt-14`}>
                                    Next
        </button>

    </motion.div>
  )
}

export default BuyerPage4
