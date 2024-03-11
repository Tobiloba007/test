import React, { useEffect, useState } from 'react'
import logo from '../assets/images/obaLogo2.svg'
import { IoChevronBack } from "react-icons/io5";
import buyerImage from '../assets/images/select-image.svg'
import sellerImage from '../assets/images/select-image2.svg'
import BuyerPage1 from '../components/buyer/BuyerPage1';
import BuyerPage2 from '../components/buyer/BuyerPage2';
import BuyerPage3 from '../components/buyer/BuyerPage3';
import BuyerPage4 from '../components/buyer/BuyerPage4';
import BuyerPage5 from '../components/buyer/BuyerPage5';
import BuyerPage6 from '../components/buyer/BuyerPage6';
import BuyerPage7 from '../components/buyer/BuyerPage7';
import BuyerSuccessfulModal from '../components/buyer/BuyerSuccessfulModal';
import { useSelector } from 'react-redux';


const BuyerRequestFlow = () => {
    const [count, setCount] = useState(1);

    const user = useSelector((state) => state.auth.user)


    useEffect(() => {
        console.log(user, 'Hello');
    }, [user])



    const handleBack = () => {
      setCount(count - 1)
      if(count <= 1){
        setCount(1)
      }
    }
    
  return (
    <div className='flex flex-col items-center justify-center w-full h-full font-poppins bg-white mx-auto max-w-screen-2xl md:flex-row md:items-start lg:justify-between lg:w-full'>
          <div className='flex flex-col items-center justify-start w-full px-5 md:px-10 xl:px-14'>

             <div className='mb-20 md:mb-20 lg:mb-32 xl:mb-36'>
              <div className='fixed left-5 md:left-10 xl:left-14 bg-white z-40 w-full h-[7.7rem] mb-40'>
                  <div className='flex items-center justify-start w-full pt-2 xl:pt-7'>
                      <img className='w-16 h-16'
                      src={logo} alt='logo' />
                  </div>

                  <div onClick={handleBack} className='flex items-center cursor-pointer justify-start w-full pb-5 mt-8 lg:mt-7 xl:mt-12'>
                       <IoChevronBack className='text-base xl:text-lg' />
                       <p className='text-xs font-medium pl-2 md:pl-3 xl:text-sm'>Back</p>
                  </div>
              </div>
              </div>

               {count === 1 ? <BuyerPage1 setCount={setCount} /> 
                :count === 2 ? <BuyerPage2 setCount={setCount} /> : count === 3 ? <BuyerPage3 setCount={setCount} />
                :count === 4 ? <BuyerPage4 setCount={setCount} /> : count === 5 ? <BuyerPage5 setCount={setCount} />
                :count === 6 ? <BuyerPage6 setCount={setCount} /> : count === 7 && <BuyerPage7 setCount={setCount} />
              }

               
          </div>


          <div className='hidden lg:flex items-start justify-center w-[70%] h-full z-50'>
              <div className='fixed'>
                  <img className='h-full w-full'
                  src={user === 'seller' ? sellerImage : buyerImage} alt='select visuals' />
               </div>
          </div>
               
          {/* BUYER */}
          {
            count === 8 && <div className='fixed h-screen w-full bg-[#dddddd] z-40 opacity-50'></div>
          }
          {
            count === 8 && <BuyerSuccessfulModal />
          }

    </div>
  )
}

export default BuyerRequestFlow
