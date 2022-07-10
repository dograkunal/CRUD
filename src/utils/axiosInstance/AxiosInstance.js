import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3333/api",
  timeout: 6000,
  headers: {
    "content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // debugger;
    if (localStorage.getItem("token")) {
      // config.headers.Authorization = JSON.parse(localStorage.getItem("token"));
      config.headers.Authorization = localStorage.getItem("token");
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // debugger;
    return response && response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
