import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://212.113.123.5',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  },
);

const api = {
  get: async (endpoint: string, params = {}) => {
    try {
      const response = await apiClient.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  post: async (endpoint: string, data = {}) => {
    try {
      const response = await apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  put: async (endpoint: string, data = {}) => {
    try {
      const response = await apiClient.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  delete: async (endpoint: string, params = {}) => {
    try {
      const response = await apiClient.delete(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
