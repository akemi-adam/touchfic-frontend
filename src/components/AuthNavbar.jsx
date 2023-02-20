import { logout } from "../services/auth";

export default function AuthNavbar()
{
    return (
        <>
            <li className="nav-item me-3"><a className="nav-link" href="#">Histórias</a></li>
            <li className="nav-item me-3"><a className="nav-link" href="#">Linha do tempo</a></li>
            <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => logout()}>Sair</button>
            </li>
        </>
    );
}