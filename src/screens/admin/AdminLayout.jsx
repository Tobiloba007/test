import React, { useState } from 'react'
import logo from '../../assets/images/obaLogo.svg'
import { LuBarChart2 } from "react-icons/lu";
import { LiaEdit } from "react-icons/lia";
import { IoMegaphoneOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MdLocationSearching } from "react-icons/md";
import { CgDatabase } from "react-icons/cg";
import { RiUserAddLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginToken } from '../../features/authentication/AuthSlice';
import AdminHome from '../../components/admin/AdminHome';
import ManageCommodities from '../../components/admin/ManageCommodities';
import Customers from '../../components/admin/customers/Customers';
import Broadcasts from './Broadcasts';




const AdminLayout = () => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState('Dashboard');

    const dispatch = useDispatch();

    const loginToken = useSelector((state) => state.auth.loginToken)


    const tabs = [
        {
            id: 1,
            icon: <LuBarChart2 className='text-white text-lg xl:text-[22px]' />,
            name: 'Dashboard',
        },
        {
            id: 2,
            icon: <LiaEdit className='text-white text-xl xl:text-[22px]' />,
            name: 'Manage Commodities',
        },
        {
            id: 3,
            icon: <IoMegaphoneOutline className='text-white text-lg xl:text-[22px]' />,
            name: 'Broadcast',
            no: 1
        },
        {
            id: 4,
            icon: <IoCartOutline className='text-white text-lg xl:text-[22px]' />,
            name: 'Customers',
        },
        {
            id: 5,
            icon: <MdLocationSearching className='text-white text-base xl:text-[22px]' />,
            name: 'Shipment Tracking',
        },
        {
            id: 6,
            icon: <CgDatabase className='text-white text-lg xl:text-[22px]' />,
            name: 'Roles',
        },
        {
            id: 7,
            icon: <RiUserAddLine className='text-white text-lg xl:text-[22px]' />,
            name: 'Manage Users',
        },
        {
            id: 8,
            icon: <MdOutlineMarkEmailUnread className='text-white text-lg xl:text-[22px]' />,
            name: 'Messages',
        },
    ]


    const handleTab = (item) => {
        setTab(item)
        setOpen(false)
        console.log(tab);
    }

    const navigate = useNavigate()

    const handleLogout = async () => {
      dispatch(setLoginToken(null))
      navigate('/')
      console.log(loginToken, 'loggedOut');
    }


  return (
    <div className='flex flex-row items-start justify-start w-full h-full font- no-scrollbar'>
          <div onClick={()=>setOpen(false)}
          className={`fixed ${open ? 'flex' : 'hidden'} items-center justify-center h-full w-full z-30 bg-[#000000] opacity-50`}></div>
            {/*  VERTICAL BAR */}
          <motion.div 
          initial="hidden"
          animate="visible"
          variants={open ? slideInVariants : ''}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className={`${open ? 'fixed' : 'hidden'} lg:flex flex-col items-start justify-start w-[55%] h-screen z-50 bg-[#101828] px-3 md:w-[30%] 
          lg:fixed lg:w-[20%] xl:px-5 xl:w-[21%]`}>
               <div className='flex flex-row justify-start items-center pt-3 lg:pt-5'>
                   <img className='w-12 h-12'
                   src={logo} alt='logo'/>
                   <p className='text-lg font-black text-[#ffffff] ml-2 xl:'>
                      OAT
                 </p>
               </div>

               <div className='flex flex-col items-start justify-start w-full mt-7'>
                   {tabs.map((item) => {
                    return(
                        <div onClick={()=>handleTab(item.name)} 
                        key={item.id} className={`${tab === item.name && 'bg-[#344054]'} hover:bg-[#344054] flex flex-row justify-start items-center px-1 h-10 w-[100%] cursor-pointer 
                                                 rounded-md mt-2 xl:h-12 xl:px-3`}>
                           {item.icon}
                           <p className='text-[11px] font-normal text-[#ffffff] ml-[10px] leading-3 xl:text-[13px]'>
                                {item.name}
                           </p>
                           {item.no && 
                           <div className='flex items-center justify-center w-5 h-5 bg-[#D90F0F] rounded-full leading-4 ml-10 md:ml-14 lg:ml-12 xl:ml-16 xl:h-6 xl:w-6 xl:leading-3'>
                                <p className='text-[10px] font-normal text-[#ffffff] xl:text-[13px]'>
                                     {item.no}
                                </p>
                           </div>
                           }
                        </div>
                    )
                   })}
                   
               </div>


               <div className='absolute left-0 right-3 bottom-2 flex flex-col items-center px-3 justify-end w-full xl:px-3'>
                     {/* LINE */}
                     <div className='border-[0.2px] mt-2 border-[#475467] w-[100%]'></div>

                     {/* NAME AND EMAIL */}
                     <div className='flex flex-row justify-between items-center px-1 h-11 w-[100%] hover:bg-[#344054] rounded-md mt-3'>
                         <div className='flex flex-col items-start justify-center'>
                              <p className='text-[11px] font-medium text-[#ffffff] xl:text-[14px]'>
                                    Ololade Asake
                               </p>
                              <p className='text-[10px] font-normal text-[#475467] xl:text-[13px] xl:font-semibold'>
                                     Admin@gmail.com
                               </p>
                         </div>
                         <div onClick={handleLogout}>
                             <IoIosLogOut className='text-white text-lg xl:text-[22px]' />
                         </div>
                     </div>

                </div>

          </motion.div>


          <div className='flex flex-col items-end justify-start w-full h-full'>
          {/* TOP BAR */}
          <div className='flex flex-col items-start justify-center w-full fixed px-5 bg-white shadow-md border-b-[1px] z-30 border-[#dddddd] h-[85px] md:px-8 lg:flex-row 
          lg:items-center lg:justify-between lg:px-7 lg:w-[80%] xl:h-[100px] xl:px-12'>
             <div className='flex flex-col items-start justify-center'>
                 <p className='text-base font-medium text-[#101828] lg:text-xl xl:text-2xl'>
                   {
                    tab === 'Dashboard' ? 'Welcome back, OATREP445'
                    : tab === 'Manage Commodities' ? 'Manage Commodities'
                    : tab === 'Broadcast' ? 'Broadcast'
                    : tab === 'Customers' ? 'Customers'
                    : tab === 'Shipment Tracking' ? 'Shipment Tracking'
                    : tab === 'Roles' ? 'Roles'
                    : tab === 'Manage Users' ? 'Manage Users'
                    : tab === 'Messages' && 'Messages'
                   }
                 </p>
                 {tab === 'Dashboard' &&
                 <p className='text-[10px] font-normal text-[#667085] lg:mt-1 lg:text-xs xl:text-sm'>
                      Manage users and purchase requests
                 </p>
                }
             </div>

             <div onClick={()=>setOpen(!open)}
             className='absolute top-9 right-5 z-40 md:top-11 md:right-8 lg:hidden'>
                    {
                    open
                    ?<IoCloseOutline className='text-2xl text-black' />
                    :<RxHamburgerMenu className='text-2xl text-black' />
                    }
             </div>

            </div>

            {/* CONTENTS */}

              <div className='w-full lg:w-[80%] xl:w-[80%]'>
               {
                   tab === 'Dashboard' ? <AdminHome  />
                  :tab === 'Manage Commodities' ? <ManageCommodities  />
                  :tab === 'Customers' ? <Customers />
                  :tab === 'Broadcast' && <Broadcasts />
               } 
              </div>
               
            </div>
    </div>
  )
}
export default AdminLayout
