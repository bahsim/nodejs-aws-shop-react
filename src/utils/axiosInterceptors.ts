import axios from "axios";
import { showAlert } from "~/components/Alert/AlertManager";

interface ErrorHandler {
  message: string;
  action?: () => void;
}

const errorMessages: Record<number, ErrorHandler> = {
  401: {
    message: "Unauthorized: Please log in to access this resource",
    action: () => localStorage.removeItem("authorization_token"),
  },
  403: {
    message: "Forbidden: You do not have permission to access this resource",
  },
  500: {
    message: "Internal Server Error",
  },
};

export const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        const errorHandler = errorMessages[error.response.status];

        if (errorHandler) {
          showAlert(errorHandler?.message, "error");
          errorHandler.action?.(); // Optional chaining to call action if it exists
        } else {
          showAlert(
            `Error: ${error.response.data?.message || "Something went wrong"}`,
            "error"
          );
        }
      }

      return Promise.reject(error);
    }
  );
};
