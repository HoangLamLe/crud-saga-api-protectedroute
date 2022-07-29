import axios from "axios";

const createAxios = (token) => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return instance;
};

export default createAxios;
