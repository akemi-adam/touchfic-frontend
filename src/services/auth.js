import axios from "axios";
import client from "./client";

export const csrf = async () => axios.get('http://localhost:8000/sanctum/csrf-cookie');

export const logout = () => {
    
    client.post('auth/logout');

    localStorage.removeItem('user');

    window.location.href = '/';
}

export const check = async () => await client.get('user');;