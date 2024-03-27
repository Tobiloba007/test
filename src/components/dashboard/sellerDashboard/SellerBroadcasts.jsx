import React, { useState } from 'react'
import SellerBroadcastDetails from './SellerBroadcastDetails';
import SellerBroadcastAll from './SellerBroadcastAll';
import BroadcastResponseTab from './BroadcastResponseTab';




const SellerBroadcasts = () => {
  const [broadcastDetails, setBroadcastDetails] = useState(false);
  const [selected, setSelected] = useState('request');

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
        <div className='flex flex-row items-start justify-start w-full mt-5 md:justify-start md:mt-7'>
             <div onClick={()=>handleTab('request')}
             className='flex flex-col items-start cursor-pointer md:items-center'>
                <p className={`text-[10px] font-normal ${selected === 'request' ? 'text-[#2196F3]' : 'text-[#999898]'} md:text-xs`}>
                      All Broadcast Request
                </p>
                <div className={`flex w-full border-[1px] ${selected === 'request' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px] md:w-full`}></div>
             </div>

             <div onClick={()=>handleTab('response')}
             className='flex flex-col items-start ml-9 cursor-pointer md:ml-12 md:items-center xl:ml-16'>
                <p className={`text-[10px] font-normal ${selected === 'response' ? 'text-[#2196F3]' : 'text-[#999898]'} md:text-xs`}>
                      Broadcast Responses
                </p>
                <div className={`flex w-full border-[1px] ${selected === 'response' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px] md:w-full`}></div>
             </div>

        </div>



     
        <div className='w-full mt-5 md:mt-4'>
              {
               selected === 'request' ? <SellerBroadcastAll setBroadcastDetails={setBroadcastDetails}  /> 
              :selected === 'response' && <BroadcastResponseTab setBroadcastDetails={setBroadcastDetails}  /> 
             }
        </div>

        </div>
     }


    </div>
  )
}


export default SellerBroadcasts
