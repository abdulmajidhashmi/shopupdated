import axios from "axios";
import store from "../store/store";

export const axiosInstance = axios.create(

    {
        // baseURL: "http://localhost:4000",
        baseURL:"https://hrahimbackend.vercel.app",
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('token')}`,
        // },
    }
)


axiosInstance.interceptors.request.use(
    (config) => {
      const state = store.getState();
      const token = state.user.setToken || localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );