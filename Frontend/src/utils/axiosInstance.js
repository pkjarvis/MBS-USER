import axios from "axios"
// import Cookies from "js-cookie"


const axiosInstance=axios.create({
    baseURL:"http://localhost:8080/",
    timeout:3000,
    withCredentials:true,
    body:JSON.stringify({}),
    headers: {
    "Content-Type": "application/json",
  },
})   

axiosInstance.interceptors.request.use(
  config=>{
    if (!['/user/signup', '/user/login'].includes(config.url)){
      const token=localStorage.getItem('userToken');
      if(token){
        config.headers['Authorization']=`Bearer ${token}`;
      }
      console.log("Passed");
     
    }
    return config;
  },
  (error)=>Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('call the refresh token api here')
      // Handle 401 error, e.g., redirect to login or refresh token
    }
    return Promise.reject(error)
  },
)

export default axiosInstance;