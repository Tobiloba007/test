import axios from "axios";
import { BASE_URL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";


      // RECENT PURCHASE REQUESTS
      export const sellerRecentPurchaseRequest = (setRecetPurchaseRequest, setLoading, setError) => async () => {
        setLoading(true)
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${loginToken}`,
        };
        try{
          const response = await axios.get(`${BASE_URL}/seller/purchase-request`, { headers });
          if (response.status === 200) {
              setRecetPurchaseRequest(response.data.data.purchase_request.data)
              console.log(response.data.data.purchase_request.data)
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
    export const sellerSearchCommodity = (setSearchResults, searchTerm) => async () => {
        const loginToken = await AsyncStorage.getItem('token');
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginToken}`,
          };
          try {
            const response = await axios.get(`${BASE_URL}/seller/purchase-request?limit=2&page=1&filter=open&sort=asc&search=${searchTerm}`, { headers },{
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