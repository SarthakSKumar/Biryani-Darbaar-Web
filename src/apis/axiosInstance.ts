import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_ENDPOINT;

// Create axios instance with default config
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // 15 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
