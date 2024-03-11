import React, { useState } from 'react'
import AllRequests from './AllRequests';
import ActiveRequests from './ActiveRequests';
import FulfilledRequests from './FulfilledRequests';



const SellerPurchaseRequests = () => {
  const [selected, setSelected] = useState('all');

  const handleTab = (item) => {
    setSelected(item)
    console.log(selected);
  }

  return (
    <div className='flex flex-col items-start justify-start w-full py-6 px-6 md:px-8 mt-28 lg:mt-0 lg:pt-[120px] xl:pt-[150px] xl:px-8 xl:py-8'>
          {/* TABS */}
        <div className='flex flex-row items-start justify-between w-full mt-5 md:justify-start md:mt-7'>
             <div onClick={()=>handleTab('all')}
             className='flex flex-col items-start cursor-pointer md:items-center'>
                <p className={`text-[10px] font-normal ${selected === 'all' ? 'text-[#2196F3]' : 'text-[#999898]'} md:text-xs`}>
                      All Purchase Request
                </p>
                <div className={`flex w-[75%] border-[1px] ${selected === 'all' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px] md:w-full`}></div>
             </div>

             <div onClick={()=>handleTab('active')}
             className='flex flex-col items-start md:ml-9 cursor-pointer md:items-center'>
                <p className={`text-[10px] font-normal ${selected === 'active' ? 'text-[#2196F3]' : 'text-[#999898]'} md:text-xs`}>
                      Active Purchase Requests
                </p>
                <div className={`flex w-[75%] border-[1px] ${selected === 'active' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px] md:w-full`}></div>
             </div>

             <div onClick={()=>handleTab('fulfilled')}
             className='flex flex-col items-start md:ml-9 cursor-pointer md:items-center'>
                <p className={`text-[10px] font-normal ${selected === 'fulfilled' ? 'text-[#2196F3]' : 'text-[#999898]'} md:text-xs`}>
                      Fulfilled Purchase Requests
                </p>
                <div className={`flex w-[75%] border-[1px] ${selected === 'fulfilled' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px] md:w-full`}></div>
             </div>

        </div>

        {selected === 'all' ? <AllRequests /> : selected === 'active' ? <ActiveRequests /> : selected === 'fulfilled' && <FulfilledRequests /> }


    </div>
  )
}
export default SellerPurchaseRequests
