import React, { useEffect, useState } from 'react'
import logo from '../assets/images/obaLogo.svg'
import oatLogo from '../assets/images/obaLogo2.svg'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import image2 from '../assets/images/sign-up-bg.png'
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/general/Navbar';
import { Formik } from 'formik';
import * as yup from 'yup';




const Login = () => {
    const [show, setShow] = useState(false);
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);


    const handleSubmit = (event) => {
        setLoading(true)
        event.preventDefault();
    }

    const validationSchema = yup.object().shape({
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
    });

  return (
    <div className='flex flex-col items-center justify-start w-full font-poppins'>
        <div className={`flex flex-row items-center justify-center absolute top-0 w-full bg-black h-20 shadow-md lg:h-24`}>
            <Navbar logo={logo} logo2={logo} text2={'#FFFFFF'} regBackground={'#FFFFFF'} reg={'#000000'} link={'#FFFFFF'} />
        </div>

        <div className='flex items-start justify-center w-full h-full lg:justify-between'>
        <div className='flex flex-col items-center justify-center w-full mt-28 px-5 pb-10 md:w-[60%] lg:w-[50%] lg:px-24 xl:px-44 xl:mt-56'>
              <div className='flex flex-col items-center justify-start w-full lg:mt-8'>
                   <img className='h-20 w-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28'
                   src={oatLogo} alt='Oat_Logo' />
              </div>
              <div className='flex flex-col items-start w-full mt-8 lg:mt-6'>
                   <p className='text-xl text-[#0F1828] font-semibold'>
                         Log in
                   </p>
                   <p className='text-xs text-[#667085] font-normal mt-2'>
                            Welcome back! Please enter your details.
                   </p>
              </div>

               <Formik
               initialValues={{ email: '', password: '' }}
               onSubmit={handleSubmit}
               validationSchema={validationSchema}
              >
              {({ handleChange, handleBlur, handleSubmit, isValid, values, errors }) => (
              <form className='flex flex-col items-start w-full mt-2'>
                    <div className='flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Email
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs text-[#0F1828] ${errors.email && 'border-red-600'} ${!errors.email && values.email  && 'border-[#2196F3]'}`}
                         placeholder='example@example.com' 
                         type='email'
                         onChange={handleChange('email')}
                         onBlur={handleBlur('email')}
                         value={values.email}
                         />
                         {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                    </div>

                    <div className='relative flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Password
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs text-[#0F1828] ${errors.password && 'border-red-600'} ${!errors.password && values.password  && 'border-[#2196F3]'}`}
                         placeholder='Honda etc.' 
                         type={show ? 'text' : 'password'}
                         onChange={handleChange('password')}
                         onBlur={handleBlur('password')}
                         value={values.password}
                         />
                         {errors.password && <p className="text-red-600 text-xs">{errors.password}</p>}
                         {
                            show
                            ?<IoEyeOffOutline onClick={()=>setShow(!show)}
                            className='absolute top-[37px] right-5 text-black text-2xl' />
                            :<IoEyeOutline onClick={()=>setShow(!show)}
                            className='absolute top-[37px] right-5 text-black text-2xl' />
                         }
                        
                    </div>

                    <div className='flex flex-row items-center justify-between w-full mt-4'>
                            <div className='flex flex-row items-center justify-start mt-1'>
                                  <input className='h-4 w-4 border-[2px] border-gray-100 rounded-lg pl-4 text-xs '
                                  placeholder='example@example.com' 
                                  type='checkbox'
                                  />
                                  <p className='text-[11px] text-[#344054] font-medium ml-2 mt-1'>
                                         Remember me
                                  </p>
                            </div>
                            <p className='text-[11px] text-[#2196F3] font-semibold ml-2 mt-1'>
                                   Forgot password?
                            </p>
                    </div>


                    <button onClick={handleSubmit}
                    className='flex flex-row items-center justify-center h-12 w-full bg-black text-white text-sm rounded-sm font-medium mt-7 lg:h-14 lg:mt-10'>
                    { loading
                        ?<div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full">
                           <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                        </div>
                        : 'Sign in'
                       }
                    </button>

                    <div className='flex items-center justify-center w-full mt-5'>
                          <p className='text-xs text-[#667085] font-medium mt-2'>
                                  Don't have an account? <Link to='/register' className='text-[#D15F1E]'>Sign up</Link>
                          </p>
                    </div>

              </form>
              )}
              </Formik>
        </div>

        <div className='hidden lg:flex flex-1 items-start justify-center w-[50%]'>
             <img className='w-full'
             src={image2} alt='signUp_image' />
        </div>

        </div>
    </div>
  )
}


export default Login
