import { useState } from "react";
import { csrf } from "../../services/auth";
import cookie from "js-cookie";
import client from "../../services/client";

import Header from "../../components/Header";
import GuestNavbar from "../../components/GuestNavbar";
import AuthButton from "../../components/forms/AuthButton";

export default function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        await csrf();

        client.post('auth/login', {
            email: email,
            password: password
        }).then(response => {

            localStorage.setItem('user', response.data.user);
            
            window.location.href = '/dashboard';

        }).catch(
            error => {
                cookie.remove('XSRF-TOKEN');
                window.location.href = '/login';
            }
        );

    }

    return (
        <>
            <Header navbar={<GuestNavbar/>}/>
            <div className="container mt-5 p-4 border w-50">    
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="form-label mt-3">E-mail</label>
                    <input
                        type="email" name="email" id="email"
                        className="form-control bg-light"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className="form-label mt-3">Senha</label>
                    <input
                        type="password" name="password" id="password"
                        className="form-control bg-light"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <AuthButton description="Enviar"/>
                </form>
            </div>
        </>
    );

}