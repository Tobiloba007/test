import React, { useState } from 'react'
import OpenPurchase from './OpenPurchase';
import ClosedPurchase from './ClosedPurchase';



const BuyerOrders = () => {
  const [active, setActive] = useState('open');

  const handleTab = (item) => {
    setActive(item)
    console.log(active);
  }

  return (
    <div className='flex flex-col items-start justify-start w-full py-6 px-6 mt-28 lg:mt-0 xl:px-8 xl:py-8'>
          {/* TABS */}
        <div className='flex flex-row items-start justify-between w-full mt-5 md:justify-start md:mt-7'>
             <div onClick={()=>handleTab('open')}
             className='flex flex-col items-center cursor-pointer'>
                <p className={`text-xs font-normal ${active === 'open' ? 'text-[#2196F3]' : 'text-[#999898]'}`}>
                     Open Purchase Request
                </p>
                <div className={`flex w-full border-[1px] ${active === 'open' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px]`}></div>
             </div>

             <div onClick={()=>handleTab('closed')}
             className='flex flex-col items-center md:ml-9 cursor-pointer'>
                <p className={`text-xs font-normal ${active === 'closed' ? 'text-[#2196F3]' : 'text-[#999898]'}`}>
                     Closed Purchase Request
                </p>
                <div className={`flex w-full border-[1px] ${active === 'closed' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px]`}></div>
             </div>
        </div>

        {active === 'open' ? <OpenPurchase /> : active === 'closed' && <ClosedPurchase />}


    </div>
  )
}

export default BuyerOrders
