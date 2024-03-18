import React from 'react'
import circle from '../../assets/icons/circle.svg'
import { MdOutlineAdd } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import metal from '../../assets/images/metalDisplay.svg'
import { Link } from 'react-router-dom';


const HomeSection4 = () => {

    const metals = [
        {
            metal: 'Al',
            name: 'Aluminium',
            desc: 'A lightweight metal with multiple uses from beverage to aircraft',
        },
        {
            metal: 'Cu',
            name: 'Copper',
            desc: 'The metal of electrification and crucial to the energy transition.',
        },
        {
            metal: 'Li',
            name: 'Lithium',
            desc: 'An essential component of rechargeable batteries.',
        },
        {
            metal: 'Ni',
            name: 'Nickel',
            desc: 'Used to make stainless steel and also in EV batteries.',
        },
        {
            metal: 'Pb',
            name: 'Lead',
            desc: 'Lead batteries are widely used, including powering data centres and vehicles.',
        },
    ]

  return (
    <div className='flex flex-col items-center justify-center w-full py-14 px-6 font-poppins md:px-10 lg:flex-row-reverse lg:items-start lg:justify-between 
    lg:py-20 lg:px-14 xl:px-24'>

        <div className='flex flex-col items-center justify-start w-full lg:w-[50%] lg:items-end'>
            <div className='flex flex-row items-center justify-center w-full lg:w-[80%] lg:mr-3 xl:mr-7'>
               <p className='text-center text-lg font-semibold md:w-[60%] lg:w-full  xl:text-2xl'>
                    A leader in the independent supply of metals on a global scale.
               </p>
            </div>

            <div className='flex flex-row flex-wrap items-center justify-between w-full mt-5 md:justify-start lg:items-start lg:w-full lg:justify-end'>
                {metals.map((item, index) => {
                    return (
                <div key={index} className='flex flex-col items-center justify-start mt-5 md:mx-5 lg:mx-2 xl:mt-8'>
                    <div className='relative flex flex-col items-center justify-center'>  
                        <img className='h-16 w-16 lg:h-[58px] lg:w-[58px] xl:h-20 xl:w-20'
                        src={circle} alt="ring" />
                        <p className='absolute text-[27px] font-normal text-[#2296F3] lg:text-[21px] xl:text-[25px]'>
                              {item.metal}
                        </p>
                    </div>
                    <p className='text-[11px] font-semibold text-[#0F1828] mt-2 xl:text-[14px]'>
                              {item.name}
                     </p>
                    <p className='text-[9px] text-center font-light text-[#667085] mt-1 w-[150px] md:w-[130px] lg:text-[7px] lg:w-[120px] xl:text-[10px] xl:w-[175px]'>
                             {item.desc}
                     </p>
                </div>
                    )
                })}
                <div className='flex flex-col items-center justify-start mt-5 md:mx-5 lg:mx-2 xl:mt-8'>
                    <div className='relative flex flex-col items-center justify-center'>  
                        <img className='h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'
                        src={circle} alt="ring" />
                        <MdOutlineAdd className='absolute  text-[#2296F3] text-2xl xl:text-3xl' />
                    </div>
                    <p className='text-[11px] font-semibold text-[#0F1828] mt-2 xl:text-[14px]'>
                            Other Metals
                     </p>
                    <p className='text-[9px] text-center font-light text-[#667085] mt-1 w-[150px] md:w-[130px] lg:text-[7px] lg:w-[120px] xl:text-[10px] xl:w-[175px]'>
                            Gold, silver, PGMs, germanium, gallium and other by-products.
                     </p>
                </div>

            </div>

            <div className='flex flex-row items-center justify-center w-full'>
               <Link to='/login' className='flex flex-row items-center justify-center w-[165px] border-[1.5px] border-[#CDD2D9] h-12 rounded-[15px] mt-12 md:h-11 lg:ml-12 xl:h-12 xl:w-[185px] xl:ml-16'>
                       <p className='text-[12px] font-medium text-[#0F1828] md:font-normal xl:text-[13px]'>
                             Buy Commodities
                       </p>
                       <IoArrowForwardSharp className='ml-2' />
               </Link>
            </div>

        </div>


        <div className='flex flex-col items-center justify-center w-full mt-12 md:mt-24 md:w-[75%] lg:mt-0 lg:w-[50%]'>
            <img src={metal} alt="metal displays" />
        </div>

    </div>
  )
}

export default HomeSection4