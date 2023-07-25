import axios from "axios";
import { baseURL } from "../constant/baseUrl";


export const instanceAxios = axios.create({
  baseURL: baseURL,
 
  headers: {
    Accept: "application/json",
  },
 
});

instanceAxios.interceptors.request.use(
  function (config) {
    console.log("request!");


    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instanceAxios.interceptors.response.use(
  function (response) {
    console.log("response!");


    localStorage.setItem("secr", "sec");

    return response;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);