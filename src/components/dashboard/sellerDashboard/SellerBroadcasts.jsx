import React, { useState } from 'react'
import SellerBroadcastTable from './SellerBroadcastTable';
import SellerBroadcastDetails from './SellerBroadcastDetails';




const SellerBroadcasts = () => {
  const [broadcastDetails, setBroadcastDetails] = useState(false);
  const [selected, setSelected] = useState('all');

  const handleTab = (item) => {
    setSelected(item)
    console.log(selected);
  }



  return (
    <div className='flex flex-col items-center justify-start w-full h-full'>
    {
     broadcastDetails ? <SellerBroadcastDetails setBroadcastDetails={setBroadcastDetails} broadcastDetails={broadcastDetails} />
     :<div className='flex flex-col items-center justify-start w-full py-6 px-6 mt-24 md:mt-20 lg:mt-0 lg:pt-[100px] lg:px-8 xl:px-8 xl:pt-[75px] xl:mt-10'>
          {/* TABS */}
        <div className='flex flex-col items-start justify-start w-full mt-6 md:mt-12'>
            <p className='text-lg font-medium xl:text-xl'>
                 OAT Broadcast Requests
            </p>
            <p className='text-[10px] text-[#667085] pt-1 md:text-xs xl:text-sm xl:pt-2'>
                View all supply request available on OAT
            </p>
        </div>


        {/* TABS */}
        <div className='flex flex-row items-start justify-between w-full mt-5 md:justify-start md:mt-7'>
             <div onClick={()=>handleTab('all')}
             className='flex flex-col items-start cursor-pointer md:items-center'>
                <p className={`text-[10px] font-normal ${selected === 'all' ? 'text-[#2196F3]' : 'text-[#999898]'} md:text-xs`}>
                      All Supply Request
                </p>
                <div className={`flex w-[75%] border-[1px] ${selected === 'all' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px] md:w-full`}></div>
             </div>

             <div onClick={()=>handleTab('active')}
             className='flex flex-col items-start md:ml-9 cursor-pointer md:items-center'>
                <p className={`text-[10px] font-normal ${selected === 'active' ? 'text-[#2196F3]' : 'text-[#999898]'} md:text-xs`}>
                      Active Supply Requests
                </p>
                <div className={`flex w-[75%] border-[1px] ${selected === 'active' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px] md:w-full`}></div>
             </div>

             <div onClick={()=>handleTab('fulfilled')}
             className='flex flex-col items-start md:ml-9 cursor-pointer md:items-center'>
                <p className={`text-[10px] font-normal ${selected === 'fulfilled' ? 'text-[#2196F3]' : 'text-[#999898]'} md:text-xs`}>
                      Fulfilled Supply Requests
                </p>
                <div className={`flex w-[75%] border-[1px] ${selected === 'fulfilled' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px] md:w-full`}></div>
             </div>

        </div>

     
        <div className='w-full mt-5 md:mt-4'>
              <SellerBroadcastTable setBroadcastDetails={setBroadcastDetails}  /> 
        </div>

        </div>
     }


    </div>
  )
}


export default SellerBroadcasts
