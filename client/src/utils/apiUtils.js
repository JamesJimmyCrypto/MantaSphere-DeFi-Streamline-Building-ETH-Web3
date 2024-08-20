import axios from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Base URL for your API
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercept requests to add the authorization token if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept responses to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors
      console.error("Unauthorized! Logging out...");
      localStorage.removeItem("token");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export { api };
