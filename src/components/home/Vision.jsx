import React from 'react'
import background from '../../assets/images/vision-bg.svg'

const Vision = () => {
  return (
    <div className='flex flex-row items-start justify-center w-full font-poppins bg-cover bg-center h-full py-12 px-6 md:px-10 xl:py-28' 
    style={{ backgroundImage: `url(${background})`}}>
        <div className='flex flex-col items-center justify-start w-full md:w-[85%] lg:w-[75%]'>
        <p className='text-sm font-medium text-white xl:text-lg'>
             Our Vision
        </p>

        <div className='flex flex-col items-center justify-center w-full mt-6 xl:mt-16'>
              <p className='text-lg text-white text-center font-semibold leading-6 md:text-[23px] md:leading-10 xl:text-[32px] xl:leading-[55px]'>
                   Leading the responsible sourcing of metals to meet the $10 trillion demand in the energy transition for a net-zero future
              </p>
              <p className='text-[10px] text-white text-center font-light leading-5 mt-5 md:text-[12px] lg:leading-6 xl:mt-7 xl:text-[15px] xl:leading-8 xl:w-[90%]'>
                   OAT anticipates responsible mining techniques to meet the rising demand for transition metals critical for energy transition technologies,
                    while aligning with the global aspiration for a net-zero future. The importance of the sector in the energy transition highlights OAT's 
                    commitment to setting a good example by prioritising responsible sourcing to meet the ever-increasing demand for essential metals.
              </p>
        </div>
        </div>

    </div>
  )
}

export default Vision