import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { BsDownload } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setUserRequest } from '../../features/requests/RequestSlice';




const SellerPage4 = ({setCount}) => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

      const [file, setFile] = useState(null);
      const [error, setError] = useState(null);
      const fileInputRef = useRef(null);

      const userRequests = useSelector((state) => state.request.userRequests)

      const dispatch = useDispatch();


      const handleFileChange = (event) => {
        setFile(event.target.files[0]);

      //  if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
      //        setError('file upload successfull');
      //        console.log('successfull');
      //  } else {
      //   setError('Please select a valid PDF file or image.');
      //  }
     };

     const handleButtonClick = () => {
      fileInputRef.current.click();
    };

    const handleSubmit = () => {
      setCount(6)
      const values = {'certification': file}
      const combinedValues4 = {...values, ...userRequests}
      dispatch(setUserRequest(combinedValues4))
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
                    80% Complete
             </p>
             <div className='flex items-center justify-start w-[80%] h-[5px] rounded-2xl bg-[#dddddd] md:h-[7px] lg:w-[60%] xl:w-[75%]'>
                   <div className='flex items-center justify-start w-[80%] h-full rounded-full bg-green-500'></div>
             </div>
         </div>
         <div className='flex flex-col items-center justify-center w-full mt-8 md:items-start'>
             <p className='text-xl font-semibold text-center md:text-2xl md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-[27px]'>
                    Choose relevant certification
             </p>
             <p className='text-xs text-[#667085] font-normal text-center mt-2 md:text-xs md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-sm'>
                    Choose the relevant certifications your commodity adheres to.
             </p>
         </div>

         <div className='flex flex-col items-start justify-start w-full mt-10'>
            <div className='flex flex-col items-center justify-center h-60 w-full bg-[#eeeeee] md:w-[60%] lg:w-[80%] xl:w-[60%]'>
               <div className='flex flex-col items-center justify-center h-[95%] w-[95%] border-[#A4A4A4] border-2 border-dashed px-5'>
                     <input
                     className='hidden'
                     ref={fileInputRef}
                    type="file"
                    accept=".pdf, .jpg, .jpeg, .png"
                    onChange={handleFileChange}
                    />
                    {file 
                      ?<div className='flex flex-col items-center justify-center w-full'>
                          <p className='text-sm text-center font-medium text-black text mt-5 w-[80%] xl:w-[75%]'>
                               Certifications uploaded successfully !
                          </p>
                          <IoCheckmarkCircle className='text-[40px] text-green-500 mt-2' />
                          <p onClick={handleButtonClick}
                          className='text-xs text-center font-semibold text-black text mt-8 w-[80%]'>
                               upload a different file
                          </p>
                      </div>
                      :<div className='flex flex-col items-center justify-center w-full'>
                          <BsDownload onClick={handleButtonClick} className='text-[60px] text-[#aaaaaa]' />
                          <p className='text-xs text-center font-normal text-black text mt-5 w-[80%]'>
                              <b>upload relevant certification</b> in pdf or image format.
                          </p>
                          <div className='text-xs text-center text-medium text-red-500 mt-4 xl:text-sm'>{error}</div>
                      </div>
                     } 
               </div>
            </div>

         </div>


         <button onClick={handleSubmit}
           disabled={file === null }
            className={`text-center text-sm font-normal text-white ${file === null ? 'bg-[#dddddd]' : 'bg-black'} rounded-sm h-14 w-[80%] mt-12 mb-2 lg:mt-14 md:w-[45%] lg:w-[50%]`}>
                                    Next
         </button>
    </motion.div>
  )
}

export default SellerPage4
