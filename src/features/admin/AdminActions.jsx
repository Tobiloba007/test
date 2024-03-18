import axios from "axios";
import { BASE_URL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLoginToken } from "../authentication/AuthSlice";



     // LOGIN
    export const adminLogin = (values, setError, setLoading, navigate) => async (dispatch) => {
      setLoading(true);
      try{
        const response = await axios.post(`${BASE_URL}/auth/admin/login`, values);
        if (response.status === 200) {
          console.log(response.data.data.message, 'Hello');
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



    // HOME PAGE METRICS
    export const adminMetricsData = (setMetrics, setLoading, setError) => async () => {
        setLoading(true)
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
          setLoading(false)
        
      };


    export const adminCommodityMetrics = (setMetrics, setLoading, setError) => async () => {
        setLoading(true)
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
          setLoading(false)
        
      };



      // RECENT PURCHASE REQUESTS
    export const RecentPurchaseRequestAction = (setRecetPurchaseRequest, setLoading, setError) => async () => {
        setLoading(true)
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
        
          setLoading(false)
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
            // console.log(response.data.data.purchase_request.data, 'Hello')
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
            console.log(response.data.data.supply_request.data, 'Hello world')
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
