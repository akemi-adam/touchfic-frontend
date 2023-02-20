import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true
});

client.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response.status == 401)
            return window.location.href = '/login';
    }
);

export default client