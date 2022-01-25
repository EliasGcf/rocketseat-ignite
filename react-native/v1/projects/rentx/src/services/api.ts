import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.RENTX_API_BASE_URL,
});
