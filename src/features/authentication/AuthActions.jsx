import axios from 'axios';
import { setLoading, setLoginToken, setUser } from './AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';



const BASE_URL = process.env.REACT_APP_API_URL

    // CREATE ACCOUNT
    export const createAccount = (values, setError, navigate) => async (dispatch) => {
        dispatch(setLoading(true));
        try{
          const response = await axios.post(`${BASE_URL}/auth/register`, values);
          if (response.status === 201) {
            console.log('Registration successfull');
            navigate('/verification', { state: { data: values.email } })
          } else if (response.status !== 201) {
            console.log('Registration failed with status code:', response.status);
          } 
        } catch(error) {
            if (error.response) {
              // The server responded with an error (e.g., HTTP status code 4xx or 5xx)
              setError(error.message)
              setError(error.response.data.data.message.email[0])
              console.log(error.response.data.data.message.email[0])
              console.error('API Error:', error.response.status);
            } else if (error.request) {
              // The request was made but no response was received (e.g., network issue)
              setError('Please check your internet connection...')
              console.error('Network Error:', error.request);
            } 
          };
        
        dispatch(setLoading(false));
      };



    // VERIFY ACCOUNT
    export const verifyAccount = (values, setError, navigate, setShowModal, setIsRedirecting) => async (dispatch) => {
        dispatch(setLoading(true));
        try{
          const response = await axios.post(`${BASE_URL}/auth/register/verify`, values);
          if (response.status === 200) {
            console.log('Verification successfull')
            setShowModal(true)
            setIsRedirecting(true)
            // navigate('/login')
          } else if (response.status !== 200) {
            console.log('Verification failed with status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
              console.log(error.response)
              setError(error.response.data.message)
              console.error('API Error:', error.response.status);
            } else if (error.response.data.data.message){
                setError(error.response.data.data.message.email[0])
                console.log(error.response.data.data.message.email[0])
                console.log(error.response)
            } else if (error.request) {
              // The request was made but no response was received (e.g., network issue)
              setError('Please check your internet connection...')
              console.error('Network Error:', error.request);
            } 
          };
        
        dispatch(setLoading(false));
      };



    // RESEND OTP
    export const resendOtp = (emailValue, setError) => async (dispatch) => {
        dispatch(setLoading(true));
        try{
          const response = await axios.post(`${BASE_URL}/auth/register/resend-otp`, emailValue);
          if (response.status === 200) {
            console.log('Verification successfull')
          } else if (response.status !== 200) {
            console.log('Verification failed with status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
              console.log(error.response)
              setError(error.response.data.message)
              console.error('API Error:', error.response.status);
            } else if (error.response.data.data.message){
                setError(error.response.data.data.message.email[0])
                console.log(error.response.data.data.message.email[0])
                console.log(error.response)
            } else if (error.request) {
              // The request was made but no response was received (e.g., network issue)
              setError('Please check your internet connection...')
              console.error('Network Error:', error.request);
            } 
          };
        
        dispatch(setLoading(false));
      };


    // LOGIN
    export const login = (values, setError, navigate) => async (dispatch) => {
        dispatch(setLoading(true));
        try{
          const response = await axios.post(`${BASE_URL}/auth/login`, values);
          if (response.status === 200) {
            localStorage.setItem('userData', JSON.stringify(response.data.data.user));
            const Token = response.data.data.access_token
            console.log(response.data.data.user, 'Hello world');
            AsyncStorage.setItem('token', Token);
            dispatch(setLoginToken(Token))
            navigate(response.data.data.user.user_type === 'buyer' && response.data.data.user.is_onboarding_complete === true  ? '/buyer-dashboard' 
                     : response.data.data.user.user_type === 'seller' && response.data.data.user.is_onboarding_complete === true ? '/seller-dashboard' 
                     : response.data.data.user.is_onboarding_complete === false && '/select-role')
          } else if (response.status !== 200) {
            console.log('Login failed with status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
              console.log(error.response)
              setError(error.response.data.message)
              console.error('API Error:', error.response.status);
            } else if (error.request) {
              // The request was made but no response was received (e.g., network issue)
              setError('Please check your internet connection...')
              console.error('Network Error:', error.request);
            } 
          };
        
        dispatch(setLoading(false));
      };



    // PASSWORD RECOVERY
    export const recoverPassword = (values, setError, navigate) => async (dispatch) => {
        dispatch(setLoading(true));
        try{
          const response = await axios.post(`${BASE_URL}/auth/forgot-password`, values);
          if (response.status === 200) {
            console.log(response);
            console.log('Link sent to email address')
            navigate('/recoverySuccess')
          } else if (response.status !== 200) {
            console.log('Login failed with status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
              console.log(error.response)
              // setError(error.response.data.message)
              setError("The email you entered doesn't match our records. Please double-check and try again")
              console.error('API Error:', error.response.status);
            } else if (error.request) {
              // The request was made but no response was received (e.g., network issue)
              setError('Please check your internet connection...')
              console.error('Network Error:', error.request);
            } 
          };
        
        dispatch(setLoading(false));
      };



          // LOGOUT
    export const logout = (setLoading, setError, navigate) => async (dispatch) => {
      setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      console.log(loginToken);
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginToken}`,
        };
      try{
        const response = await axios.post(`${BASE_URL}/auth/logout`, { headers });
        if (response.status === 200) {
          console.log(response);
          console.log('Logout successfull')
          navigate('/')
        } else if (response.status !== 200) {
          console.log('Login failed with status code:', response.status);
          setError(response.data.message)
        } 
      } catch(error) {
          if (error.response.data.message) {
            console.log(error.response)
            console.log(error.response.data.message);
            setError(error.response.data.message)
            console.error('API Error:', error.response.status);
          } else if (error.request) {
            // The request was made but no response was received (e.g., network issue)
            setError('Please check your internet connection...')
            console.error('Network Error:', error.request);
          } 
        };
      
        setLoading(false)
      };



    // SELECT ROLE
    export const selectRole = (userType, setError, navigate, setLoading, role) => async (dispatch) => {
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginToken}`,
        };
        setLoading(true);
        try{
          const response = await axios.post(`${BASE_URL}/user/select-type`, userType, { headers });
          if (response.status === 200) {
            navigate(role === 'buyer' ? '/buyer-request-flow' : role === 'seller' && '/seller-request-flow')
            console.log(response);
            dispatch(setUser(role));
            console.log('user type selected successfully')
          } else if (response.status !== 200) {
            console.log('something went wrong', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
              console.log(error.response)
              // setError(error.response.data.message)
              setError(error.response.data.message)
              console.error('API Error:', error.response.status);
            } else if (error.request) {
              // The request was made but no response was received (e.g., network issue)
              setError('Please check your internet connection...')
              console.error('Network Error:', error.request);
            } 
          };
          setLoading(false);
      };