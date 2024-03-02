import React, { useEffect, useState } from 'react'
import Navbar from '../../components/general/Navbar'
import logo from '../../assets/images/obaLogo.svg'
import oatLogo from '../../assets/images/obaLogo2.svg'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import flag from '../../assets/icons/nigeria.svg'
import { SlArrowDown } from "react-icons/sl";
import image2 from '../../assets/images/sign-up-bg.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../../features/authentication/AuthActions';



const validationSchema = yup.object().shape({
      first_name: yup.string().required('first name is required')
     .min(2, 'first name must be at least 2 characters')
     .max(30, 'first name must not exceed 50 characters'),
      last_name: yup.string().required('last name is required')
     .min(2, 'last name must be at least 2 characters')
     .max(30, 'last name must not exceed 50 characters'),
      company_name: yup.string().required('company name is required')
     .min(2, 'company name must be at least 2 characters')
     .max(50, 'First name must not exceed 70 characters'),
      phone: yup.string().required('Phone number is required')
      .matches(/^[0-9]+$/, 'Phone number must contain only digits')
      .min(6, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number must be at most 15 digits'),
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
      password_confirmation: yup.string().required('Confirm Password is required')
     .oneOf([yup.ref('password'), null], 'Passwords do not match'),
    });


const RegForm = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const loading = useSelector((state) => state.auth.loading)
    const dispatch = useDispatch();


    const navigate = useNavigate();

    const handleSubmit = (values) => {
       dispatch(createAccount(values, setError, navigate))
       console.log(values.email);
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
        <div className='flex flex-col items-center justify-center w-full mt-28 px-5 pb-10 md:w-[60%] lg:w-[50%] lg:pb-0 lg:px-24 xl:px-44'>
              <div className='flex flex-col items-center justify-start w-full lg:mt-5'>
                   <img className='h-20 w-20'
                   src={oatLogo} alt='Oat_Logo' />
              </div>
              <div className='flex flex-col items-start w-full mt-8 lg:mt-6'>
                   <p className='text-xl text-[#0F1828] font-semibold'>
                         Sign Up
                   </p>
                   <p className='text-xs text-[#667085] font-normal mt-2'>
                         Welcome to OAT! Please enter your details.
                   </p>
              </div>


              <Formik
               initialValues={{ first_name: '', last_name: '', company_name: '', phone: '', email: '', password: '', password_confirmation: '' }}
               onSubmit={handleSubmit}
               validationSchema={validationSchema}
              >
              {({ handleChange, handleBlur, handleSubmit, isValid, values, errors }) => (

              <form onSubmit={handleSubmit} className='flex flex-col items-start w-full mt-2'>
                    <div className='flex flex-row items-start justify-between w-full mt-2'>
                    {/* FIRST NAME */}
                    <div className='flex flex-col items-start w-[47.5%] mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                                    First Name
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs outline-black text-[#0F1828] ${errors.first_name && 'border-red-600'} ${!errors.first_name && values.first_name  && 'border-[#2196F3]'}`}
                         placeholder='John' 
                         type='text'
                         onChange={handleChange('first_name')}
                         onBlur={handleBlur('first_name')}
                         value={values.first_name}
                         />
                         {errors.first_name && <p className="text-red-600 text-xs">{errors.first_name}</p>}
                    </div>

                    {/* LAST NAME */}
                    <div className='flex flex-col items-start w-[47.5%] mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Last Name
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs outline-black text-[#0F1828] ${errors.last_name && 'border-red-600'} ${!errors.last_name && values.last_name  && 'border-[#2196F3]'}`}
                         placeholder='Doe' 
                         type='text'
                         onChange={handleChange('last_name')}
                         onBlur={handleBlur('last_name')}
                         value={values.last_name}
                         />
                         {errors.last_name && <p className="text-red-600 text-xs">{errors.last_name}</p>}
                    </div>
                    </div>

                    {/* COMPANY NAME */}
                    <div className='flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Company Name
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs outline-black text-[#0F1828] ${errors.company_name && 'border-red-600'} ${!errors.company_name && values.company_name  && 'border-[#2196F3]'}`}
                         placeholder='Honda etc.' 
                         type='text'
                         onChange={handleChange('company_name')}
                         onBlur={handleBlur('company_name')}
                         value={values.company_name}
                         />
                         {errors.company_name && <p className="text-red-600 text-xs">{errors.company_name}</p>}
                    </div>

                    {/* PHONE */}
                    <div className='relative flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Phone Number
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-28 text-xs outline-black text-[#0F1828] ${errors.phone && 'border-red-600'} ${!errors.phone && values.phone  && 'border-[#2196F3]'}`}
                         placeholder='123 456 7890' 
                         type='text'
                         onChange={handleChange('phone')}
                         onBlur={handleBlur('phone')}
                         value={values.phone}
                         />
                         {errors.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}
                         <div className='absolute top-9 flex items-center justify-center pl-4'>
                               <img className='h-7 w-7' 
                               src={flag} alt='flag' />
                               <p className='text-xs text-[#344054] font-medium px-2'>
                                   +234
                               </p>
                               <SlArrowDown className='text-[11px]' />
                         </div>
                    </div>

                    {/* EMAIL */}
                    <div className='flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Email
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs outline-black text-[#0F1828] ${errors.email && 'border-red-600'} ${!errors.email && values.email  && 'border-[#2196F3]'}`}
                         placeholder='example@example.com' 
                         type='email'
                         onChange={handleChange('email')}
                         onBlur={handleBlur('email')}
                         value={values.email}
                         />
                         {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                    </div>

                    {/* PASSWORD */}
                    <div className='relative flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Password
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs outline-black text-[#0F1828] ${errors.password && 'border-red-600'} ${!errors.password && values.password  && 'border-[#2196F3]'}`}
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
                    className={`flex items-center justify-center h-14 w-full bg-black text-white text-sm rounded-md font-medium mt-3 lg:h-14 ${!isValid &&  'bg-[#dddddd]'}`}>
                            { loading
                             ?<div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full">
                                <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                             </div>
                             : 'Sign up'
                            }
                    </button>

                    <div className='flex items-center justify-center w-full mt-5'>
                          <p className='text-xs text-[#667085] font-medium mt-2'>
                                  Already have an account? <Link to='/login' className='text-[#D15F1E]'>Sign in</Link>
                          </p>
                    </div>

              </form>
              )}
        </Formik>
        </div>

        <div className='hidden lg:flex flex-1 items-start justify-center w-[50%] h-full'>
             <img className='h-full w-full'
             src={image2} alt='signUp_image' />
        </div>

        </div>
    </div>
    </div>
  )
}

export default RegForm
