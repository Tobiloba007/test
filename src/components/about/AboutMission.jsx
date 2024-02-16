import React from 'react'
import { LuDot } from "react-icons/lu";
import metal from '../../assets/images/metalDisplay.svg'



const AboutMission = () => {
  return (
    <div className='flex flex-col item-start justify-start w-full font-poppins py-12 md:flex-row md:justify-between md:items-start md:px-5 lg:px-14 lg:py-16 xl:px-16'>
        <div className='flex flex-col item-start justify-start w-full md:w-[45%] lg:w-[50%] xl:w-[45%]'>
             <div className='flex flex-col item-start justify-start w-full px-5'>
                  <p className='text-base font-bold text-[#101828] xl:text-2xl'>
                       Our Mission
                  </p>
                  <p className='text-xs font-medium text-[#101828] pt-3 leading-6 lg:pt-3 xl:text-base'>
                       Bridging the global demand and supply gap, leveraging Africa's natural resources.
                  </p>
             </div>

             <div className='flex flex-col item-start justify-start w-full mt-8 px-5 lg:mt-3 xl:mt-8'>
                  <p className='text-base font-bold text-[#101828] xl:text-2xl'>
                       Our Vision
                  </p>
                  <p className='text-xs font-medium text-[#101828] pt-3 leading-6 lg:pt-2 xl:text-base'>
                        Bridging the world's needs with Africa's natural resources.
                  </p>
             </div>

             <div className='flex flex-col item-start justify-start w-full mt-8 lg:mt-3 xl:mt-8'>
                  <p className='text-base font-bold text-[#101828] px-5 xl:text-2xl'>
                       Our Achievements
                  </p>
                  <div className='flex flex-row items-start justify-start w-full mt-3 px-[10px] lg:mt-2'>
                       <div>
                            <LuDot className='text-3xl text-[#101828] lg:text-[28px] xl:text-[30px]' />
                       </div>
                       <p className='text-xs font-medium text-[#101828] leading-6 -lg:ml-2 xl:text-base xl:leading-9'>
                           With great pride, we lead the charge in Nigeria's business landscape, integrating data mining and analytics platforms to seize real-time opportunities and monitor market trends. Our commitment to sustainability shines through our efforts in renewable energy across all operational fronts and our dedication to eco-conscious practices.
                       </p>
                  </div>

                  <div className='flex flex-row items-start justify-start w-full pt-3 px-[10px] lg:pt-0'>
                       <div>
                            <LuDot className='text-3xl text-[#101828] lg:text-[28px] xl:text-[30px]' />
                       </div>
                       <p className='text-xs font-medium text-[#101828] leading-6 -lg:ml-2 xl:text-base xl:leading-9'>
                           Recognized by the Nigerian Chamber of Commerce and Industry as one of the most ethical trading companies, we solidify our commitment to fairness and integrity. The Nigerian Green Award exemplifies our relentless dedication to environmental sustainability, showcasing our passion for preserving the planet.
                       </p>
                  </div>
             </div>

        </div>

        <div className='flex flex-col items-center justify-center w-full px-5 mt-12 md:w-[50%] md:mt-0 lg:mt-0 lg:w-[50%] xl:w-[50%]'>
            <img className='w-full'
            src={metal} alt="metal displays" />
        </div>
    </div>
  )
}

export default AboutMission
