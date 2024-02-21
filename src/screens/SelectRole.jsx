import React, { useState } from 'react'
import logo from '../assets/images/obaLogo2.svg'
import { IoChevronBack } from "react-icons/io5";
import image from '../assets/images/select-image.svg'
import BuyerRequest from '../components/buyer/BuyerRequest';
import SellerRequest from '../components/seller/SellerRequest';
import BuyerPage2 from '../components/buyer/BuyerPage2';


const SelectRole = () => {
    const [role, setRole] = useState(null);
    const [count, setCount] = useState(0);

    const handleRoleSelection = (role) => {
        setRole(role)
        setCount(1)
          console.log(role);
          console.log(count);
    }

    const handleBack = () => {
        setCount(count -1)
        console.log(count);
    }
    
  return (
    <div className='flex flex-col items-center justify-center w-full h-full font-poppins bg-white md:flex-row md:items-start lg:justify-between lg:w-full'>
          <div className='flex flex-col items-center justify-start w-full py-2 px-5 md:px-10 xl:py-7 xl:px-14'>
               <div className='flex items-center justify-start w-full'>
                   <img className='w-16 h-16' 
                   src={logo} alt='logo' />
               </div>

               <div onClick={handleBack} className='flex items-center cursor-pointer justify-start w-full mt-16 lg:mt-7 xl:mt-12'>
                    <IoChevronBack className='text-base xl:text-lg' />
                    <p className='text-xs font-medium pl-2 md:pl-3 xl:text-sm'>Back</p>
               </div>

               { 
                role === 'buyer' && count === 1 ? <BuyerRequest setCount={setCount} count={count} /> 
               : role === 'supplier' && count === 1 ? <SellerRequest /> 
               :count === 2 ? <BuyerPage2 />
               :<div className='flex flex-col items-center justify-center w-full mt-20 xl:mt-24'>
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
                        I am a Supplier/Manufacturer
                    </button>
               </div>
               }
          </div>


          <div className='hidden lg:flex items-start justify-center w-[70%] h-full'>
               <img className='h-full w-full'
               src={image} alt='select visuals' />
          </div>

    </div>
  )
}

export default SelectRole
