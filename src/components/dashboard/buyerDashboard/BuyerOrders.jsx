import React, { useState } from 'react'
import OpenPurchase from './OpenPurchase';
import ClosedPurchase from './ClosedPurchase';
import HomeModal from '../../modals/buyer/HomeModal';



const BuyerOrders = () => {
  const [active, setActive] = useState('open');
  const [openModal, setOpenModal] = useState(false);

  const handleTab = (item) => {
    setActive(item)
    console.log(active);
  }

  const handleCloseBackdrop = () => {
    setOpenModal(false)
 }

  return (
    <div className='flex flex-col items-start justify-start w-full py-6 px-6 mt-28 lg:mt-0 lg:pt-[100px] xl:px-8 xl:pt-[115px] xl:mt-10'>
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


        {/*{
          openModal  && 
         <div onClick={handleCloseBackdrop}
         className='fixed w-full h-full justify-center items-center bg-[#000000] p-5 lg:w-[80%] opacity-50 xl:w-[80%]'>
         </div>
         }

         {openModal &&
              <div className='absolute top-32 flex flex-col items-center justify-start w-[90%] z-20 md:w-[80%] lg:w-[70%] xl:w-[65%]'>
               <HomeModal data={modalData} setOpenModal={setOpenModal} setPayment={setPayment} setTab={setTab} />  
            </div>
         } */}


    </div>
  )
}

export default BuyerOrders
