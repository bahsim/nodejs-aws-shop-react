import axios from 'axios';
import { showAlert } from '~/components/Alert/AlertManager';

export const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // Handle unauthorized access
            showAlert('Unauthorized: Please log in to access this resource', 'error');
            // Optionally, redirect to login page or clear authentication tokens
            localStorage.removeItem('authorization_token');
            break;
          case 403:
            // Handle forbidden access
            showAlert('Forbidden: You do not have permission to access this resource', 'error');
            break;
        }
      }
      return Promise.reject(error);
    }
  );
};
