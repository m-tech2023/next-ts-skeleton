import { env } from '@/env';
import axios from 'axios';

const api = axios.create({
	baseURL: env.API_URL,
	headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;