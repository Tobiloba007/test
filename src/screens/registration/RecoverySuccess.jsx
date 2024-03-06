import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/obaLogo.svg'
import image2 from '../../assets/images/sign-up-bg.png'
import mail from '../../assets/icons/message.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/general/Navbar';
import { IoChevronBack } from "react-icons/io5";
import { recoverPassword } from '../../features/authentication/AuthActions';




const RecoverySuccess = () => {
    const { pathname } = useLocation();

    const [error, setError] = useState(false);
    const loading = useSelector((state) => state.auth.loading)
    const dispatch = useDispatch();


    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const navigate = useNavigate()


    const handleSubmit = (values) => {
      dispatch(recoverPassword(values, setError, navigate))
      console.log(values)
    }

    const validationSchema = yup.object().shape({
      email: yup.string().email('Invalid email').required('Email is required'),
    });

  return (
    <div className='flex flex-col items-center justify-start w-full font-poppins mx-auto max-w-screen-2xl'>
        <div className={`flex flex-row items-center justify-center w-full bg-black h-20 z-50 fixed top-0 shadow-md lg:h-20`}>
            <Navbar logo={logo} logo2={logo} text2={'#FFFFFF'} regBackground={'#FFFFFF'} reg={'#000000'} link={'#FFFFFF'} />
        </div>

        <div className='flex items-start justify-center w-full h-full lg:justify-between lg:items-center'>
        <div className='flex flex-col items-center justify-center w-full mt-28 px-5 md:w-[60%] lg:w-[50%] lg:mt-32 lg:px-24 xl:px-44'>
             <div onClick={()=>navigate(-1)} className='flex items-center cursor-pointer justify-start w-full mt-8 lg:mt-0 xl:mt-8'>
                  <IoChevronBack className='text-base xl:text-lg' />
                  <p className='text-xs font-medium pl-2 md:pl-3 xl:text-sm'>Back</p>
             </div>
             <div className='flex items-center justify-start w-full mt-20 md:mt-24'>
                    <img className='w-16 h-10 lg:h-16 lg:w-20'
                    src={mail} alt='message'/>
             </div>
              <div className='flex flex-col items-start w-full mt-5 lg:mt-7'>
                   <p className='text-lg text-[#0F1828] font-semibold'>
                       We've sent you an email with a link to reset your password.
                   </p>
                   <p className='text-xs text-[#667085] font-normal mt-5 lg:mt-8'>
                       Check your spam and promotions folder if it doesn't appear in your main mailbox.
                   </p>
              </div>
              <div className='flex flex-col items-start justify-center w-full mt-6 pb-6 lg:mt-8'>
                     <p className='text-xs text-[#667085] font-medium mt-2'>
                          Didn't Receive Email?
                    </p>
                    <Link className='text-xs text-[#2196F3] font-semibold' 
                    to='/register'> Contact our support team</Link>
             </div>

        </div>

        <div className='hidden fixed right-0 bottom-0 lg:flex flex-1 items-start justify-center w-[50%] h-screen'>
             <img className='w-full h-full'
             src={image2} alt='signUp_image' />
        </div>

        </div>
    </div>
  )
}

export default RecoverySuccess
