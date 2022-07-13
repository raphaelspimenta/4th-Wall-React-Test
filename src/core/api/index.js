import axios from 'axios';

const createAPI = (baseURL) => {
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const onResponseSuccess = (response) => response.data;

  const onResponseError = (error) => {
    throw new Error(error);
  };

  api.interceptors.response.use(onResponseSuccess, onResponseError);

  return api;
};

export default createAPI;
