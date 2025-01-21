import axios from  "axios";

const axiosInstance = axios.create({
    // local instance of the API  firebase (cloud function) 
   // baseURL: "http://127.0.0.1:5001/clone-31206/us-central1/api"
   // reder deploymet instance of the API
   baseURL: "https://amazon-backend-deploy-wd9j.onrender.com/"
});

export {axiosInstance}
