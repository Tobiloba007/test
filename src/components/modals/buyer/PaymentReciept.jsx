import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { IoCloudUpload } from "react-icons/io5";
import { ImFilePdf } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { uploadReceipt } from '../../../features/buyer/BuyerActions';
import { useDispatch } from 'react-redux';





const PaymentReciept = ({setPayment, setOpenModal}) => {
    const slideInVariants = {
        hidden: { y: '100%' },
        visible: { y: 0 },
      };

      const [file, setFile] = useState(null);
      const fileInputRef = useRef(null);
      const [fileName, setFileName] = useState('');

      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const dispatch = useDispatch();

      const handleFileChange = (event) => {
        setFile(event.target.files[0]);
     };

     const handleButtonClick = () => {
        fileInputRef.current.click();
      };

     const handleBackBtn = () => {
        setPayment(false)
        setOpenModal(true)
      };

      const handleSendFile = () => {
        const values = {'receipt': file}
        const formData = new FormData();
            Object.keys(values).forEach((key) => {
              formData.append(key, values[key]);
            });
        dispatch(uploadReceipt(formData, setError, setLoading, setPayment))
      }


      useEffect(()=> {
        if (file) {
            setFileName(file.name)
        }
      }, [file])


  return (
    <motion.div 
    initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.5 }}
    className='flex flex-col items-start justify-center w-[85%] bg-white rounded-md px-7 py-5 z-50 md:w-[50%] lg:w-[45%] xl:w-[45%] xl:px-9 xl:py-7'>
          <div className='flex flex-col items-start justify-start w-full'>
              <p className='text-xs text-[#101828] font-medium lg:font-semibold xl:text-sm'>
                 Upload your payment receipt
              </p>
              <p className='text-[10px] text-[#667085] font-normal xl:text-xs'>
                 Upload your payment receipt/proof of payment
              </p>
          </div>

          {
          file
          ?<div className='relative flex flex-col items-center justify-center w-[45%] h-28 border-[2px] border-dashed border-[#D0D5DD] rounded-md mt-6 xl:h-32 xl:w-[40%]'>
               <ImFilePdf className='text-[33px] text-[#D0D5DD] xl:text-[40px]' />
               <p className='text-[9px] text-center text-[#667085] font-mornal mt-2 break-words xl:text-xs'>
                 {fileName}
              </p>
              <div onClick={()=>setFile(null)}
              className='absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-[#E6E6E6]'>
                 <IoMdClose className='text-sm text-gray-600' />
              </div>
          </div>
          :<div className='flex flex-col items-center justify-center w-full py-2 border-[1px] border-dashed border-[#D0D5DD] rounded-md mt-6 lg:border-[2px]'>
              <IoCloudUpload className='text-2xl text-[#2196F3] xl:text-3xl' />
              <p className='text-[10px] text-[#101828] font-medium mt-2 xl:text-xs'>
                  Choose File
              </p>
              <p className='text-[8px] text-center text-[#667085] font-normal mt-1 xl:text-[10px]'>
                  Attach your payment reciept/proof of<br />payment
              </p>
              <p className='text-[8px] text-center text-[#667085] font-normal xl:text-[10px]'>
                  File Format <b className='font-semibold'>PDF, docx</b> Maximum Size <b className='font-semibold'>10mb</b>
              </p>
           </div>
          }

          <input
            className='hidden'
            ref={fileInputRef}
            type="file"
            accept=".pdf, .jpg, .jpeg, .png"
            onChange={handleFileChange}
           />

           <p className='text-red-600 text-[10px] font-normal mt-4 pl-1'>{error}</p>
          <div className='flex items-center justify-between w-full mt-2'>
                <button onClick={file ? handleSendFile : handleButtonClick}
                className='flex items-center justify-center text-[9px] text-white w-full h-8 rounded-md font-medium bg-black mr-2 xl:text-[11px] xl:h-10'>
                   { loading
                    ?<div className="relative flex items-center justify-center w-6 h-6 border-[3px] border-gray-500 border-solid rounded-full">
                       <div className="absolute w-6 h-6 border-t-[3px] border-white border-solid rounded-full animate-spin"></div>
                    </div>
                    : 'Upload file'
                   }
                </button>

                <button onClick={handleBackBtn}
                 className='text-[9px] text-blacl text-center w-full h-8 rounded-md font-medium bg-white border-[#D0D5DD] border-[1px] xl:text-[11px] xl:h-10'>
                       Back
                </button>
          </div>

    </motion.div>
  )
}

export default PaymentReciept
