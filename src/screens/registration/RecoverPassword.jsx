import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/obaLogo.svg'
import image2 from '../../assets/images/sign-up-bg.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/general/Navbar';
import { IoChevronBack } from "react-icons/io5";
import { recoverPassword } from '../../features/authentication/AuthActions';





const RecoverPassword = () => {
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
              <div className='flex flex-col items-start w-full mt-12 md:mt-16 xl:mt-28'>
                   <p className='text-xl text-[#0F1828] font-semibold'>
                        Recover Password
                   </p>
                   <p className='text-xs text-[#667085] font-normal mt-2'>
                        <b>Enter the email</b> that you used when you signed up to recover your password. You will receive a <b> password reset link.</b>
                   </p>
              </div>

               <Formik
               initialValues={{ email: ''}}
               onSubmit={handleSubmit}
               validationSchema={validationSchema}
              >
              {({ handleChange, handleBlur, handleSubmit, isValid, values, errors }) => (
              <form className='flex flex-col items-start w-full mt-5 xl:mt-6'>
                    <div className='flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Email
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs text-[#0F1828] outline-black ${errors.email && 'border-red-600'} ${!errors.email && values.email  && 'border-[#2196F3]'}`}
                         placeholder='example@example.com' 
                         type='email'
                         onChange={handleChange('email')}
                         onBlur={handleBlur('email')}
                         value={values.email}
                         />
                         {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                    </div>

                    <div className='text-xs text-medium text-red-500 mt-8 xl:text-sm'>{error}</div>

                    <button onClick={handleSubmit}
                    type='submit'
                    disabled={!isValid}
                    className={`flex flex-row items-center justify-center h-12 w-full bg-[#2196F3] text-white text-sm rounded-md font-medium mt-5 lg:h-14 ${!isValid | loading &&  'bg-[#d5e6f5]'}`}>
                    { loading
                        ?<div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full">
                           <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                        </div>
                        : 'Send Link'
                       }
                    </button>

                    <div className='flex flex-col items-center justify-center w-full mt-5 pb-6'>
                          <p className='text-xs text-[#667085] font-semibold mt-2'>
                                If you need further assistance
                          </p>
                          <Link className='text-xs text-[#2196F3] font-semibold' 
                          to='/register'> Contact our support team</Link>
                    </div>

              </form>
              )}
              </Formik>
        </div>

        <div className='hidden fixed right-0 bottom-0 lg:flex flex-1 items-start justify-center w-[50%] h-screen'>
             <img className='w-full h-full'
             src={image2} alt='signUp_image' />
        </div>

        </div>
    </div>
  )
}


export default RecoverPassword
