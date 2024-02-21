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



const validationSchema = yup.object().shape({
      name: yup.string().required('name is required')
     .min(2, 'name must be at least 2 characters')
     .max(50, 'name must not exceed 50 characters'),
      company: yup.string().required('company name is required')
     .min(2, 'company name must be at least 2 characters')
     .max(50, 'First name must not exceed 70 characters'),
     phoneNumber: yup.string().required('Phone number is required')
      .matches(/^[0-9]+$/, 'Phone number must contain only digits')
      .min(6, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number must be at most 15 digits'),
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
     confirmPassword: yup.string().required('Confirm Password is required')
     .oneOf([yup.ref('password'), null], 'Passwords do not match'),
    });


const RegForm = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/verification')
        setLoading(true)
    }

    const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

  return (
    <div className='flex flex-col items-center justify-start w-full font-poppins'>
        <div className={`flex flex-row items-center justify-center absolute top-0 w-full bg-black h-20 shadow-md lg:h-24`}>
            <Navbar logo={logo} logo2={logo} text2={'#FFFFFF'} regBackground={'#FFFFFF'} reg={'#000000'} link={'#FFFFFF'} />
        </div>

        <div className='flex items-start justify-center w-full h-full lg:justify-between'>
        <div className='flex flex-col items-center justify-center w-full mt-28 px-5 pb-10 md:w-[60%] lg:w-[50%] lg:px-24 xl:px-44'>
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
               initialValues={{ name: '', company: '', phoneNumber: '', email: '', password: '', confirmPassword: '' }}
               onSubmit={handleSubmit}
               validationSchema={validationSchema}
              >
              {({ handleChange, handleBlur, handleSubmit, isValid, values, errors }) => (

              <form onSubmit={handleSubmit} className='flex flex-col items-start w-full mt-2'>

                    <div className='flex flex-col items-start w-full mt-5'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Your Name
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs outline-black text-[#0F1828] ${errors.name && 'border-red-600'} ${!errors.name && values.name  && 'border-[#2196F3]'}`}
                         placeholder='John Doe' 
                         type='text'
                         onChange={handleChange('name')}
                         onBlur={handleBlur('name')}
                         value={values.name}
                         />
                         {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
                    </div>

                    <div className='flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Company Name
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs outline-black text-[#0F1828] ${errors.company && 'border-red-600'} ${!errors.company && values.company  && 'border-[#2196F3]'}`}
                         placeholder='Honda etc.' 
                         type='text'
                         onChange={handleChange('company')}
                         onBlur={handleBlur('company')}
                         value={values.company}
                         />
                         {errors.company && <p className="text-red-600 text-xs">{errors.company}</p>}
                    </div>

                    <div className='relative flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Phone Number
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-28 text-xs outline-black text-[#0F1828] ${errors.phoneNumber && 'border-red-600'} ${!errors.phoneNumber && values.phoneNumber  && 'border-[#2196F3]'}`}
                         placeholder='123 456 7890' 
                         type='number'
                         onChange={handleChange('phoneNumber')}
                         onBlur={handleBlur('phoneNumber')}
                         value={values.phoneNumber}
                         />
                         {errors.phoneNumber && <p className="text-red-600 text-xs">{errors.phoneNumber}</p>}
                         <div className='absolute top-9 flex items-center justify-center pl-4'>
                               <img className='h-7 w-7' 
                               src={flag} alt='flag' />
                               <p className='text-xs text-[#344054] font-medium px-2'>
                                   +234
                               </p>
                               <SlArrowDown className='text-[11px]' />
                         </div>
                    </div>

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

                    <div className='relative flex flex-col items-start w-full mt-3'>
                         <p className='text-xs text-[#344054] font-medium mt-2'>
                               Confirm Password
                         </p>
                         <input className={`h-11 w-full border-[1.5px] border-gray-300 rounded-lg mt-1 pl-4 text-xs outline-black text-[#0F1828] ${errors.confirmPassword && 'border-red-600'} ${!errors.confirmPassword && values.confirmPassword  && 'border-[#2196F3]'}`}
                         placeholder='Honda etc.' 
                         type={show ? 'text' : 'password'}
                         onChange={handleChange('confirmPassword')}
                         onBlur={handleBlur('confirmPassword')}
                         value={values.confirmPassword}
                         />
                         {errors.confirmPassword && <p className="text-red-600 text-xs">{errors.confirmPassword}</p>}
                         {
                            show
                            ?<IoEyeOffOutline onClick={()=>setShow(!show)}
                            className='absolute top-[37px] right-5 text-black text-2xl' />
                            :<IoEyeOutline onClick={()=>setShow(!show)}
                            className='absolute top-[37px] right-5 text-black text-2xl' />
                         }
                        
                    </div>


                    <button type="submit"
                    className={`flex items-center justify-center h-14 w-full bg-black text-white text-sm rounded-md font-medium mt-7 lg:h-14 lg:mt-10 ${!isValid &&  'bg-[#dddddd]'}`}>
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

        <div className='hidden lg:flex flex-1 items-start justify-center h-[62rem] w-[50%]'>
             <img className='h-full w-full'
             src={image2} alt='signUp_image' />
        </div>

        </div>
    </div>
  )
}

export default RegForm
