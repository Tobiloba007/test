import React, { useEffect, useState } from 'react'
import Navbar from '../../components/general/Navbar'
import logo from '../../assets/images/obaLogo.svg'
import oatLogo from '../../assets/images/obaLogo2.svg'
import image2 from '../../assets/images/sign-up-bg.png'
import success from '../../assets/icons/success.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux'
import { resendOtp, verifyAccount } from '../../features/authentication/AuthActions'




const Verification = () => {
    const [showModal, setShowModal] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const [countdown, setCountdown] = useState(5);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [otp, setOtp] = useState('');

    const [error, setError] = useState(false);

    const loading = useSelector((state) => state.auth.loading)
    const dispatch = useDispatch();

    const { pathname } = useLocation();
    const location = useLocation();
    const userEmail = location.state?.data;


     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    
      // Reset the timer if it reaches zero

    const navigate = useNavigate();

    const values = {email: userEmail, otp: otp }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(verifyAccount(values, setError, navigate, setShowModal, setIsRedirecting))
        console.log(values);
    }

    useEffect(() => {
      if (seconds === 0) {
        setSeconds(60); 
      }else if (seconds === 1){
        const emailValue = {email: values.email}
        dispatch(resendOtp(emailValue, setError))
      }
    }, [seconds, dispatch, values]);

    const handleLogin = () => {
        navigate('/login');
        setShowModal(false)
    }
    

      useEffect(() => {
        if (isRedirecting && countdown > 0) {
          const countdownInterval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
          }, 1000);
    
          return () => clearInterval(countdownInterval);
        } else if (isRedirecting && countdown === 0) {
            navigate('/login');
        }
      }, [isRedirecting, countdown, navigate]);

  return (
    <div className='flex flex-col items-center justify-start w-full font-poppins mx-auto max-w-screen-2xl'>
        <div className={`flex flex-row items-center justify-center absolute top-0 w-full bg-black h-20 shadow-md lg:h-24`}>
            <Navbar logo={logo} logo2={logo} text2={'#FFFFFF'} regBackground={'#FFFFFF'} reg={'#000000'} link={'#FFFFFF'} />
        </div>

        <div className='flex items-center justify-center w-full h-full lg:justify-between'>
        <div className='flex flex-col items-center justify-center w-full h-full mt-36 px-5 pb-10 md:w-[60%] lg:w-[50%] lg:px-24 lg:mt-24 xl:px-40'>
              <div className='flex flex-col items-center justify-start w-full lg:mt-5'>
                   <img className='h-16 w-16 xl:w-24 xl:h-24'
                   src={oatLogo} alt='Oat_Logo' />
              </div>
              <div className='flex flex-col items-start w-full mt-12'>
                   <p className='text-xl text-[#0F1828] font-semibold xl:text-2xl'>
                          Enter verification code
                   </p>
                   <p className='text-xs text-[#667085] font-normal mt-2 xl:text-sm'>
                          A 6-digit verification code has been sent to your email address {userEmail}
                   </p>
              </div>

              <form className='flex flex-col items-start w-full mt-2'>
                        <OtpInput
                            containerStyle='flex flex-row items-center justify-between w-full my-4'
                            inputStyle={{width: '44px', height: '44px', border: '1.5px solid #dddddd', textAlign: 'center', fontSize: '12px', borderRadius: '8px', outlineColor: '#000000'}}
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            shouldAutoFocus={true}
                            renderInput={(props) => <input {...props} />}
                          />

                    <div className='w-full mt-7'>
                           <p className='text-xs text-[#667085] font-medium'>
                                   Resend after {seconds} seconds
                           </p>
                    </div>

                    <div className='text-xs text-start text-medium text-red-500 mt-8 xl:text-sm'>{error}</div>

                    <button onClick={handleSubmit}
                    className='flex items-center justify-center h-14 w-full bg-black text-white text-sm rounded-md font-medium mt-3 lg:h-14'>
                       { loading
                        ?<div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full">
                           <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                        </div>
                        : 'Verify email address'
                        }
                    </button>

                    <div className='flex items-center justify-center w-full mt-5'>
                          <p className='text-xs text-[#667085] font-medium mt-2 xl:text-sm'>
                                  Already have an account? <Link to='/login' className='text-[#2196F3]'>Sign in</Link>
                          </p>
                    </div>

              </form>
        </div>

        <div className='hidden lg:flex flex-1 items-start justify-center h-screen w-[50%]'>
             <img className='h-full w-full'
             src={image2} alt='signUp_image' />
        </div>

        </div>


        
           { showModal &&
            <div className='flex items-center justify-center w-full'>
                <div onClick={()=>setShowModal(!showModal)} className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-[#aaaaaa] opacity-50'></div>
                <div className='absolute top-[38%] flex flex-col items-center justify-center px-8 py-5 bg-white rounded-lg w-[75%] md:w-[45%] lg:w-[33%] xl:w-[25%] xl:py-7 xl:px-10'>
                     <img className='w-24 h-24 xl:w-28 xl:h-28'
                     src={success} alt='success' />
                     <p className='text-base font-semibold text-black mt-3 xl:text-lg'>
                            Verification Successful
                     </p>
                     <p className='text-xs font-normal text-[#667085] mt-3 text-center xl:text-sm'>
                            You will automatically be redirected to your login page after {countdown} seconds. 
                     </p>
                     <button onClick={handleLogin}
                     className='text-center text-xs font-medium text-white bg-black rounded-md mt-4 h-12 w-full xl:text-sm'>
                        Go to login
                     </button>
                </div>
            </div>
           } 
    </div>
  )
}

export default Verification
