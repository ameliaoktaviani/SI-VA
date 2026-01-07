// src/api/axios.js
import axios from "axios";

// Buat instance axios
const api = axios.create({
  baseURL: "http://localhost:3000", // ganti sesuai backend-mu
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor: otomatis pasang token dari localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // ambil token dari localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor: response error handling global (opsional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Bisa kasih alert atau log error global
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
