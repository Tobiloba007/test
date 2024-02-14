import React from 'react'
import tesla from '../../assets/icons/tesla.svg'
import toyota from '../../assets/icons/toyota.svg'
import mazda from '../../assets/icons/mazda.svg'
import tecno from '../../assets/icons/tecno.svg'
import audi from '../../assets/icons/audi.svg'

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full font-poppins bg-[#202020] py-7 px-6 md:py-10 md:px-10 lg:px-14 xl:px-24 xl:py-14'>
        <p className='text-[10px] text-white font-medium md:text-[11px] xl:text-[14px]'>
             TRUSTED BY:
        </p>

        <div className='flex flex-row flex-wrap items-center justify-center w-full mt-2 md:justify-between md:mt-4 xl:mt-8'>
            <img className='w-24 h-10 mt-3 mr-4 lg:w-28 lg:h-12 xl:w-32 xl:h-16'
            src={tesla} alt="tesla" />

            <img className='w-24 h-10 mt-3 mx-4 lg:w-28 lg:h-12 xl:w-32 xl:h-16'
            src={toyota} alt="tesla" />

            <img className='w-10 h-10 mt-3 mx-4 lg:w-12 lg:h-12 xl:w-16 xl:h-16'
            src={mazda} alt="tesla" />

            <img className='w-16 h-10 mt-3 mx-4 lg:w-20 lg:h-12 xl:w-24 xl:h-14'
            src={tecno} alt="tesla" />

            <img className='w-14 h-10 mt-3 mx-4 lg:w-14 lg:h-12 xl:w-20 xl:h-16'
            src={audi} alt="tesla" />
        </div>
    </div>
  )
}

export default TrustedBy