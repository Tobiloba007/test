import React from 'react'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import BuyerDetailsTable from './BuyerDetailsTable';
import SellersDetailsTable from './SellersDetailsTable';



const CustomerDetails = ({customerDetails, setCustomerDetails}) => {

    const data = customerDetails.seller || customerDetails.buyer

    const details = [
        {
            id: 1,
            key: 'Phone Number:',
            value: data.phone,
        },
        {
            id: 2,
            key: 'Email:',
            value: data.email,
        },
        {
            id: 3,
            key: 'Location:',
            value: 'Lagos, Nigeria',
        },
        {
            id: 4,
            key: 'Billing Address:',
            value: data.address,
        },
    ]



  return (
    <div className='flex flex-col items-start justify-start w-full py-6 px-6 mt-24 lg:mt-0 lg:pt-[110px] xl:px-14 xl:pt-[85px] xl:mt-10'>
          <div className='flex flex-row items-center justify-start w-full'>
              <p className='text-[11px] text-[#667085] xl:text-xs xl:font-medium'>
                  <span onClick={()=>setCustomerDetails(false)}>Customers</span> / {data.user_type === 'buyer' ? ' Off-takers' : data.user_type === 'seller' && ' Suppliers'} /<span className='text-[#2196F3]'> Manage customer</span>
              </p>
          </div>

          <div className='flex flex-col items-start w-full mt-12 md:flex-row md:justify-between lg:mt-[50px]'>
               <div className='flex flex-col items-start w-full'>
                   <div className='flex items-center justify-start w-full'>
                       <p className='text-lg text-[#101828] font-medium xl:text-2xl'>
                            {data.first_name} {data.last_name}
                       </p>
                       <p className='text-xs text-[#667085] ml-4 xl:text-[15px]'>
                            Customer ID: {data.id}
                       </p>
                   </div>

                   <div className='flex flex-col items-start justify-start w-full mt-4'>
                        {details.map((item) => {
                            return(
                                <div key={item.id} className='flex items-start justify-start w-full mt-3'>
                                   <p className='text-[11px] text-[#667085] w-20 xl:text-sm xl:w-28'>
                                         {item.key}
                                   </p>
                                   <p className='text-[11px] text-[#101828] ml-7 font-medium xl:text-sm'>
                                          {item.value} 
                                   </p>
                                </div>
                            )
                        })}
                   </div>
               </div>

               <div className='flex flex-row items-center justify-start w-full mt-8 md:mt-0 md:justify-end'>
                     <div className='flex items-center justify-center px-4 h-8 bg-[#3E4451] rounded-md xl:h-9 xl:px-5'>
                          <FiEdit className='text-white text-sm xl:text-base' />
                          <p className='text-xs text-[#FFFFFF] ml-2 font-normal xl:text-sm xl:ml-3 xl:font-medium'>
                               Edit customer Details
                          </p>
                     </div>

                     <div className='flex items-center justify-center px-4 h-8 bg-[#DF4848] rounded-md ml-4 xl:h-9 xl:px-5'>
                          <RiDeleteBin6Fill className='text-white text-sm xl:text-base' />
                          <p className='text-xs text-[#FFFFFF] ml-2 font-normal xl:text-sm xl:ml-3 xl:font-medium'>
                                Remove User
                          </p>
                     </div>
               </div>
          </div>

          <p className='text-[#101828] text-sm font-medium mt-[70px] mb-1 lg:mt-[75px]'>
             {data.first_name}'s Orders
          </p>


          {
            data === customerDetails.buyer
            ? <BuyerDetailsTable customerDetails={customerDetails} />
            : data === customerDetails.seller
            && <SellersDetailsTable customerDetails={customerDetails} />
          }

    </div>
  )
}

export default CustomerDetails
