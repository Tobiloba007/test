import React from 'react'
import Navbar from '../general/Navbar'
import background from '../../assets/images/intro-bg.svg'
import logo from '../../assets/images/obaLogo.svg'
import logo2 from '../../assets/images/obaLogo2.svg'
import metal1 from '../../assets/images/Metal1.svg'
import metal2 from '../../assets/images/Metal2.svg'
import metal3 from '../../assets/images/Metal3.svg'

const OurMetalsIntro = () => {
    const metals = [
        {
            image: metal1,
            title: 'Lead',
        },
        {
            image: metal2,
            title: 'Aluminuin',
        },
        {
            image: metal3,
            title: 'Lithium',
        },
        {
            image: metal3,
            title: 'Iron',
        },
        {
            image: metal1,
            title: 'Tin',
        },
        {
            image: metal3,
            title: 'Silver',
        },
    ]


  return (
    <>
    <div className='flex flex-col items-center justify-center w-full mx-auto max-w-screen-2xl h-[16rem] font-poppins z-20 bg-cover bg-center'  
    style={{ backgroundImage: `url(${background})`}}>
    <div className='absolute top-0 h-[16rem] w-full mx-auto max-w-screen-2xl bg-[#000000] opacity-50'></div>
    <div className='flex flex-row items-center justify-center absolute top-0 w-full pt-3 z-30'>
         <Navbar logo={logo} logo2={logo2} text2={'#FFFFFF'} metal={'#2196F3'} regBackground={'#2196F3'} reg={'#FFFFFF'} />
    </div>

     <div className='flex flex-col items-center justify-center w-full mt-14 z-20 xl:mt-20 px-5 md:px-10 lg:px-14 xl:px-20'>
          <p className='text-lg text-white font-semibold md:text-[25px] lg:text-[27px] xl:text-[37px]'>
                 OUR METALS
          </p>
          <p className='text-[11px] text-center text-white font-normal leading-6 mt-1 md:mt-3 md:text-[12px] lg:leading-8 lg:w-[85%] xl:w-[80%] xl:mt-7 xl:text-[15px] xl:leading-10'>
                 Your Premium Source For Quality Minerals and Metals
          </p>
    </div>

    
    </div>


    <div className='flex flex-row flex-wrap items-center justify-between w-ful z-20 px-5 my-8 md:px-10 lg:px-14 xl:px-20 xl:my-12'>
         {metals.map((item, index) => {
            return(
                <div key={index} className='flex flex-row items-end justify-start w-full h-52 px-12 pb-12 my-4 z-20 bg-cover bg-center md:w-[30.5%] md:h-44 
                md:px-8 md:py-8 lg:w-[30.8%] lg:h-48 xl:w-[31.2%] xl:h-72 xl:my-5 xl:px-11 xl:py-12' 
                style={{ backgroundImage: `url(${item.image})`}}>
                    <p className='text-xl text-white font-semibold md:text-xl lg:text-2xl xl:text-3xl'>
                         {item.title}
                    </p>
                </div>
            )
         })}
    </div>

    </>
  )
}

export default OurMetalsIntro
