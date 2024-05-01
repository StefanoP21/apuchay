import axios from 'axios';
import { getEnv } from '../helpers';

const { VITE_BASE_URL } = getEnv();

export const api = axios.create({
  baseURL: VITE_BASE_URL,
});

//* Request Interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || '';

  config.headers['x-token'] = token;

  return config;
});
