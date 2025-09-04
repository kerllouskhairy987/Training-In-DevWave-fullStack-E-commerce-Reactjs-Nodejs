import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://training-in-dev-wave-full-stack-e-c.vercel.app',
    timeout: 8000,
});

export default axiosInstance