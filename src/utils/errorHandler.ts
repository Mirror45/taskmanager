import axios, { AxiosError } from 'axios';

import { ApiError } from '../types/api-error';

export const handleError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiError>;
    if (axiosError.response) {
      return {
        message: axiosError.response?.data?.message || 'Something went wrong with the API',
        status: axiosError.response?.status || 500,
      };
    }
    if (axiosError.request) {
      return {
        message: 'No response from the server',
        status: 504, // Gateway Timeout
        type: 'network',
      };
    }
  }
  return {
    message: 'An unknown error occurred',
    status: 500,
  };
};
