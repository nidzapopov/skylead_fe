import axios, { AxiosError } from "axios";

const baseUrl = "http://localhost:5000/api/v1";

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default api;
