import React from 'react'
import Navbar from '../general/Navbar'
import background from '../../assets/images/vision-bg.svg'
import logo from '../../assets/images/obaLogo.svg'
import logo2 from '../../assets/images/obaLogo2.svg'

const AboutIntro = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen font-poppins z-20 bg-cover bg-center'  
    style={{ backgroundImage: `url(${background})`}}>
    <div className='absolute top-0 h-screen w-full bg-[#000000] opacity-10'></div>
    <div className='flex flex-row items-center justify-center absolute top-0 w-full pt-3'>
         <Navbar logo={logo} logo2={logo2} text2={'#FFFFFF'} linkTexts={'#FFFFFF'} about={'#2196F3'} regBackground={'#2196F3'} reg={'#FFFFFF'} />
    </div>

     <div className='flex flex-col items-start justify-center w-full mt-14 z-30 xl:mt-20 px-5 md:px-10 lg:px-14 xl:px-20'>
          <p className='text-lg text-white font-semibold md:text-[25px] lg:text-[27px] xl:text-[37px]'>
                 Who are we
          </p>
          <p className='text-[10px] text-white font-normal leading-6 mt-2 md:mt-3 md:text-[12px] lg:leading-8 lg:w-[85%] xl:w-[80%] xl:mt-7 xl:text-[15px] xl:leading-10'>
               Oba of All Trades is a leading trader of minerals needed for the energy transition, such as Lithium, Copper, Zinc, Lead, Manganese, Graphite, and Tin. We have a network of suppliers and customers in the energy transition sector, and we are committed to providing our customers with the highest quality products and services at competitive prices.
               <br />
               We understand the importance of these minerals for the future of energy, and we are committed to playing our role in the global transition to a clean energy future. We work closely with our customers to understand their needs and provide them with the minerals they need to succeed.
               <br />
               OAT is committed to fair trade, environmental sustainability, and technological innovation. With tailored services for our partners, suppliers, off-takers, and investors
          </p>
    </div>

    </div>
  )
}

export default AboutIntro
