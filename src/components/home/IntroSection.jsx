import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiMiniArrowRight } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";
import truck from '../../assets/icons/truck.svg'
import shield from '../../assets/icons/shield.svg'
import wallet from '../../assets/icons/wallet.svg'
import background from '../../assets/images/intro-bg.svg'
import Navbar from '../general/Navbar';
import logo from '../../assets/images/obaLogo.svg'
import logo2 from '../../assets/images/obaLogo2.svg'
import { Link } from 'react-router-dom';




const IntroSection = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full font-poppins z-20 bg-cover bg-center pt-3'  
    style={{ backgroundImage: `url(${background})`}}>
    <div className='absolute top-0 h-full w-full bg-[#000000] opacity-30'></div>
     <Navbar logo={logo} logo2={logo2} text2={'#FFFFFF'} regBackground={'#2196F3'} reg={'#FFFFFF'} />
        {/* INTRO TOP */}
        <div className='flex flex-col items-center justify-center w-full mt-12 lg:mt-8 px-6 z-30'>
            <div className='flex flex-row items-center justify-between w-[160px] h-9 rounded-[30px] backdrop-blur-sm border-b-[1px] 
            border-white px-3 shadow-inner md:w-[165px] xl:w-[190px] xl:px-5'>
                  <p className='text-white text-[10px] font-light z-50 xl:text-[11px]'> 
                      Secure
                  </p>
                  <MdOutlineKeyboardArrowRight className='text-white h-3 w-3 z-50 xl:h-4.5 xl:w-4.5' />
                  <p className='text-white text-[10px] font-light xl:text-[11px]'>
                      Global
                  </p>
                  <MdOutlineKeyboardArrowRight className='text-white h-3 w-3 z-50 xl:h-4.5 xl:w-4.5' />
                  <p className='text-white text-[10px] font-light xl:text-[11px]'>
                      Exclusive
                  </p>

            </div>

            <div className='flex flex-col items-center justify-center w-full mt-4'>
                <p className='text-[30px] text-center text-white font-semibold leading-[42px] lg:text-[35px] xl:text-[43px]'>
                    Mineral Trading for a Sustainable Future
                </p>
                <p className='text-[12px] text-center text-white font-normal leading-6 mt-2 md:text-[15px] lg:text-[16px] xl:text-[19px] xl:mt-4'>
                    Your Premium Source for Quality Minerals and Metals
                </p>
            </div>

            <div className='flex flex-row flex-wrap items-center justify-center w-full mt-7 md:mt-6 lg:mt-8'>
                <Link to='/login' className='flex flex-row items-center justify-center w-[150px] h-10 bg-white rounded-[30px] mt-3 ml-3 md:h-10 lg:h-12 lg:w-[170px]'>
                      <p className='text-black text-[11px] font-normal lg:text-[12px]'>
                          Buy Commodities
                      </p>
                      <HiMiniArrowRight className='ml-1 h-4 w-4 text-black lg:ml-2' />
                </Link>

                <Link to='/login'
                 className='flex flex-row items-center justify-center w-[150px] h-10 bg-black rounded-[30px]  mt-3 ml-3 md:h-10 md:ml-6 lg:h-12 lg:w-[170px] xl:ml-7'>
                      <p className='text-white text-[11px] font-normal'>
                           Sell a Commodity
                      </p>
                      <HiMiniArrowRight className='ml-1 h-4 w-4 text-white lg:ml-2' />
                </Link>
            </div>

            <div className='flex flex-wrap flex-row items-center justify-center w-full mt-6 md:mt-7 lg:mt-8'>
                {/* STARS CONTAINER */}
                <div className='flex flex-row items-center justify-center w-full md:w-[17%] lg:w-[15%] xl:w-[10.5%]'>
                     <div className='flex items-center justify-center w-5 h-5 bg-[#00B4A1] mx-[1px] lg:w-6 lg:h-6'>
                         <IoStar className='w-3.5 h-3.5 text-white lg:w-4 lg:h-4' />
                     </div>
                     <div className='flex items-center justify-center w-5 h-5 bg-[#00B4A1] mx-[1px] lg:w-6 lg:h-6'>
                         <IoStar className='w-3.5 h-3.5 text-white lg:w-4 lg:h-4' />
                     </div>
                     <div className='flex items-center justify-center w-5 h-5 bg-[#00B4A1] mx-[1px] lg:w-6 lg:h-6'>
                         <IoStar className='w-3.5 h-3.5 text-white lg:w-4 lg:h-4' />
                     </div>
                     <div className='flex items-center justify-center w-5 h-5 bg-[#00B4A1] mx-[1px] lg:w-6 lg:h-6'>
                         <IoStar className='w-3.5 h-3.5 text-white lg:w-4 lg:h-4' />
                     </div>
                     <div className='relative flex flex-row items-center justify-end w-5 h-5 bg-[#00B4A1] mx-[1px] lg:w-6 lg:h-6'>
                        <div className='flex items-center justify-center w-[20%] h-full bg-[#DADBDC] lg:w-[30%]'></div>
                        <IoStar className='absolute left-1 w-4 h-4 text-white' />
                     </div>
                </div>

                <div className='flex flex-row items-center justify-center mt-3 md:mt-0'>
                    <p className='text-[10px] text-white lg:text-[10px] font-light'>
                       Rated <b> 4.8</b> | 2628 reviews
                    </p>
                </div>

            </div>

        </div>



                {/* INTRO BOTTOM */}
        <div className='flex flex-col items-center justify-start w-full pb-12 bg-white mt-5 rounded-t-[35px] px-6 pt-8 z-30 md:h-80 
        lg:px-16 lg:mt-6 xl:px-44 xl:h-[24.5rem] xl:mt-7'>
            <p className='text-[#000000] text-[14px] font-medium text-center lg:text-[15px] xl:text-[17px]'>
                   Uncover a World of Advantages
            </p>
            <div className='flex flex-row flex-wrap items-center justify-between w-full mt-10'>
               <div className='flex flex-col items-center justify-start w-[40%] md:mt-0 md:w-[30%]'>
                    <img className='h-16 w-16 xl:h-20 xl:w-20'
                    src={truck} alt="truck icon" />
                    <p className='text-black text-[12px] font-semibold pt-3 text-center'>
                          Tracking Made Easy
                    </p>
                    <p className='text-[#939393] text-[9px] font-light text-center pt-1 md:w-[170px]'>
                           Get access to a state of the art tracking system for your orders
                    </p>
                </div> 

               <div className='flex flex-col items-center justify-start w-[40%] md:mt-5 md:w-[30%] xl:mt-11'>
                    <img className='h-16 w-16 lg:h-[75px] lg:w-[75px] xl:h-[85px] xl:w-[85px]'
                    src={shield} alt="truck icon" />
                    <p className='text-black text-[12px] font-semibold pt-3 text-center'>
                         Tested & Trusted
                    </p>
                    <p className='text-[#939393] text-[9px] font-light text-center pt-1 md:w-[170px]'>
                         Count on our tested and trusted processes for reliable transactions
                    </p>
                </div> 

               <div className='flex flex-col items-center justify-start w-[100%] mt-5 md:w-[30%]'>
                    <img className='h-16 w-16 xl:h-20 xl:w-20'
                    src={wallet} alt="truck icon" />
                    <p className='text-black text-[12px] font-semibold pt-3 text-center'>
                          Easy Transactions
                    </p>
                    <p className='text-[#939393] text-[9px] font-light text-center pt-1 w-[50%] md:w-[170px]'>
                            Enjoy a hassle-free experience with our streamlined and efficient payment system
                    </p>
                </div> 

            </div>

        </div>

    </div>
  )
}

export default IntroSection