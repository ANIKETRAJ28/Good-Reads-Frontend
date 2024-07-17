import axios from "axios";

const axiosConfig = axios.create();
axiosConfig.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export default axiosConfig;