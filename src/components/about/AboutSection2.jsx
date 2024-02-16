import React from 'react'
import { GoDotFill } from "react-icons/go";
import image from '../../assets/images/aboutImg2.svg'


const AboutSection2 = () => {
    const items = ['Commodity Trading', 'Logistics and Transaportation', 'Data Mining and Analytics', 'Ethical Trade Practices', 'Environmental Sustainability Initiatives', 'Technological Innovation', 'Managed-Metal Marketplace']

  return (
    <div className='flex flex-col items-start justify-start w-full font-poppins py-14 px-5 md:flex-row-reverse md:justify-between md:items-center md:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 xl:py-32'>
         <div className='flex flex-col items-start justify-start w-full md:w-[42%] lg:w-[40%] xl:w-[44%]'>
               <p className='text-sm font-semibold text-[#101828] lg:text-base lg:font-bold xl:text-xl xl:w-[80%]'>
                    WE CONSISTENTLY DELIVER EXCEPTIONAL RESULTS IN:
               </p>
               <div className='flex flex-col items-start justify-start w-full mt-4 lg:mt-3 xl:mt-5'>
                     {items.map((item, index)=>{
                        return(
                            <div key={index} className='flex flex-row items-center justify-start my-3 md:my-2 lg:my-3'>
                                <GoDotFill className='text-[10px] text-[#2196F3] lg:text-[11px] xl:text-[14px]' />
                                <p className='text-xs font-normal text-[#101828] ml-3 lg:text-sm lg:ml-5 xl:text-lg xl:ml-6'>
                                     {item}
                                </p>
                            </div>
                        )
                     })}
               </div>

         </div>

         <div className='flex flex-row items-center justify-start w-full mt-10 md:w-[50%] md:mt-0 xl:w-[44%]'>
               <img className='w-full h-full'
               src={image} alt='mineral resources visual' />
         </div>

    </div>
  )
}

export default AboutSection2
