import React from 'react'
import image from '../../assets/images/image2.svg'
import { Link } from 'react-router-dom'


const HomeSection7 = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-white px-5 h-[15rem] md:flex-row md:items-center lg:justify-between 
    md:px-10 md:pb-0 lg:px-40 xl:px-80 xl:h-[18.5rem]'>
        <div className='flex flex-col items-center justify-start w-full md:items-start md:w-[60%] md:justify-center lg:w-[60%] xl:w-[100%]'>
            <p className='text-2xl text-[#c] font-semibold text-center md:text-start md:text-[23px] lg:text-[26px] lg:leading-10 xl:text-[37px] 
             xl:leading-[45px] '>
                 Trade minerals on OAT
            </p>
            <p className='text-xs font-light text-center mt-2 leading-5 w-[85%] md:text-start text-[#667085] lg:text-[13px] xl:text-[15px] xl:mt-4 xl:leading-7'>
                  Join OAT's platform for Effortless Resource Showcase and Sales, Redefining the Future of Global Trade.
            </p>
            <div className='flex items-center justify-center w-full md:justify-start'>
               <Link to='/register' className='flex justify-center items-center text-center h-10 w-[55%] text-xs rounded-3xl text-white bg-[#2196F3] mt-6 md:text-[11px] md:h-9 md:w-[40%] lg:w-[40%] 
               lg:text-[12px] lg:h-10 xl:mt-9 xl:h-11 xl:text-[14px] xl:w-[40%]'>
                    Get Started
               </Link>
            </div>
        </div>

        <div className='hidden md:flex items-center justify-start w-[50%] -mt-14'>
          <img className='w-[200px] h-[296px] absolute right-20 lg:right-36 xl:right-80 xl:w-[245px] xl:h-[353px]'
          src={image} alt="thumbs up" />
        </div>
    </div>
  )
}

export default HomeSection7