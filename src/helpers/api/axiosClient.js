import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        accept: 'aplication.json'
    }
});

axiosClient.interceptors.request.use(async (config) => {
    return config
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (error) => {
    console.error(error)
})

export default axiosClient

