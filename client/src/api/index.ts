import axios from 'axios';
import { SERVER_BASE_URL } from '../utils/server_base_url';

export const axiosPublic = axios.create({
  baseURL: SERVER_BASE_URL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
