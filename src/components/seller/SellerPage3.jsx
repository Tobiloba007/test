import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { setUserRequest } from '../../features/requests/RequestSlice';




const SellerPage3 = ({setCount}) => {

    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

      const userRequests = useSelector((state) => state.request.userRequests)

      const dispatch = useDispatch();

      // const [dropdowm, setDropdown] = useState(false);
      // const [select, setSelect] = useState('Select Grade')

      // const grade = ['High-Grade', 'Medium-Grade', 'Low-Grade', 'Not Applicable']

      // const selectCountry = (item) => {
      //   setDropdown(false);
      //   setSelect(item)
      // }

  const [textValue, setTextValue] = useState('');

      const handleChange = (event) => {
        setTextValue(event.target.value);
      };



   const [position, setPosition] = useState({ x: 0, y: 0 });
   const [drag, setDrag] = useState(0);

  const handleDrag = (e, ui) => {
    // Calculate the percentage based on the drag position
    const percentageX = (ui.x / 290) * 100;
    setDrag(Math.floor(percentageX))
    console.log('drag', drag);

    setPosition({ x: ui.x, y: 0 });

    // console.log(`X Percentage: ${percentageX.toFixed(2)}%`);
  };


  const handleSubmit = () => {
    setCount(5)
    const values = {'purity': drag.toString(), 'notes': textValue}
    const combinedValues3= {...values, ...userRequests}
    dispatch(setUserRequest(combinedValues3))
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
               60% Complete
        </p>
        <div className='flex items-center justify-start w-[80%] h-[5px] rounded-2xl bg-[#dddddd] md:h-[7px] lg:w-[60%] xl:w-[75%]'>
              <div className='flex items-center justify-start w-[60%] h-full rounded-full bg-green-500'></div>
        </div>
    </div>
    <div className='flex flex-col items-center justify-center w-full mt-8 md:items-start'>
        <p className='text-xl font-semibold text-center md:text-2xl md:w-[80%] md:text-start lg:w-full lg:text-start xl:text-[27px]'>
               How would you characterize the quality of your chosen selection?
        </p>
        <p className='text-base text-black font-semibold text-center mt-5  md:w-[65%] md:text-start lg:w-full lg:text-start'>
               Purity
        </p>
        <p className='text-xs text-[#667085] font-normal text-center mt-1 md:text-xs md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-sm'>
               Choose the percentage of purity of the commodity you are listing
        </p>
        <div className='flex flex-col items-center justify-start w-[300px] mt-5'>
            <p className='text-lg font-semibold text-[#D15F1E] md:text-2xl'>
                {drag}%
            </p>
            <div className='relative flex flex-row items-center justify-start w-full bg-[#D0D5DD] h-[10px] rounded-md mt-4 lg:h-3'>
               <div className={`flex items-center justify-start`}>
               <Draggable
               axis="x" // Allow dragging only along the x-axis
               bounds={{ left: 0, right: 290 }} // Adjust the bounds as needed
               defaultPosition={{ x: 0, y: 0 }}
               position={position}
               onStop={(e, ui) => handleDrag(e, ui)}
               >
               <div className={`w-7 h-7 bg-[#EEEEEE] border-[1px] border-[#DDDDDD] shadow-2xl rounded-full md:w-8 md:h-8 xl:h-9 xl:w-9`}></div>
               </Draggable>
               </div>
               <div className={`absolute bg-[#2196F3] h-full rounded-md w-[${drag}px]`}></div>
               
            </div>
            <p className='text-[10px] font-normal text-[#000000] mt-6 md:text-sm'>
                      Slide to Adjust
            </p>
        </div>

    </div>

           {/* COMPOSITION */}
    {/*<div className='flex flex-col items-center justify-center w-full mt-8 md:items-start'>
          <p className='text-base text-black font-semibold text-center mt-5  md:w-[65%] md:text-start lg:w-full lg:text-start'>
             Composition
          </p>
          <p className='text-xs text-[#667085] font-normal text-center mt-1 md:text-xs md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-sm'>
              What is the alloy composition ?
          </p>
          <input className='h-12 w-[80%] border-[1px] rounded-lg border-[#A4A4A4] px-4 text-black text-sm mt-3 outline-black'
           />
    </div>*/}

               {/* GRADE */}
      {/*<div className='relative flex flex-col items-center justify-center w-[80%] mt-5 md:items-start'>
          <p className='text-base text-black font-semibold text-center mt-5  md:w-[65%] md:text-start lg:w-full lg:text-start'>
             Grade
          </p>
          <p className='text-xs text-[#667085] font-normal text-center mt-1 md:text-xs md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-sm'>
              Choose an appropriate grade level based on the industry standards
          </p>
                  <div onClick={() => setDropdown(!dropdowm)}
                    className={`flex flex-row items-center justify-between h-14 w-full border-[1px] border-[#A4A4A4] text-[#A4A4A4] rounded-lg mt-3 px-4 md:mt-8
                     md:w-[45%] lg:w-[50%] lg:h-12 xl:w-[50%] xl:h-14 xl:text-sm`}>
                          <p className={`text-sm font-normal ${select !== 'Select Grade' && 'text-black'}`}>
                               {select}
                          </p>
                          {
                            dropdowm
                            ? <SlArrowUp className='text- text-black hover:text-white' />
                            : <SlArrowDown className='text-sm text-black hover:text-white' />
                          }
                    </div>

                    {dropdowm && 
                      <div className='flex flex-col items-start justify-start px-8 py-2 absolute top-[150px] w-[80%] rounded-md border-[#A4A4A4] border-[1px] 
                      bg-white shadow-lg z-20 md:w-[45%] md:top-[170px] lg:w-[50%] lg:top-[163px] xl:w-[50%] xl:top-[180px]'>
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
    </div>*/}

                         {/* ADDITIONAL DETAILS */}
            <div className='flex flex-col items-center justify-center w-[80%] mt-8 md:items-start'>
                  <p className='text-base text-black font-semibold text-center mt-5  md:w-[65%] md:text-start lg:w-full lg:text-start'>
                       Additional Details
                  </p>
                  <p className='text-xs text-[#667085] font-normal text-center mt-1 md:text-xs md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-sm'>
                       Provide any other releveant information about the quality of your commodity.
                  </p>
                  <div className='flex flex-col items-start justify-center w-full mt-7'>
                        <p className='text-xs font-medium text-center mb-1 md:text-start lg:w-full lg:text-start'>
                             Additional Comments
                        </p>
                        <textarea className='border-[1px] border-[#A4A4A4] w-full rounded-lg outline-black px-4 py-3 text-xs font-light'
                        placeholder='Your text goes here'
                       value={textValue}
                       onChange={handleChange}
                       rows={6}
                     />
                   </div>
            </div>


         <button onClick={handleSubmit}
        disabled={textValue === '' }
            className={`text-center text-sm font-normal text-white ${textValue === '' ? 'bg-[#dddddd]' : 'bg-black'} rounded-sm h-14 w-[80%] mt-12 md:w-[45%] 
            lg:w-[50%] lg:mt-14`}>
                                    Next
        </button>


    </motion.div>
  )
}

export default SellerPage3
