import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BuyerProfileActions } from '../../../features/buyer/BuyerActions';

const BuyerProfile = () => {
    const [user, setUser] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(BuyerProfileActions(setUser))
        console.log(user.last_name);

    }, [dispatch, user])

  return (
    <div className='flex flex-col items-center justify-start w-full px-5 pb-10 md:px-10 mt-28 lg:mt-0 lg:pt-[100px] xl:pt-[115px] xl:px-8 xl:py-8'>

         {/* PROFILE 1 */}
        <div className='flex flex-col items-start justify-start w-full mt-6 md:flex-row'>
            <div className='flex flex-col items-start justify-start md:w-[30%] lg:w-[40%]'>
                 <p className='text-xs text-[#101828] font-medium xl:text-sm'>
                     Personal info
                 </p>
                 <p className='text-[10px] text-[#667085] font-normal pt-1 xl:text-xs'>
                     This will be displayed on your profile.
                 </p>
            </div>

            <div className='flex flex-col items-center justify-start w-full mt-8 md:ml-16 md:mt-6 lg:ml-20'>
                 <div className='flex flex-row items-center justify-between w-full'>
                    <div className='w-[47%]'>
                        <p className='text-[11px] text-[#101828] font-medium xl:text-xs'>
                            First name
                        </p>
                        <input className='text-[10px] text-[#101828] border-[1px] border-[#DDE1E6] rounded-md h-9 w-full pl-3 mt-1 xl:h-11 xl:text-xs'
                        placeholder='First Name'
                        value={user.first_name}
                        />
                    </div>
                    <div className='w-[47%]'>
                        <p className='text-[11px] text-[#101828] font-medium xl:text-xs'>
                            Last name
                        </p>
                        <input className='text-[10px] text-[#101828] border-[1px] border-[#DDE1E6] rounded-md h-9 w-full pl-3 mt-1 xl:h-11 xl:text-xs'
                        placeholder='Last Name'
                        value={user.last_name}
                        />
                    </div>
                  </div>

                  <div className='w-full mt-5'>
                        <p className='text-[11px] text-[#101828] font-medium xl:text-xs'>
                            Gender
                        </p>
                        <input className='text-[10px] text-[#101828] border-[1px] border-[#DDE1E6] rounded-md h-9 w-full pl-3 mt-1 xl:h-11 xl:text-xs'
                        placeholder=''
                        value={user.gender}
                        />
                  </div>

                  <div className='w-full mt-5'>
                        <p className='text-[11px] text-[#101828] font-medium xl:text-xs'>
                            Phone Number
                        </p>
                        <input className='text-[10px] text-[#101828] border-[1px] border-[#DDE1E6] rounded-md h-9 w-full pl-3 mt-1 xl:h-11 xl:text-xs'
                        placeholder='08012345678'
                        value={user.phone}
                        />
                  </div>

                  <div className='w-full mt-5'>
                        <p className='text-[11px] text-[#101828] font-medium xl:text-xs'>
                            Email
                        </p>
                        <input className='text-[10px] text-[#101828] border-[1px] border-[#DDE1E6] rounded-md h-9 w-full pl-3 mt-1 xl:h-11 xl:text-xs'
                        placeholder='mrmoney@gmail.com'
                        value={user.email}

                        />
                  </div>

                  <div className='w-full mt-5'>
                        <p className='text-[11px] text-[#101828] font-medium xl:text-xs'>
                            Address
                        </p>
                        <input className='text-[10px] text-[#101828] border-[1px] border-[#DDE1E6] rounded-md h-9 w-full pl-3 mt-1 xl:h-11 xl:text-xs'
                        placeholder=''
                        value={user.address}
                        />
                  </div>

            </div>

        </div>



        {/* LINE */}
        <div className='border-[1px] border-[#DDE1E6] w-full my-10 xl:my-14'></div>


        
        {/* PROFILE 2 */}
        <div className='flex flex-col items-start justify-start w-full md:flex-row'>
            <div className='flex flex-col items-start justify-start md:w-[30%] lg:w-[40%]'>
                 <p className='text-xs text-[#101828] font-medium xl:text-sm'>
                      Login Details
                 </p>
                 <p className='text-[10px] text-[#667085] font-normal pt-1 xl:text-xs'>
                      Modify your Password
                 </p>
            </div>

            <div className='flex flex-col items-center justify-start w-full mt-8 md:ml-16 md:mt-6 lg:ml-20'>
                  <div className='w-full'>
                        <p className='text-[11px] text-[#101828] font-medium xl:text-xs'>
                             Current Password
                        </p>
                        <input className='text-[10px] text-[#101828] border-[1px] border-[#DDE1E6] rounded-md h-9 w-full pl-3 mt-1 xl:h-11 xl:text-xs'
                        placeholder='Your current password'
                        />
                  </div>

                  <div className='w-full mt-5'>
                        <p className='text-[11px] text-[#101828] font-medium xl:text-xs'>
                             New Password                        
                        </p>
                        <input className='text-[10px] text-[#101828] border-[1px] border-[#DDE1E6] rounded-md h-9 w-full pl-3 mt-1 xl:h-11 xl:text-xs'
                        placeholder='Your new password'
                        />
                  </div>

                  <div className='w-full mt-5'>
                        <p className='text-[11px] text-[#101828] font-medium xl:text-xs'>
                             Confirm New Password
                        </p>
                        <input className='text-[10px] text-[#101828] border-[1px] border-[#DDE1E6] rounded-md h-9 w-full pl-3 mt-1 xl:h-11 xl:text-xs'
                        placeholder='Confirm password'
                        />
                  </div>

            </div>

        </div>



        {/* BUTTONS */}
        <div className='flex items-center justify-end w-full mt-8 xl:mt-12'>
             <button className='items-center text-center border-[1px] border-[#DDE1E6] h-8 w-16 rounded-md text-[#2196F3] text-[10px] font-semibold xl:w-20 xl:h-9 xl:text-xs'>
                 Cancel
             </button>
             <button className='items-center text-center border-[1px] border-[#DDE1E6] h-8 w-16 rounded-md text-[#FFFFFF] bg-[#2196F3] text-[10px] font-semibold ml-4 xl:w-20 xl:h-9 xl:text-xs'>
                 Save
             </button>
        </div>

    </div>
  )
}

export default BuyerProfile
