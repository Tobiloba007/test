import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = process.env.REACT_APP_API_URL

      // RECENT PURCHASE REQUESTS
      export const recentSupplyRequestAction = (setRecetSupplyRequest, setLoading, setError) => async () => {
        setLoading(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.get(`${BASE_URL}/seller/supply-request`, { headers });
          if (response.status === 200) {
            setRecetSupplyRequest(response.data.data.supply_request.data)
              // console.log(response.data.data.supply_request.data)
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




          // HOME PAGE METRICS
    export const metricsData = (setMetrics, setLoadMetrics) => async () => {
      setLoadMetrics(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.get(`${BASE_URL}/seller/supply-request/metrics`, { headers });
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
      
        setLoadMetrics(false)
    };



          // SEARCH COMMODITY
    export const sellerSearchCommodity = (setSearchResults, searchTerm, setLoadSearch) => async () => {
      setLoadSearch(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginToken}`,
          };
          try {
            const response = await axios.get(`${BASE_URL}/seller/supply-request?limit=1&page=2&filter=open&sort=asc&start_date=2024-02-01&end_date=2024-03-28&search=${searchTerm}`, { headers },{
                params: {
                    limit: 1,
                    page: 2,
                    filter: 'open',
                    sort: 'asc',
                    search: searchTerm,
                    start_date: '2024-02-01',
                    end_date: '2024-03-28'
                  }
            });
            setSearchResults(response.data.data.purchase_request.data);
            // console.log(response.data.data.purchase_request.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
          setLoadSearch(false)
      };


          // BROADCAST EVENT LISTS
    export const getBroadcasts = (setActiveRequest, setLoading, setError) => async () => {
      setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.get(`${BASE_URL}/seller/broadcast`, { headers });
        if (response.status === 200) {
          setActiveRequest(response.data.data.broadcast.data)
          // console.log(response.data.data.broadcast.data)
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




    // SELLER BROADCASTS
    export const searchBroadcastList = (setSearchResults, searchTerm) => async () => {
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loginToken}`,
        };
        try {
          const response = await axios.get(`${BASE_URL}/seller/broadcast?start_date=2024-02-01&end_date=2024-03-28&search=${searchTerm}`, { headers },{
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
          setSearchResults(response.data.data);
          // console.log(response.data.data.buyer.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };


    //BROADCAST DETAILS
    export const broadcastDetails = (setBroadcastDetails, setLoading, setError, item) => async () => {
      setLoading(true)
      const loginToken = await AsyncStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${loginToken}`,
      };
      try{
        const response = await axios.get(`${BASE_URL}/seller/broadcast/${item}`, { headers });
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
      
        setLoading(false)
    };