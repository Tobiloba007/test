import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setUserRequest } from '../../features/requests/RequestSlice';
import { buyerRequest } from '../../features/requests/RequestActions';
import { useNavigate } from 'react-router-dom';


const BuyerPage7 = ({setCount}) => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

      const [textValue, setTextValue] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const userRequests = useSelector((state) => state.request.userRequests)


      const dispatch = useDispatch();

      const navigate = useNavigate();

      const handleChange = (event) => {
        setTextValue(event.target.value);
      };

      const values = {'Notes': textValue}

      const handleSubmit = () => {
        const userRequest = {...userRequests, ...values}
        dispatch(setUserRequest(userRequest))
        dispatch(buyerRequest(userRequest, setError, setCount, setLoading, navigate, dispatch))
        console.log(userRequest);
      }


  return (
    <motion.div
    initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.4 }}
      className='relative flex flex-col items-center justify-center w-full mt-20 pb-24 md:px-12 lg:items-start lg:pl-10 lg:mt-10 xl:pl-28 xl:mt-12'
    >

    <div className='flex flex-col items-center justify-center w-full md:flex-row-reverse lg:justify-end'>
            <p className='text-xs text-black font-normal mb-1 md:mb-0 md:ml-4 md:text-sm'>
                   100% Complete
            </p>
            <div className='flex items-center justify-start w-[80%] h-[5px] rounded-2xl bg-[#dddddd] md:w-[75%] md:h-[7px] lg:w-[70%] xl:w-[75%]'>
                  <div className='flex items-center justify-start w-[100%] h-full rounded-full bg-green-500'></div>
            </div>
    </div>
    <div className='flex flex-col items-center justify-center w-full mt-8 mb-7 md:items-center'>
                <p className='text-xl font-semibold text-center md:text-2xl md:text-start lg:w-full lg:text-start xl:text-[27px]'>
                        Any additional details?
                </p>
                <p className='text-xs text-[#667085] font-normal text-center mt-2 md:text-xs md:text-start lg:w-full lg:text-start xl:text-sm'>
                        Please provide any additional information you would like us to consider
                </p>
    </div>

    <div className='flex flex-col items-start justify-center w-full mt-7'>
         <p className='text-sm font-semibold text-center mb-1 md:text-start lg:w-full lg:text-start'>
              Additional Comments
         </p>
         <textarea className='border-[1px] border-[#A4A4A4] w-full rounded-lg outline-black px-4 py-3 text-sm font-light'
         placeholder='Your text goes here'
        value={textValue}
        onChange={handleChange}
        rows={6}
      />
    </div>

    <div className='text-xs text-medium text-red-500 mt-12 mb-2 lg:mt-14 xl:text-sm'>{error}</div>
    <button onClick={handleSubmit}
    disabled={textValue === '' || loading}
            className={`flex items-center justify-center text-sm font-normal text-white ${textValue === '' || loading === true ? 'bg-[#dddddd]' : 'bg-black'} rounded-sm h-14 w-[80%] md:w-[45%] lg:w-[50%]`}>
            { loading
              ?<div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full">
                 <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
              </div>
              : 'Submit Request'
             }
        </button>
        
    </motion.div>
  )
}

export default BuyerPage7
