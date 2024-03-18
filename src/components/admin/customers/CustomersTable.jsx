import React, { useState } from 'react'
import { IoAddSharp } from "react-icons/io5";
import BuyersList from './BuyersList';
import SellersList from './SellersList';




const CustomersTable = ({setOpenModal, setNewUser, openModal, setCustomerDetails}) => {
  const [active, setActive] = useState('Off-takers');

  const handleTab = (item) => {
    setActive(item)
    console.log(active);
  }


  return (
    <div className='flex flex-col items-center justify-start w-full'>
     <div className='flex flex-col items-center justify-start w-full mt-7'>
          {/* TABS */}
        <div className='flex flex-col items-center justify-start w-full md:flex-row md:justify-between'>
            <div className='flex flex-row items-start justify-start w-full mt-5 md:justify-start md:mt-7'>
                 <div onClick={()=>handleTab('Off-takers')}
                 className='flex flex-col items-center cursor-pointer'>
                    <p className={`text-xs font-normal ${active === 'Off-takers' ? 'text-[#2196F3]' : 'text-[#999898]'}`}>
                         Off-takers
                    </p>
                    <div className={`flex w-full border-[1px] ${active === 'Off-takers' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px]`}></div>
                 </div>

                 <div onClick={()=>handleTab('Suppliers')}
                 className='flex flex-col items-center ml-9 cursor-pointer'>
                    <p className={`text-xs font-normal ${active === 'Suppliers' ? 'text-[#2196F3]' : 'text-[#999898]'}`}>
                         Suppliers
                    </p>
                    <div className={`flex w-full border-[1px] ${active === 'Suppliers' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px]`}></div>
                 </div>
            </div>

            <div className='flex items-center justify-start w-full mt-6 md:justify-end'>
                 <div onClick={()=>setNewUser(true)}
                 className='flex items-center justify-center h-8 rounded-md cursor-pointer bg-[#2196F3] px-2'>
                      <IoAddSharp className='text-xs font-light text-white md:text-sm' />
                      <p className={`text-[10px] font-normal ml-2 text-white`}>
                           Create New User
                      </p>
                 </div>
            </div>
        </div>

        </div>

        <div className='w-full xl:mt-2'>
            {
               active === 'Off-takers' 
               ? <BuyersList 
                  setOpenModal={setOpenModal} 
                  openModal={openModal}
                  setCustomerDetails={setCustomerDetails}
                  /> 
               : active === 'Suppliers' && 
               <SellersList 
                setOpenModal={setOpenModal} 
                openModal={openModal} 
                setCustomerDetails={setCustomerDetails} 
                />
            }
        </div>


    </div>
  )
}

export default CustomersTable
