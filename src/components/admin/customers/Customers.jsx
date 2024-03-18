import React, { useEffect, useState } from 'react'
import CustomersTable from './CustomersTable'
import NewUser from '../modal/NewUser';
import CommodityModal from '.././modal/CommodityModal';
import { useDispatch } from 'react-redux';
import { adminMetricsData } from '../../../features/admin/AdminActions';
import CustomerDetails from './CustomerDetails';


const Customers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [metrics, setMetrics] = useState([]);
  const [customerDetails, setCustomerDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const closeBackdrop = () => {
    setOpenModal(false)
    setNewUser(false)
 }

 useEffect(() => {
  dispatch(adminMetricsData(setMetrics, setLoading, setError))
}, [dispatch])

  return (
    <div className='flex flex-col items-center justify-start w-full'>
    {
      customerDetails
      ? <CustomerDetails customerDetails={customerDetails} setCustomerDetails={setCustomerDetails} />
      :<div className='flex flex-col items-start justify-start w-full py-6 px-6 mt-24 lg:mt-0 lg:pt-[110px] xl:px-14 xl:pt-[105px] xl:mt-10'>
         <p className='text-base font-medium text-[#101828] text-start w-full xl:text-xl'>
            Summary
         </p>

         <div className='flex flex-col items-center justify-center w-[50%] h-full border-[1px] border-[#D0D5DD] rounded-[8px] mt-4 p-5 md:flex-row md:w-[65%] lg:mt-5 lg:p-8 lg:w-[75%] xl:mt-6 xl:p-9'>
              <div className='flex flex-col items-start w-full'>
                   <p className='text-[10px] text-[#667085] lg:text-xs xl:text-sm'>
                       Overall count
                   </p>
                   <p className='text-lg font-medium text-[#101828] mt-3 lg:text-2xl lg:font-semibold lg:mt-5 xl:text-3xl xl:mt-7'>
                       {metrics.total_users}
                   </p>
              </div>

              <div className='flex flex-col items-center w-full md:flex-row md:h-full'>
                   <div className='border-[1px] border-[#D0D5DD] w-full my-4 md:w-[1px] md:h-[70px] md:my-0 lg:h-[80px] xl:h-[90px]'></div>
                   <div className='flex flex-col items-start w-full md:ml-5 lg:ml-6 xl:ml-8'>
                       <p className='text-[10px] text-[#667085] lg:text-xs xl:text-sm'>
                           Off-takers
                       </p>
                       <p className='text-lg font-medium text-[#101828] mt-3 md:mt-4 lg:text-2xl lg:font-semibold lg:mt-5 xl:text-3xl xl:mt-7'>
                           {metrics.total_buyers}
                       </p>
                   </div>
              </div>

              <div className='flex flex-col items-center w-full md:flex-row md:h-full'>
                   <div className='border-[1px] border-[#D0D5DD] w-full my-4 md:w-[1px] md:h-[70px] md:my-0 lg:h-[80px] xl:h-[90px]'></div>
                   <div className='flex flex-col items-start w-full md:ml-5 lg:ml-6 xl:ml-8'>
                       <p className='text-[10px] text-[#667085] lg:text-xs xl:text-sm'>
                            Suppliers
                       </p>
                       <p className='text-lg font-medium text-[#101828] mt-3 md:mt-4 lg:text-2xl lg:font-semibold lg:mt-5 xl:text-3xl xl:mt-7'>
                            {metrics.total_sellers}
                       </p>
                   </div>
              </div>
         </div>


          <CustomersTable 
            openModal={openModal}
            setOpenModal={setOpenModal}
            setNewUser={setNewUser}
            setCustomerDetails={setCustomerDetails}
          />

         </div>
        
        }


         {
          openModal | newUser &&
          <div onClick={closeBackdrop} className='fixed w-full h-full bg-[#000000] opacity-30'></div>
         }

        { openModal && <CommodityModal setOpenModal={setOpenModal} /> }

        { newUser && <NewUser setNewUser={setNewUser} setOpenModal={setOpenModal} /> }

    </div>
  )
}

export default Customers
