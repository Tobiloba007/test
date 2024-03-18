import React, { useState } from 'react'
import { IoAddSharp } from "react-icons/io5";
import PurchaseRequest from './PurchaseRequest';
import SupplyRequest from './SupplyRequest';
import CommodityModal from './modal/CommodityModal';
import NewRequest from './modal/NewRequest';




const ManageCommodities = () => {
  const [active, setActive] = useState('purchase');

  const [openModal, setOpenModal] = useState(false);
  const [newRequest, setNewRequest] = useState(false);
  const [data, setData] = useState([]);

  const handleTab = (item) => {
    setActive(item)
    console.log(active);
  }

  const closeBackdrop = () => {
     setOpenModal(false)
     setNewRequest(false)
  }

  return (
    <div className='flex flex-col items-center justify-start w-full'>
     <div className='flex flex-col items-center justify-start w-full py-6 px-6 mt-24 md:mt-20 lg:mt-0 lg:pt-[100px] xl:px-14 xl:pt-[75px] xl:mt-10'>
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
                 <div onClick={()=>setNewRequest(true)}
                 className='flex items-center justify-center w-28 h-8 rounded-md cursor-pointer bg-[#2196F3] px-2'>
                      <IoAddSharp className='text-xs font-light text-white md:text-sm' />
                      <p className={`text-[10px] font-normal ml-2 text-white`}>
                           New Request
                      </p>
                 </div>
            </div>
        </div>

        </div>

        <div className='w-full px-6 xl:px-14'>
            {
               active === 'purchase' 
               ? <PurchaseRequest setOpenModal={setOpenModal} openModal={openModal} setData={setData} /> 
               : active === 'Supply' && <SupplyRequest setOpenModal={setOpenModal} openModal={openModal} setData={setData} />
          }
        </div>

        {openModal && <div onClick={closeBackdrop} className='fixed w-full h-full bg-[#000000] opacity-30'></div>}

        {newRequest && <div onClick={closeBackdrop} className='fixed w-full h-full bg-[#000000] opacity-30'></div>}

        { openModal && <CommodityModal setOpenModal={setOpenModal} data={data} /> }

        { newRequest && <NewRequest setNewRequest={setNewRequest} /> }


    </div>
  )
}

export default ManageCommodities
