import React, { useState } from 'react'
import Active from '../../components/admin/broadcasts/Active';
import Completed from '../../components/admin/broadcasts/Completed';
import BroadcastDetails from '../../components/admin/broadcasts/BroadcastDetails';




const Broadcasts = () => {
  const [tab, setTab] = useState('active');

//   const [broadcastModal, setBroadcastModal] = useState(false);
  const [broadcastDetails, setBroadcastDetails] = useState(false);


  const handleTab = (item) => {
    setTab(item)
    console.log(tab)
  }

//   const closeBackdrop = () => {
//      setBroadcastModal(false)
//   }

  return (
    <div className='flex flex-col items-center justify-start w-full h-full'>
    {
     broadcastDetails ? <BroadcastDetails setBroadcastDetails={setBroadcastDetails} broadcastDetails={broadcastDetails} />
     :<div className='flex flex-col items-center justify-start w-full py-6 px-6 mt-24 md:mt-20 lg:mt-0 lg:pt-[100px] xl:px-14 xl:pt-[75px] xl:mt-10'>
          {/* TABS */}
        <div className='flex flex-col items-center justify-start w-full md:flex-row md:justify-between'>
            <div className='flex flex-row items-start justify-start w-full mt-5 md:justify-start md:mt-7'>
                 <div onClick={()=>handleTab('active')}
                 className='flex flex-col items-center cursor-pointer'>
                    <p className={`text-xs font-normal ${tab === 'active' ? 'text-[#2196F3]' : 'text-[#999898]'} xl:text-sm`}>
                         Active Broadcast Requests
                    </p>
                    <div className={`flex w-full border-[1px] ${tab === 'active' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px]`}></div>
                 </div>

                 <div onClick={()=>handleTab('complete')}
                 className='flex flex-col items-center ml-9 cursor-pointer'>
                    <p className={`text-xs font-normal ${tab === 'complete' ? 'text-[#2196F3]' : 'text-[#999898]'} xl:text-sm`}>
                          Completed Requests
                    </p>
                    <div className={`flex w-full border-[1px] ${tab === 'complete' ? 'border-[#2196F3] ' : 'border-[#FFFFFF] '} mt-[6px]`}></div>
                 </div>
            </div>

            {/*<div className='flex items-center justify-start w-full mt-6 md:justify-end'>
                 <div onClick={()=>setBroadcastModal(true)}
                 className='flex items-center justify-center px-4 h-8 rounded-md cursor-pointer bg-[#2196F3] md:h-8 lg:h-9 xl:h-10'>
                      <img className='w-4 h-4' src={Speaker} alt='speaker' />
                      <p className={`text-[10px] font-normal ml-2 text-white xl:text-xs`}>
                            New Broadcast Request
                      </p>
                 </div>
            </div>*/}
        </div>

     
        <div className='w-full'>
            {
               tab === 'active' 
               ? <Active setBroadcastDetails={setBroadcastDetails}  /> 
               : tab === 'complete' && <Completed  setBroadcastDetails={setBroadcastDetails} />
            } 
        </div>

        </div>
     }


        {/*
        {broadcastModal && <div onClick={closeBackdrop} className='fixed w-full h-full bg-[#000000] opacity-30'></div>}

        {broadcastModal && <BroadcastModal setBroadcastModal={setBroadcastModal} />}
         */}



    </div>
  )
}

export default Broadcasts
