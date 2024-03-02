import React, { useState } from 'react'
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
import SellerPage1 from '../components/seller/SellerPage1';
import SellerPage2 from '../components/seller/SellerPage2';
import SellerPage3 from '../components/seller/SellerPage3';
import SellerPage4 from '../components/seller/SellerPage4';
import SellerPage5 from '../components/seller/SellerPage5';
import SellerPage7 from '../components/seller/SellerPage7';
import SellerSuccessfulModal from '../components/seller/SellerSuccessfulModal';
import SellerPage6 from '../components/seller/SellerPage6';


const SelectRole = () => {
    const [role, setRole] = useState(null);
    const [count, setCount] = useState(0);

    const handleRoleSelection = (role) => {
        setRole(role)
        setCount(count + 1)
          console.log(role);
          console.log(count);
    }

    const handleBack = () => {
        setCount(count - 1)
        console.log(count);
    }
    
  return (
    <div className='flex flex-col items-center justify-center w-full h-full font-poppins bg-white mx-auto max-w-screen-2xl md:flex-row md:items-start lg:justify-between lg:w-full'>
          <div className='flex flex-col items-center justify-start w-full px-5 md:px-10 xl:px-14'>

             <div className='mb-20 md:mb-20 lg:mb-32 xl:mb-36'>
              <div className='fixed left-5 md:left-10 xl:left-14 bg-white z-40 w-full h-[7.2rem] mb-40'>
                  <div className='flex items-center justify-start w-full pt-2 xl:pt-7'>
                      <img className='w-16 h-16'
                      src={logo} alt='logo' />
                  </div>

                  <div onClick={handleBack} className='flex items-center cursor-pointer justify-start w-full mt-8 lg:mt-7 xl:mt-12'>
                       <IoChevronBack className='text-base xl:text-lg' />
                       <p className='text-xs font-medium pl-2 md:pl-3 xl:text-sm'>Back</p>
                  </div>
              </div>
              </div>

               { 
                role === 'buyer' && count === 1 ? <BuyerPage1 setCount={setCount} /> 
                : role === 'buyer' && count === 2 ? <BuyerPage2 setCount={setCount} /> : role === 'buyer' && count === 3 ? <BuyerPage3 setCount={setCount} />
                : role === 'buyer' && count === 4 ? <BuyerPage4 setCount={setCount} /> : role === 'buyer' && count === 5 ? <BuyerPage5 setCount={setCount} />
                : role === 'buyer' && count === 6 ? <BuyerPage6 setCount={setCount} /> : role === 'buyer' && count === 7 ? <BuyerPage7 setCount={setCount} />
                : role === 'supplier' && count === 1 ? <SellerPage1 setCount={setCount} /> : role === 'supplier' && count === 2 ? <SellerPage2 setCount={setCount} />
                : role === 'supplier' && count === 3 ? <SellerPage3 setCount={setCount} /> : role === 'supplier' && count === 4 ? <SellerPage4 setCount={setCount} />
                : role === 'supplier' && count === 5 ? <SellerPage5 setCount={setCount} /> : role === 'supplier' && count === 6 ? <SellerPage6 setCount={setCount} />
                : role === 'supplier' && count === 7 ? <SellerPage7 setCount={setCount} /> 
                : <div className='flex flex-col items-center justify-center w-full mt-20 xl:mt-24'>
                    <p className='text-xl font-semibold pl-2 text-center md:text-2xl xl:text-[27px]'>
                        Whom do you Identify As?
                    </p>

                    <button onClick={()=>handleRoleSelection('buyer')}
                    className='text-center h-12 w-[85%] border-[1px] border-[#A4A4A4] rounded-lg mt-9 text-xs font-semibold hover:bg-black hover:text-white md:h-11
                     md:w-[45%] lg:w-[65%] xl:w-[50%] xl:h-12 xl:text-sm'>
                        I am an Off-taker/Buyer
                    </button>
                    <button onClick={()=>handleRoleSelection('supplier')}
                    className='text-center h-12 w-[85%] border-[1px] border-[#A4A4A4] rounded-lg mt-4 text-xs font-semibold hover:bg-black hover:text-white md:h-11
                     md:w-[45%] lg:w-[65%] xl:w-[50%] xl:h-12 xl:text-sm'>
                        I am a Supplier/Miner
                    </button>
                 </div>
               }
          </div>


          <div className='hidden lg:flex items-start justify-center w-[70%] h-full z-50'>
              <div className='fixed'>
                  <img className='h-full w-full'
                  src={role === 'supplier' ? sellerImage : buyerImage} alt='select visuals' />
               </div>
          </div>
               
          {/* BUYER */}
          {
            role === 'buyer' && count === 8 && <div className='absolute h-screen w-full bg-[#dddddd] z-40 opacity-50'></div>
          }
          {
            role === 'buyer' && count === 8 && <BuyerSuccessfulModal />
          }


          {/* SUPPLIER */}
          {
            role === 'supplier' && count === 8 && <div className='absolute h-screen w-full bg-[#dddddd] z-40 opacity-50'></div>
          }
          {
            role === 'supplier' && count === 8 && <SellerSuccessfulModal />
          }

    </div>
  )
}

export default SelectRole
