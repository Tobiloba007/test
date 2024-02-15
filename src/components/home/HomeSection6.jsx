import React from 'react'
import background from '../../assets/images/background2.svg'

const HomeSection6 = () => {
  return (
    <div className='flex flex-col items-center justify-end relative w-full bg-white font-poppins md:flex-row md:justify-end'>
        <div className='flex flex-col items-start justify-center py-12 bg-[#0F1828] rounded-lg mt-10 px-8 w-[80%] -mb-28 z-20 md:w-[43%] 
        md:mb-0 md:mt-0 md:absolute md:left-10 md:py-10 lg:w-[35.5%] lg:left-24 lg:py-14 xl:w-[36%] xl:px-11'>
            <p className='text-[22px] text-white font-medium xl:font-semibold xl:text-[32px] xl:leading-[45px]'>
                Showcase and Sell Your Resources on OAT.
            </p>
            <p className='text-[9px] font-light text-[#CED3D9] pt-3 lg:text-[10px] xl:text-[14px] xl:pt-4'>
                Join OAT's Platform for Effortless Resource Showcase and Sales, Redefining the Future of Global Trade.
            </p>
            <button className='text-[10px] font-normal h-9 w-[125px] rounded-3xl text-center bg-[#2196F3] mt-7 text-white xl:mt-9 xl:h-11 
            xl:w-[150px] xl:text-xs'>
                   Get Started
            </button>
        </div>

        <div className='flex flex-col items-center justify-end h-full md:w-[75%] xl:w-[78%]'>
          <img className='w-full h-full'
          src={background} alt="Get started" />
        </div>

    </div>
  )
}

export default HomeSection6