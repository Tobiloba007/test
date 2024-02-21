import React from 'react'
import map from '../../assets/images/map.svg'
import { Link } from 'react-router-dom'

const HomeSection5 = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full bg-[#0F1828] px-5 py-16 md:flex-row-reverse md:items-center lg:justify-between 
    md:px-10 lg:px-24 lg:py-12 xl:py-20'>
        <div className='flex flex-col items-center justify-start w-[80%] md:items-start lg:w-[40%]'>
            <p className='text-2xl text-white font-semibold text-center md:text-start md:text-[23px] lg:text-[26px] lg:leading-10 xl:text-[35px] 
            xl:w-[80%] xl:leading-[45px] '>
                 Our Mineral presence in Nigeria!
            </p>
            <p className='text-xs font-light text-center mt-5 leading-5 text-[#D0D5DC] lg:text-[13px] xl:text-[15px] xl:mt-6'>
                  Discover Available Metric Tons Accross States.
            </p>
            <Link to={{ pathname: '/locations', search: '?sectionId=location'}} className='flex items-center justify-center w-full md:justify-start'>
               <button className='text-center h-10 w-[45%] text-xs rounded-3xl text-white bg-[#2196F3] mt-8 md:text-[11px] md:h-9 lg:w-[40%] 
               lg:text-[12px] lg:h-10 xl:mt-9 xl:h-11 xl:text-[14px] xl:w-[35%]'>
                    Explore Locations
               </button>
            </Link>
        </div>

        <div className='flex flex-row items-center justify-start w-full mt-20 md:mt-0 md:justify-start lg:w-[50%]'>
          <img className='w-full h-full md:w-[85%] md:h-[85%] lg:w-[100%] lg:h-[100%]'
          src={map} alt="map" />
        </div>
    </div>
  )
}

export default HomeSection5