import { logout } from "../services/auth";

export default function AuthNavbar()
{
    return (
        <>
            <li className="nav-item dropdown me-3">
                <button type="button" class="btn btn-link text-decoration-none p-0" data-bs-toggle="dropdown" aria-expanded="false">Usuário</button>
                <ul class="dropdown-menu dropdown-menu">
                    <li><a class="dropdown-item" href="#">Perfil</a></li>
                    <li><a class="dropdown-item" href="#">Minhas histórias</a></li>
                    <li><a class="dropdown-item" href="#">Publicar postagem</a></li>
                </ul>
            </li>
            <li className="nav-item me-3"><a className="nav-link" href="#">Histórias</a></li>
            <li className="nav-item me-3"><a className="nav-link" href="#">Linha do tempo</a></li>
            <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => logout()}>Sair</button>
            </li>
        </>
    );
}