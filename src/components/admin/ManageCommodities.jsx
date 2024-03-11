import React, { useState } from 'react'
import { IoAddSharp } from "react-icons/io5";
import PurchaseRequest from './PurchaseRequest';
import SupplyRequest from './SupplyRequest';



const ManageCommodities = () => {
  const [active, setActive] = useState('purchase');

  const handleTab = (item) => {
    setActive(item)
    console.log(active);
  }

  return (
    <div className='flex flex-col items-start justify-start w-full py-6 px-6 mt-24 lg:mt-0 lg:pt-[100px] xl:px-8 xl:pt-[115px] xl:mt-10'>
          {/* TABS */}
        <div className='flex flex-col items-center justify-start w-full md:flex-row md:justify-between'>
            <div className='flex flex-row items-start justify-start w-full mt-5 md:justify-start md:mt-7'>
                 <div onClick={()=>handleTab('purchase')}
                 className='flex flex-col items-center cursor-pointer'>
                    <p className={`text-xs font-normal ${active === 'purchase' ? 'text-[#2196F3]' : 'text-[#999898]'}`}>
                          Purchase Requests
                    </p>
                    <div className={`flex w-full border-[1px] ${active === 'purchase' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px]`}></div>
                 </div>

                 <div onClick={()=>handleTab('Supply')}
                 className='flex flex-col items-center ml-9 cursor-pointer'>
                    <p className={`text-xs font-normal ${active === 'Supply' ? 'text-[#2196F3]' : 'text-[#999898]'}`}>
                         Supply Requests
                    </p>
                    <div className={`flex w-full border-[1px] ${active === 'Supply' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px]`}></div>
                 </div>
            </div>

            <div className='flex items-center justify-start w-full mt-6 md:justify-end'>
                 <div className='flex items-center justify-center w-28 h-8 rounded-md bg-[#2196F3] px-2'>
                      <IoAddSharp className='text-xs font-light text-white md:text-sm' />
                      <p className={`text-[10px] font-normal ml-2 text-white`}>
                           New Request
                      </p>
                 </div>
            </div>
        </div>

        {active === 'purchase' ? <PurchaseRequest /> : active === 'Supply' && <SupplyRequest />}


    </div>
  )
}

export default ManageCommodities
