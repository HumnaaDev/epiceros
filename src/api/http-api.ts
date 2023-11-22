import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // We can add other default headers here
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  //can handle diff cases
  (error) => {
    if (error.response) {
      throw new Error(`API Error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      throw new Error('Network Error: Unable to connect to the server');
    } else {
      throw new Error('Request Error: Unable to make the request');
    }
  }
);

export const get = async (url: string, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

// // add more functions here post, update, delete
