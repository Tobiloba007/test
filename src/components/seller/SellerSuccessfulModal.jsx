import React from 'react'
import { GoCheckCircleFill } from "react-icons/go";
import { GoCheckCircle } from "react-icons/go";
import { Link } from 'react-router-dom';



const SellerSuccessfulModal = () => {
  return (
    <div className='absolute top-[3%] flex flex-row items-center justify-center w-full h-full z-50 px-8'>

            <div className='flex flex-col items-center justify-start w-full bg-white shadow-lg rounded-lg pt-10 px-4 pb-4 md:w-[50%] lg:w-[40%] lg:px-5 xl:w-[28%]'>
                  <GoCheckCircleFill className='text-[40px] text-[#09D945]' />

                  <div className='flex flex-col items-start justify-start w-full mt-8'>
                       <p className='text-sm font-semibold text-black lg:text-base'>
                             Upload Request Successfully Submitted!
                       </p>
                       <p className='text-[9px] font-normal text-[#667085] mt-3 lg:text-[10px]'>
                            Your commodity request has been submitted and is awaiting approval! Check your dashboard to see its fulfilment status. An agent will be in touch with you shortly!
                       </p>
                       <p className='text-[10px] font-semibold text-black mt-5 lg:text-xs'>
                              What's Next?
                       </p>

                       <div className='flex flex-row items-start justify-start mt-5'>
                             <div className='flex flex-col items-center justify-start'>
                                   <GoCheckCircle className='text-[23px] text-[#09D945]' />
                                   <div className='h-4 border-[1px] border-[#09D945] my-[6px]'></div>
                                   <GoCheckCircle className='text-[23px] text-[#09D945]' />
                                   <div className='h-4 border-[1px] border-[#09D945] my-[6px]'></div>
                                   <GoCheckCircle className='text-[23px] text-[#09D945]' />

                             </div>

                             <div className='flex flex-col items-start justify-start ml-2'>
                                  <p className='text-[9px] font-normal text-[#667085] lg:text-[10px]'>
                                       You will be contacted by our agent confirm and verify your identity. You can check your dashboard to see your verification status.
                                  </p>

                                  <p className='text-[9px] font-normal text-[#667085] mt-2 lg:text-[10px]'>
                                       After verification, your upload will be verified by our Operations and Quality Control team
                                  </p>

                                  <p className='text-[9px] font-normal text-[#667085] mt-2 lg:text-[10px] lg:mt-5'>
                                        You can proceed to your dashboard, and see some of our off-takers purchase request and choose to fulfil them
                                  </p>
                             </div>
                       </div>

                       <div className='flex flex-row items-center justify-between w-full mt-8'>
                             <Link to='/seller-dashboard' className='flex items-center justify-center text-[10px] h-12 w-[48.5%] bg-black text-white rounded-sm lg:text-xs lg:font-medium'>
                                    Go to Dashboard
                             </Link>
                             <Link to='/' className='flex items-center justify-center text-[10px] h-12 w-[48.5%] bg-white text-black rounded-sm border-[1px] border-[#A4A4A4] lg:text-xs lg:font-medium'>
                                    Back to Home
                             </Link>
                       </div>
                  </div>

            </div>
    </div>
  )
}

export default SellerSuccessfulModal
