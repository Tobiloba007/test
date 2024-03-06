import React, { useEffect, useState } from 'react'
import Navbar from '../../components/general/Navbar'
import logo from '../../assets/images/obaLogo.svg'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import image2 from '../../assets/images/sign-up-bg.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';



const validationSchema = yup.object().shape({
      password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
      password_confirmation: yup.string().required('Confirm Password is required')
     .oneOf([yup.ref('password'), null], 'Passwords do not match'),
    });


const ChangePassword = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const loading = useSelector((state) => state.auth.loading)
    const dispatch = useDispatch();


    const navigate = useNavigate();

    const handleSubmit = (values) => {
       console.log(values);
    }

    const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

  return (
    <div className='flex flex-col items-center justify-start mx-auto max-w-screen-2xl'>
    <div className='flex flex-col items-center justify-start w-full h-full font-poppins'>
        <div className={`flex flex-row items-center justify-center w-full bg-black h-20 shadow-md z-50 fixed top-0 lg:h-24`}>
            <Navbar logo={logo} logo2={logo} text2={'#FFFFFF'} regBackground={'#FFFFFF'} reg={'#000000'} link={'#FFFFFF'} />
        </div>

        <div className='flex items-start justify-center w-full h-full lg:justify-between'>
        <div className='flex flex-col items-center justify-end w-full h-full mt-28 px-5 pb-10 md:w-[60%] lg:w-[50%] lg:pb-0 lg:px-24 xl:px-44'>
              <div className='flex flex-col items-start w-full h-full mt-16 lg:mt-20 xl:mt-36'>
                   <p className='text-xl text-[#0F1828] font-semibold'>
                        Update Password
                   </p>
                   <p className='text-xs text-[#667085] font-normal mt-2'>
                        Enter a secure new password for your account
                   </p>
              </div>


              <Formik
               initialValues={{ password: '', password_confirmation: '' }}
               onSubmit={handleSubmit}
               validationSchema={validationSchema}
              >
              {({ handleChange, handleBlur, handleSubmit, isValid, values, errors }) => (

              <form onSubmit={handleSubmit} className='flex flex-col items-start w-full mt-2'>
                    {/* PASSWORD */}
                    <div className='relative flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               New Password
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs outline-black text-[#0F1828] ${errors.password && 'border-red-600'} ${!errors.password && values.password  && 'border-[#2196F3]'}`}
                         placeholder='password' 
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

                     {/* PASSWORD CONFIRMATION */}
                    <div className='relative flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Confirm Password
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs outline-black text-[#0F1828] ${errors.password_confirmation && 'border-red-600'} ${!errors.password_confirmation && values.password_confirmation  && 'border-[#2196F3]'}`}
                         placeholder='confirm password' 
                         type={show ? 'text' : 'password'}
                         onChange={handleChange('password_confirmation')}
                         onBlur={handleBlur('password_confirmation')}
                         value={values.password_confirmation}
                         />
                         {errors.password_confirmation && <p className="text-red-600 text-xs">{errors.password_confirmation}</p>}
                         {
                            show
                            ?<IoEyeOffOutline onClick={()=>setShow(!show)}
                            className='absolute top-[37px] right-5 text-black text-2xl' />
                            :<IoEyeOutline onClick={()=>setShow(!show)}
                            className='absolute top-[37px] right-5 text-black text-2xl' />
                         }
                        
                    </div>


                     <div className='text-xs text-medium text-red-500 mt-8 xl:text-sm'>{error}</div>


                    <button type="submit"
                    disabled={!isValid}
                    className={`flex items-center justify-center h-14 w-full bg-[#2196F3] text-white text-sm rounded-md font-medium mt-3 lg:h-14 ${!isValid | loading && 'bg-[#d5e6f5]'}`}>
                            { loading
                             ?<div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full">
                                <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                             </div>
                             : 'Set new password'
                            }
                    </button>

                    <div className='flex flex-col items-center justify-center w-full mt-6 pb-6 lg:mt-8'>
                     <p className='text-xs text-[#667085] font-medium mt-2'>
                           If you need further assistance
                    </p>
                    <Link className='text-xs text-[#2196F3] font-semibold' 
                    to='/register'> Contact our support team</Link>
             </div>

              </form>
              )}
        </Formik>
        </div>

        <div className='hidden fixed right-0 lg:flex flex-1 items-start justify-center w-[50%] h-full'>
             <img className='h-full w-full'
             src={image2} alt='signUp_image' />
        </div>

        </div>
    </div>
    </div>
  )
}

export default ChangePassword
