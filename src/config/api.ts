import axiosDefaultInstance from 'axios';
import { QueryClient } from 'react-query';

const BASE_URL = 'https://api.kinopoisk.dev';

const axios = axiosDefaultInstance.create({
  baseURL: `${BASE_URL}/v1.4/`,
  headers: {
    'X-API-KEY': process.env.TOKEN,
  },
});

const axiosV1 = axiosDefaultInstance.create({
  baseURL: `${BASE_URL}/v1/`,
  headers: {
    'X-API-KEY': process.env.TOKEN,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 3,
      staleTime: 10 * 1000,
    },
  },
});

export { axios, axiosV1, queryClient };
