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
import { selectRole } from '../features/authentication/AuthActions';
import { useDispatch } from 'react-redux';
import SellerPage0 from '../components/seller/SellerPage0';
import { useNavigate } from 'react-router-dom';


const SelectRole = () => {
    const [role, setRole] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRoleSelection = (role) => {
      const userType = {"user_type": role}
        setRole(role)
        setLoading(true)
        dispatch(selectRole(userType, setError, navigate, setLoading, role))
        console.log(role);
        navigate(role === 'buyer' && '/buyer-request-flow')
    }

    const handleBack = () => {
      navigate(-1)
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
              
              <div className='flex flex-col items-center justify-center w-full mt-20 xl:mt-24'>
                    <p className='text-xl font-semibold pl-2 text-center md:text-2xl xl:text-[27px]'>
                        Whom do you Identify As?
                    </p>

                    <button onClick={()=>handleRoleSelection('buyer')}
                    className={`text-center h-12 w-[85%] border-[1px] border-[#A4A4A4] rounded-lg mt-9 text-xs font-semibold hover:bg-black hover:text-white md:h-11
                     md:w-[45%] lg:w-[65%] xl:w-[50%] xl:h-12 xl:text-sm ${role === 'buyer' && 'bg-black text-white'}`}>
                        I am an Off-taker/Buyer
                    </button>
                    <button onClick={()=>handleRoleSelection('seller')}
                    className={`text-center h-12 w-[85%] border-[1px] border-[#A4A4A4] rounded-lg mt-4 text-xs font-semibold hover:bg-black hover:text-white md:h-11
                     md:w-[45%] lg:w-[65%] xl:w-[50%] xl:h-12 xl:text-sm ${role === 'seller' && 'bg-black text-white'}`}>
                        I am a Supplier/Miner
                    </button>

                    { loading &&
                      <div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full mt-8">
                            <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                       </div>
                    }
                    <div className='text-xs text-medium text-red-500 mt-3 xl:text-sm'>{error}</div>                    
                 </div>
               
          </div>


          <div className='hidden lg:flex items-start justify-center w-[70%] h-full z-50'>
              <div className='fixed'>
                  <img className='h-full w-full'
                  src={buyerImage} alt='select visuals' />
               </div>
          </div>

    </div>
  )
}

export default SelectRole
