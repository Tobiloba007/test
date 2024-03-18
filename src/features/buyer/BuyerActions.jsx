import axios from "axios";
import { BASE_URL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";



    // PAYMENT RECEIPT UPLOAD
    export const uploadReceipt = (formData, setError, setLoading, setPayment) => async () => {
        setLoading(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.post(`${BASE_URL}/buyer/purchase-request/upload-receipt/4`, formData, { headers });
          if (response.status === 200) {
            console.log(response);
            console.log('payment receipt uploaded successfully')
            setPayment(false)
          } else if (response.status !== 200) {
            console.log('receipt upload failed with status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
                console.log(error.response)
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



    // HOME PAGE METRICS
    export const metricsData = (setMetrics) => async () => {
        // setLoading(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.get(`${BASE_URL}/buyer/purchase-request/metrics`, { headers });
          if (response.status === 200) {
            // console.log(response.data.data)
            setMetrics(response.data.data)
          } else if (response.status !== 200) {
            console.log('request failed status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
                console.log(error.response)
                console.error('API Error:',error.response.status);
            } else if (error.request) {
              console.log(error.response.data.data.message);
            //   setError('Please check your internet connection...')
            } 
          };
        
        //   setLoading(false)
      };


    // PURCHASE REQUESTS DATA
    export const purchaseRequestAction = (setPurchaseRequestsData) => async () => {
        // setLoading(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.get(`${BASE_URL}/buyer/purchase-request`, { headers });
          if (response.status === 200) {
            // console.log(response.data.data.purchase_request.data, 'Hello world')
            setPurchaseRequestsData(response.data.data.purchase_request.data)
          } else if (response.status !== 200) {
            console.log('request failed status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
                console.log(error.response)
                console.error('API Error:',error.response.status);
            } else if (error.request) {
              console.log(error.response.data.data.message);
            //   setError('Please check your internet connection...')
            } 
          };
        
        //   setLoading(false)
      };





    // PURCHASE REQUESTS DATA
    export const BuyerProfileActions = (setUser) => async () => {
        // setLoading(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.get(`${BASE_URL}/user`, { headers });
          if (response.status === 200) {
            console.log(response.data)
            setUser(response.data)
          } else if (response.status !== 200) {
            console.log('request failed status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
                console.log(error.response)
                console.error('API Error:',error.response.status);
            } else if (error.request) {
              console.log(error.response.data.data.message);
            //   setError('Please check your internet connection...')
            } 
          };
        
        //   setLoading(false)
      };


    // SEARCH COMMODITY
    export const SearchCommodity = (setSearchResults, searchTerm) => async () => {
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loginToken}`,
        };
        try {
          const response = await axios.get(`${BASE_URL}/buyer/purchase-request?limit=2&page=1&filter=open&sort=asc&search=${searchTerm}`, { headers },{
              params: {
                  limit: 2,
                  page: 1,
                  filter: 'open',
                  sort: 'asc',
                  search: searchTerm,
                }
          });
          setSearchResults(response.data.data.purchase_request.data);
          console.log(response.data.data.purchase_request.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };