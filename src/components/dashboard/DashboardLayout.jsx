import React, { useEffect, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import logo from '../../assets/images/obaLogo.svg'
import { LuBarChart2 } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { MdLocationSearching } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import BuyerHome from './buyerDashboard/BuyerHome';
import BuyerOrders from './buyerDashboard/BuyerOrders';
import BuyerNotifications from './buyerDashboard/BuyerNotifications';
import BuyerShipTracking from './buyerDashboard/BuyerShipTracking';
import BuyerProfile from './buyerDashboard/BuyerProfile';
import SellerHome from './sellerDashboard/SellerHome';
import SellerPurchaseRequests from './sellerDashboard/SellerPurchaseRequests';
import SellerNotification from './sellerDashboard/SellerNotification';
import SellerShipmentTracking from './sellerDashboard/SellerShipmentTracking';
import SellerProfile from './sellerDashboard/SellerProfile';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginToken } from '../../features/authentication/AuthSlice';





const DashboardLayout = () => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState('Dashboard');
    const [user, setUser] = useState('');
    // const [loading, setLoading] = useState(null);

    const dispatch = useDispatch();

    const loginToken = useSelector((state) => state.auth.loginToken)
    const userData = useSelector((state) => state.auth.user)


      useEffect(() => {
        const fetchUser = async () => {
          try {
            setUser(userData)
            console.log(user);
          } catch (error) {
            console.log('Error retrieving data:', error);
          }
        };
    
        fetchUser();
      }, [user, userData]);


    const tabs = [
        {
            id: 1,
            icon: <LuBarChart2 className='text-white text-lg xl:text-[22px]' />,
            name: 'Dashboard',
        },
        {
            id: 2,
            icon: <IoCartOutline className='text-white text-lg xl:text-[22px]' />,
            name: user.user_type === 'seller' ? 'Purchase Requests' : user.user_type === 'buyer' && 'My Purchase Orders',
        },
        {
            id: 3,
            icon: <MdLocationSearching className='text-white text-lg xl:text-[22px]' />,
            name: 'Shipment Tracking',
        },
        {
            id: 4,
            icon: <IoIosNotificationsOutline className='text-white text-lg xl:text-[22px]' />,
            name: 'Notifications',
            no: 3,
        },
        {
            id: 5,
            icon: <HiOutlineUser className='text-white text-lg xl:text-[22px]' />,
            name: 'My Profile',
        },
    ]


    const handleTab = (item) => {
        setTab(item)
        setOpen(false)
        console.log(tab);
    }

    const navigate = useNavigate()

    const handleLogout = async () => {
      console.log('logout')
      dispatch(setLoginToken(null))
      setUser(null)
      navigate('/')
      console.log(loginToken, 'loggedOut');
    }


    const handlePurchaseRequest = () => {
      navigate('/buyer-request-flow')
    }

    const handleUploadRequest = () => {
      navigate('/seller-request-flow')
    }



  return (
    <div className='flex flex-row items-start justify-start w-full h-full font-poppins'>
          <div onClick={()=>setOpen(false)}
          className={`fixed ${open ? 'flex' : 'hidden'} items-center justify-center h-full w-full z-30 bg-[#000000] opacity-50`}></div>
            {/*  VERTICAL BAR */}
          <motion.div 
          initial="hidden"
          animate="visible"
          variants={open ? slideInVariants : ''}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className={`${open ? 'fixed' : 'hidden'} lg:flex flex-col items-start justify-start w-[55%] h-screen z-50 bg-[#101828] px-3 pt-6 md:w-[30%] 
          lg:fixed lg:w-[20%] xl:px-5 xl:w-[21%]`}>
               <div className='flex flex-row justify-start items-center'>
                   <img className='w-12 h-12'
                   src={logo} alt='logo'/>
                   <p className='text-lg font-black text-[#ffffff] ml-2 xl:'>
                      OAT
                 </p>
               </div>

               <div className='flex flex-col items-start justify-start w-full mt-10'>
                   {tabs.map((item) => {
                    return(
                        <div onClick={()=>handleTab(item.name)} 
                        key={item.id} className={`${tab === item.name && 'bg-[#344054]'} flex flex-row justify-start items-center px-1 h-11 w-[100%] cursor-pointer rounded-md mt-2 xl:h-12 xl:px-3`}>
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


               <div className='absolute left-0 right-3 bottom-10 flex flex-col items-center px-3 justify-end w-full xl:px-3'>
                     <div className='flex flex-row justify-start items-center px-1 h-11 w-[100%] hover:bg-[#344054] rounded-md mt-2 xl:px-3'>
                        <LuBarChart2 className='text-white text-lg xl:text-[22px]' />
                        <p className='text-[11px] font-normal text-[#ffffff] ml-[10px] leading-3 xl:text-[13px]'>
                               Support
                        </p>
                     </div>

                     {/* LINE */}
                     <div className='border-[0.2px] mt-2 border-[#475467] w-[100%]'></div>

                     {/* NAME AND EMAIL */}
                     <div className='flex flex-row justify-between items-center px-1 h-11 w-[100%] hover:bg-[#344054] rounded-md mt-3'>
                         <div className='flex flex-col items-start justify-center'>
                              <p className='text-[11px] font-medium text-[#ffffff] xl:text-[14px]'>
                                    Ololade Asake
                               </p>
                              <p className='text-[10px] font-normal text-[#475467] xl:text-[13px] xl:font-semibold'>
                                     mrmoney@gmail.com
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
          <div className='flex flex-col items-start justify-center w-full fixed px-5 bg-white shadow-md border-b-[1px] z-30 border-[#dddddd] h-[100px] md:h-28 md:px-8 lg:flex-row 
          lg:items-center lg:justify-between lg:px-7 lg:h-24 lg:w-[80%] xl:h-28 xl:px-16'>
             <div className='flex flex-col items-start justify-center'>
                 <p className='text-base font-medium text-[#101828] lg:text-xl xl:text-2xl'>
                   {
                    tab === 'Dashboard' ? 'Welcome back, Ololade'
                    : tab === 'My Purchase Orders' ? 'Purchase Orders'
                    : tab === 'Purchase Requests' ? 'Purchase Requests'
                    : tab === 'Shipment Tracking' ? 'Shipment Tracking'
                    : tab === 'Notifications' ? 'Notifications'
                    : tab === 'My Profile' && 'My Profile'
                   }
                 </p>
                 {tab === 'Dashboard' &&
                 <p className='text-[10px] font-normal text-[#667085] lg:mt-1 lg:text-xs xl:text-sm'>
                     Track, manage and view your purchase orders
                 </p>
                }
             </div>

             {
              user.user_type === 'buyer'
              ?<div onClick={handlePurchaseRequest}
              className='flex flex-row items-center justify-center cursor-pointer w-36 h-7 mt-2 bg-[#2196F3] rounded-md md:h-8 md:w-[155px] lg:w-44 xl:h-10 xl:w-48'>
                 <IoMdAdd className='text-white text-xs lg:text-[13px] xl:text-sm' />
                 <p className='text-[9px] font-medium text-[#ffffff] ml-2 pt-[2px] md:text-[10px] lg:text-[11px] xl:text-xs'>
                      New Purchase Request
                 </p>
             </div>

             : user.user_type === 'seller' &&
             <div onClick={handleUploadRequest}
             className='flex flex-row items-center justify-center cursor-pointer w-36 h-7 mt-2 bg-[#2196F3] rounded-md md:h-8 md:w-[155px] lg:w-44 xl:h-10 xl:w-48'>
                 <IoMdAdd className='text-white text-xs lg:text-[13px] xl:text-sm' />
                 <p className='text-[9px] font-medium text-[#ffffff] ml-2 pt-[2px] md:text-[10px] lg:text-[11px] xl:text-xs'>
                      Upload Commodity
                 </p>
             </div>
             }

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

              <div className='w-full lg:w-[80%] xl:w-[80%] xl:px-8'>
               {
                   tab === 'Dashboard' && user.user_type === 'buyer' ?  <BuyerHome setTab={setTab} />
                 : tab === 'My Purchase Orders' && user.user_type === 'buyer' ?  <BuyerOrders />
                 : tab === 'Notifications' && user.user_type === 'buyer' ?  <BuyerNotifications />
                 : tab === 'Shipment Tracking' && user.user_type === 'buyer' ?  <BuyerShipTracking />
                 : tab === 'My Profile' && user.user_type === 'buyer' &&  <BuyerProfile />
               } 

               {
                   tab === 'Dashboard' && user.user_type === 'seller' ?  <SellerHome />
                 : tab === 'Purchase Requests' && user.user_type === 'seller' ?  <SellerPurchaseRequests />
                 : tab === 'Notifications' && user.user_type === 'seller' ?  <SellerNotification />
                 : tab === 'Shipment Tracking' && user.user_type === 'seller' ?  <SellerShipmentTracking />
                 : tab === 'My Profile' && user.user_type === 'seller' &&  <SellerProfile />
               }
              </div>
               
            </div>
    </div>
  )
}

export default DashboardLayout
