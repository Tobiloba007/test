import axios from "axios";
import { BASE_URL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "../authentication/AuthSlice";




    // BUYER PURCHASE REQUEST
    export const buyerRequest = (userRequest, setError, setCount, setLoading, navigate, dispatch) => async () => {
        setLoading(true)
        const user = await AsyncStorage.getItem('user_type');
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.post(`${BASE_URL}/buyer/purchase-request`, userRequest, { headers });
          if (response.status === 201) {
            console.log(response.data.data.user.user_type);
            dispatch(setUser(response.data.data.user))
            console.log('purchase request made successfully')
            console.log(user);
            setCount(8)
            await AsyncStorage.setItem('selectRole', 'user_role_selected');
          } else if (response.status !== 201) {
            console.log('Buyer Request failed with status code:', response.status);
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
        
          setLoading(false)
      };





    // SELLER PURCHASE REQUEST
    export const sellerRequest = (formData, setError, setCount, setLoading, navigate) => async () => {
        setLoading(true)
        const user = await AsyncStorage.getItem('user_type');
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.post(`${BASE_URL}/seller/supply-request`, formData, { headers });
          if (response.status === 201) {
            console.log(response);
            console.log('Supplier upload request made successfully')
            console.log(user);
            setCount(9)
            // navigate('/seller-dashboard')
          } else if (response.status !== 201) {
            console.log('seller Request failed with status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
                console.log(error.response.data.message)
                setError(error.response.data.message)
                console.error('API Error:',error.response.status);
            } else if (error.request) {
              console.log(error.response.data.data.message);
              // The request was made but no response was received (e.g., network issue)
              setError('Please check your internet connection...')
              // console.error('Network Error:', error.request);
            } 
          };
        
          setLoading(false)
      };