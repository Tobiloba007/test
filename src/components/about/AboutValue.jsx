import React from 'react'
import truck from '../../assets/icons/truck.svg'
import shield from '../../assets/icons/shield.svg'
import wallet from '../../assets/icons/wallet.svg'

const AboutValue = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full font-poppins pb-12 bg-white mt-12 rounded-t-[35px] px-6 
    md:mt-8 lg:px-16 lg:mt-10 xl:px-28 xl:h-[24.5rem] xl:mt-7'>
        <p className='text-[#101828] text-[14px] font-bold text-center md:text-[16px] lg:text-[19px] xl:text-[22px]'>
               VALUE WE OFFER
        </p>
        <div className='flex flex-row flex-wrap items-start justify-between w-full mt-14 lg:mt-16 xl:mt-20'>
           <div className='flex flex-col items-center justify-start w-[40%] md:w-[30%]'>
               <img className='h-11 w-11 xl:h-16 xl:w-16'
               src={shield} alt="truck icon" />
               <p className='text-[#2196F3] text-[14px] font-bold pt-3 text-center md:pt-4 lg:pt-5 lg:text-[16px] xl:text-[20px]'>
                    Sustainability
               </p>
               <p className='text-[#939393] text-[10px] font-normal text-center pt-1 md:w-[170px] md:text-[11px] lg:pt-3 lg:text-xs lg:w-[220px] xl:text-sm xl:w-[280px]'>
                    A 20% reduction in carbon footprint over the past five years.
               </p>
           </div> 

           <div className='flex flex-col items-center justify-start w-[40%] md:w-[30%]'>
                <img className='h-11 w-11 xl:h-16 xl:w-16'
                src={truck} alt="truck icon" />
                <p className='text-[#2196F3] text-[14px] font-bold pt-3 text-center md:pt-4 lg:pt-5 lg:text-[16px] xl:text-[20px]'>
                      Tracking Made Easy
                </p>
                <p className='text-[#939393] text-[10px] font-normal text-center pt-1 md:w-[170px] md:text-[11px] lg:pt-3 lg:text-xs lg:w-[220px] xl:text-sm xl:w-[280px]'>
                       Get access to a state of the art tracking system for your orders
                </p>
            </div> 


           <div className='flex flex-col items-center justify-start w-[100%] md:w-[30%]'>
                <img className='h-11 w-11 xl:h-16 xl:w-16'
                src={wallet} alt="truck icon" />
                <p className='text-[#2196F3] text-[14px] font-bold pt-3 text-center md:pt-4 lg:pt-5 lg:text-[16px] xl:text-[20px]'>
                      Easy Transactions
                </p>
                <p className='text-[#939393] text-[10px] font-normal text-center pt-1 w-[50%] md:w-[170px] md:text-[11px] lg:pt-3 lg:text-xs lg:w-[220px] xl:text-sm xl:w-[280px]'>
                        Enjoy a hassle-free experience with our streamlined and efficient transactions
                </p>
           </div> 

        </div>

    </div>
  )
}

export default AboutValue
