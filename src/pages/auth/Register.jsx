import Header from "../../components/Header";
import GuestNavbar from "../../components/GuestNavbar";
import AuthButton from "../../components/forms/AuthButton";
import { useState } from "react";
import { csrf } from "../../services/auth";
import client from "../../services/client";
import cookie from "js-cookie";

export default function Register()
{
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

    const [ errors, setErrors ] = useState([]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (password !== passwordConfirmation)
        {
            setErrors(oldErrors => [...oldErrors, `Passwords don't match!`]);
            return;
        }

        await csrf();

        client.post('auth/register', {
            name: name,
            email: email,
            password: password
        }).then(response => {

            localStorage.setItem('user', response.data.user);

            window.location.href = '/dashboard';

        }).catch(error => {
            cookie.remove('XSRF-TOKEN');
            window.location.href = '/register';
        });

    }

    return (
        <>
            <Header navbar={<GuestNavbar/>}/>
            <div className="container mt-5 p-4 border w-50">
                {errors.length !== 0 && errors.map(
                    (error, index) => <div className="alert alert-danger mb-4" key={index}>{error}</div>
                )}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input
                        type="text" name="name" id="name"
                        className="form-control bg-light"
                        onChange={(e) => setName(e.target.value)}
                        
                    />
                    <label htmlFor="email" className="form-label mt-3">E-mail</label>
                    <input
                        type="email" name="email" id="email"
                        className="form-control bg-light"
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                    <label htmlFor="password" className="form-label mt-3">Senha</label>
                    <input
                        type="password" name="password" id="password"
                        className="form-control bg-light"
                        onChange={(e) => setPassword(e.target.value)}
                        
                    />
                    <label htmlFor="password_confirmation" className="form-label mt-3">Confirme a senha</label>
                    <input
                        type="password" name="password_confirmation" id="password_confirmation"
                        className="form-control bg-light"
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        
                    />
                    <AuthButton description="Enviar"/>
                </form>
            </div>
        </>
    );
}