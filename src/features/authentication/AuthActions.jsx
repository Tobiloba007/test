import axios from 'axios';
import { setLoading } from './AuthSlice';
import { BASE_URL } from '../../config';


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
            console.log(response);
            console.log('Login successfull')
            navigate('/select-role')
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