import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLoginToken } from "../authentication/AuthSlice";
import { setBroadcast } from "./AdminSlice";



const BASE_URL = process.env.REACT_APP_API_URL

     // LOGIN
    export const adminLogin = (values, setError, setLoading, navigate) => async (dispatch) => {
      setLoading(true);
      try{
        const response = await axios.post(`${BASE_URL}/auth/admin/login`, values);
        if (response.status === 200) {
          // console.log(response.data.data, 'Hello Admin');
          const Token = response.data.data.access_token
          AsyncStorage.setItem('token', Token);
          dispatch(setLoginToken(Token))
          navigate('/admin-Layout')
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
      
        setLoading(false);
    };


    // TOTAL USERS BREAKDOWN
    export const adminUsersBreakdown = (setChart, setLoading) => async () => {
      setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.get(`${BASE_URL}/admin/user/breakdown`, { headers });
        if (response.status === 200) {
          setChart(response.data)
          // console.log(response.data, 'Hellos')
        } else if (response.status !== 200) {
          console.log('request failed status code:', response.status);
        } 
      } catch(error) {
          if (error.response.data.message) {
              console.log(error.response)
              console.error('API Error:',error.response.status);
          } else if (error.request) {
            console.log(error.response.data.data.message);
            // setError('Please check your internet connection...')
          } 
        };
      
        setLoading(false)
    };



    // HOME PAGE METRICS
    export const adminMetricsData = (setMetrics, setLoadData, setError) => async () => {
      setLoadData(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.get(`${BASE_URL}/admin/user/metrics`, { headers });
          if (response.status === 200) {
              setMetrics(response.data.data)
            //   console.log(response.data.data)
          } else if (response.status !== 200) {
            console.log('request failed status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
                console.log(error.response)
                console.error('API Error:',error.response.status);
            } else if (error.request) {
              console.log(error.response.data.data.message);
              setError('Please check your internet connection...')
            } 
          };
          setLoadData(false)
        
      };


    export const adminCommodityMetrics = (setMetrics, setLoadMetrics, setError) => async () => {
      setLoadMetrics(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.get(`${BASE_URL}/admin/commodity/metrics`, { headers });
          if (response.status === 200) {
              setMetrics(response.data.data)
            //   console.log(response.data.data)
          } else if (response.status !== 200) {
            console.log('request failed status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
                console.log(error.response)
                console.error('API Error:',error.response.status);
            } else if (error.request) {
              console.log(error.response.data.data.message);
              setError('Please check your internet connection...')
            } 
          };
          setLoadMetrics(false)
        
      };



      // RECENT PURCHASE REQUESTS
    export const RecentPurchaseRequestAction = (setRecetPurchaseRequest, setLoadRequest, setError) => async () => {
        setLoadRequest(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.get(`${BASE_URL}/admin/commodity/purchase-request`, { headers });
          if (response.status === 200) {
              setRecetPurchaseRequest(response.data.data.purchase_request.data)
            //   console.log(response.data.data.purchase_request.data)
          } else if (response.status !== 200) {
            console.log('request failed status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
                console.log(error.response)
                console.error('API Error:',error.response.status);
            } else if (error.request) {
              console.log(error.response.data.data.message);
              setError('Please check your internet connection...')
            } 
          };
        
          setLoadRequest(false)
      };




    //   UPDATE COMMODITY STATUS
    export const updateCommodityStatus = (newStatus, itemId, setLoading) => async () => {
        setLoading(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.put(`${BASE_URL}/admin/commodity/purchase-request/update-status/${itemId}`, { status: newStatus }, { headers });
          if (response.status === 200) {
              // console.log(response.data)
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
        
          setLoading(false)
      };



      // PURCHASE REQUESTS DATA
    export const adminPurchaseRequestAction = (setPurchaseRequestsData, setLoading, setError) => async () => {
        setLoading(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.get(`${BASE_URL}/admin/commodity/purchase-request`, { headers });
          if (response.status === 200) {
            setPurchaseRequestsData(response.data.data.purchase_request.data)
            // console.log(response.data.data.purchase_request.data, 'Hello')
          } else if (response.status !== 200) {
            console.log('request failed status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
                console.log(error.response)
                console.error('API Error:',error.response.status);
            } else if (error.request) {
              console.log(error.response.data.data.message);
              setError('Please check your internet connection...')
            } 
          };
        
          setLoading(false)
      };


      // SEARCH COMMODITY
    export const adminSearchCommodity = (setSearchResults, searchTerm) => async () => {
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginToken}`,
          };
          try {
            const response = await axios.get(`${BASE_URL}/admin/commodity/purchase-request?limit=2&page=1&filter=open&sort=asc&search=${searchTerm}`, { headers },{
                params: {
                    limit: 2,
                    page: 1,
                    filter: 'open',
                    sort: 'asc',
                    search: searchTerm,
                    start_date: '2024-02-01',
                    end_date: '2024-03-28',
                  }
            });
            setSearchResults(response.data.data.purchase_request.data);
            // console.log(response);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      };


      // SUPPLY REQUESTS DATA
    export const adminSupplyRequestAction = (setPurchaseRequestsData, setLoading, setError) => async () => {
        setLoading(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.get(`${BASE_URL}/admin/commodity/supply-request`, { headers });
          if (response.status === 200) {
            setPurchaseRequestsData(response.data.data.supply_request.data)
            setLoading(false)
            // console.log(response.data.data.supply_request.data, 'Hello world')
          } else if (response.status !== 200) {
            console.log('request failed status code:', response.status);
          } 
        } catch(error) {
            if (error.response.data.message) {
                console.log(error.response)
                console.error('API Error:',error.response.status);
            } else if (error.request) {
              console.log(error.response.data.data.message);
              setError('Please check your internet connection...')
            } 
          };
        
          setLoading(false)
      };


      // SUPPLY SEARCH COMMODITY
    export const adminSearchSupplyCommodity = (setSearchResults, searchTerm) => async () => {
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginToken}`,
          };
          try {
            const response = await axios.get(`${BASE_URL}/admin/commodity/supply-request?limit=2&page=1&filter=open&sort=asc&search=${searchTerm}`, { headers },{
                params: {
                    limit: 2,
                    page: 1,
                    filter: 'open',
                    sort: 'asc',
                    search: searchTerm,
                    start_date: '2024-02-01',
                    end_date: '2024-03-28',
                  }
            });
            setSearchResults(response.data.data.supply_request.data);
            console.log(response);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      };



      // BUYERLIST ACTION
    export const buyersListAction = (setBuyersData, setLoading, setError) => async () => {
      setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.get(`${BASE_URL}/admin/user/buyers`, { headers });
        if (response.status === 200) {
          setBuyersData(response.data.data.buyer.data)
          // console.log(response.data.data.buyer.data[0], 'Hello')
        } else if (response.status !== 200) {
          console.log('request failed status code:', response.status);
        } 
      } catch(error) {
          if (error.response.data.message) {
              console.log(error.response)
              console.error('API Error:',error.response.status);
          } else if (error.request) {
            console.log(error.response.data.data.message);
            setError('Please check your internet connection...')
          } 
        };
      
        setLoading(false)
    };


    // BUYER SEARCH
    export const searchBuyer = (setSearchResults, searchTerm) => async () => {
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loginToken}`,
        };
        try {
          const response = await axios.get(`${BASE_URL}/admin/user/buyers?start_date=2024-02-01&end_date=2024-03-28&search=${searchTerm}`, { headers },{
              params: {
                  limit: 2,
                  page: 1,
                  filter: 'open',
                  sort: 'asc',
                  search: searchTerm,
                  start_date: '2024-02-01',
                  end_date: '2024-03-28',
                }
          });
          setSearchResults(response.data.data.buyer.data);
          // console.log(response.data.data.buyer.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };



    // SELLERLIST ACTION
    export const sellerListAction = (setSellersData, setLoading, setError) => async () => {
      setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.get(`${BASE_URL}/admin/user/sellers`, { headers });
        if (response.status === 200) {
          setSellersData(response.data.data.buyer.data)
          // console.log(response.data.data.buyer.data[0], 'Hello')
        } else if (response.status !== 200) {
          console.log('request failed status code:', response.status);
        } 
      } catch(error) {
          if (error.response.data.message) {
              console.log(error.response)
              console.error('API Error:',error.response.status);
          } else if (error.request) {
            console.log(error.response.data.data.message);
            setError('Please check your internet connection...')
          } 
        };
      
        setLoading(false)
    };



    // SELLER SEARCH
    export const searchSeller = (setSearchResults, searchTerm) => async () => {
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loginToken}`,
        };
        try {
          const response = await axios.get(`${BASE_URL}/admin/user/sellers?start_date=2024-02-01&end_date=2024-03-28&search=${searchTerm}`, { headers },{
              params: {
                  limit: 2,
                  page: 1,
                  filter: 'open',
                  sort: 'asc',
                  search: searchTerm,
                  start_date: '2024-02-01',
                  end_date: '2024-03-28',
                }
          });
          setSearchResults(response.data.data.buyer.data);
          // console.log(response.data.data.buyer.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };



    // BUYER CUSTOMERS DETAILS
    export const buyerCustomerDetails = (item, setCustomerDetails) => async (dispatch) => {
      // setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.get(`${BASE_URL}/admin/user/buyers/${item}`, { headers });
        if (response.status === 200) {
          // console.log(response.data.data, 'Hello world')
          setCustomerDetails(response.data.data)
        } else if (response.status !== 200) {
          console.log('request failed status code:', response.status);
        } 
      } catch(error) {
          if (error.response.data.message) {
              console.log(error.response)
              console.error('API Error:',error.response.status);
          } else if (error.request) {
            console.log(error.response.data.data.message);
            // setError('Please check your internet connection...')
          } 
        };
      
        // setLoading(false)
    };



    // BUYER CUSTOMERS DETAILS
    export const sellerCustomerDetails = (item, setCustomerDetails) => async (dispatch) => {
      // setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.get(`${BASE_URL}/admin/user/sellers/${item}`, { headers });
        if (response.status === 200) {
          // console.log(response.data.data, 'Hello world')
          setCustomerDetails(response.data.data)
        } else if (response.status !== 200) {
          console.log('request failed status code:', response.status);
        } 
      } catch(error) {
          if (error.response.data.message) {
              console.log(error.response)
              console.error('API Error:',error.response.status);
          } else if (error.request) {
            console.log(error.response.data.data.message);
            // setError('Please check your internet connection...')
          } 
        };
      
        // setLoading(false)
    };



    export const sendBroadcastRequest = (values, setError, setLoading, setBroadcastModal2) => async (dispatch) => {
      setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.post(`${BASE_URL}/admin/broadcast`, values, { headers });
        if (response.status === 201) {
          setBroadcastModal2(true)
          dispatch(setBroadcast(response.data.data.broadcast))
          console.log(response.data)
          console.log('Broadcast created successfully')
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
      
        setLoading(false)
    };



    // ACTIVE BROADCAST EVENT
    export const activeBroadcastEvent = (setActiveRequest, setLoadData, setError) => async () => {
      setLoadData(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.get(`${BASE_URL}/admin/broadcast/`, { headers });
        if (response.status === 200) {
          setActiveRequest(response.data.data.broadcast.data)
          //  console.log(response.data.data.broadcast.data)
        } else if (response.status !== 200) {
          console.log('request failed status code:', response.status);
        } 
      } catch(error) {
          if (error.response.data.message) {
              console.log(error.response)
              console.error('API Error:',error.response.status);
          } else if (error.request) {
            console.log(error.response.data.data.message);
            setError('Please check your internet connection...')
          } 
        };
        setLoadData(false)
    };



    // SELLER SEARCH
    export const searchActiveBroadcast = (setSearchResults, searchTerm) => async () => {
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loginToken}`,
        };
        try {
          const response = await axios.get(`${BASE_URL}/admin/broadcast?start_date=2024-02-01&end_date=2024-03-28&search=${searchTerm}`, { headers },{
              params: {
                  limit: 2,
                  page: 1,
                  filter: 'open',
                  sort: 'asc',
                  search: searchTerm,
                  start_date: '2024-02-01',
                  end_date: '2024-03-28',
                }
          });
          setSearchResults(response.data.data.broadcast.data);
          // console.log(response.data.data.broadcast.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };



    //BROADCAST DETAILS
    export const broadcastDetails = (setBroadcastDetails, setError, item) => async () => {
      // setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.get(`${BASE_URL}/admin/broadcast/${item}`, { headers });
        if (response.status === 200) {
          setBroadcastDetails(response.data.data)
          // console.log(response.data.data, 'Hello world1')
        } else if (response.status !== 200) {
          console.log('request failed status code:', response.status);
        } 
      } catch(error) {
          if (error.response.data.message) {
              console.log(error.response)
              console.error('API Error:',error.response.status);
          } else if (error.request) {
            console.log(error.response.data.data.message);
            setError('Please check your internet connection...')
          } 
        };
      
        // setLoading(false)
    };



    // SEND OFFER REQUEST
    export const createOfferRequest = (values, setOpenModal, setLoading, setBroadcastDetails) => async () => {
      setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.post(`${BASE_URL}/seller/broadcast-response`, values, { headers });
        if (response.status === 201) {
          setOpenModal(false)
          setBroadcastDetails(false)
          console.log('offer created successfull');
          // console.log(response);
        } else if (response.status !== 201) {
          console.log('Registration failed with status code:', response.status);
        } 
      } catch(error) {
          if (error.response) {
            // The server responded with an error (e.g., HTTP status code 4xx or 5xx)
            console.log(error.response)
            console.error('API Error:', error.response.status);
          } else if (error.request) {
            // The request was made but no response was received (e.g., network issue)
            // setError('Please check your internet connection...')
            console.error('Network Error:', error.request);
          } 
        };
      
        setLoading(false)
    };