import Header from "../../components/Header";
import GuestNavbar from "../../components/GuestNavbar";
import AuthButton from "../../components/forms/AuthButton";

export default function Register()
{
    return (
        <div>
            <Header navbar={<GuestNavbar/>}/>
            <form onSubmit={handleSubmit}>
                <label for="name" class="form-label">Nome</label>
                <input type="text" name="name" id="name" class="form-control bg-light" required/>
                <label for="email" class="form-label mt-3">E-mail</label>
                <input type="email" name="email" id="email" class="form-control bg-light" required/>
                <label for="password" class="form-label mt-3">Senha</label>
                <input type="password" name="password" id="password" class="form-control bg-light" required/>
                <label for="password_confirmation" class="form-label mt-3">Confirme a senha</label>
                <input type="password" name="password_confirmation" id="password_confirmation" class="form-control bg-light" required/>
                <AuthButton description="Enviar"/>
            </form>
        </div>
    );
}