import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://real-time-product-search.p.rapidapi.com/product-offers',
//   params: {
//     product_id: '11577822456427762145',
//     page: '1',
//     country: 'us',
//     language: 'en'
//   },
//   headers: {
//     'x-rapidapi-key': 'd254814362msh2854389d4c31a75p15704ejsnfb884c8e0be3',
//     'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
//   }
// };

// export const getProduct=async()=>{

//     try {
//       const response = await axios.request(options);
//       return response

//     } catch (error) {
//       console.error(error);
//     }

// }



const api = axios.create({
  baseURL:'https://dummyjson.com',
  method:'get',
})

export const getProduct=async()=>{
  // const asin ="B0CFSX431Z"

    try {
      const response = await api.get('/products');
      // console.log(response.data)
      return response.data

    } catch (error) {
      console.error(error);
    }
  }
export const newArrivals=async()=>{
  // const asin ="B0CFSX431Z"

    try {
      const response = await api.get(`/products?limit=5&skip=10&select=title,price`);
      console.log(response.data)
      return response.data

    } catch (error) {
      console.error(error);
    }
  }
// export const viewAll=async(limit=5)=>{


//     try {
//       const response = await api.get(`/products?limit=${limit}&skip=10&select=title,price`);
//       console.log(response.data)
//       return response.data

//     } catch (error) {
//       console.error(error);
//     }
//   }
