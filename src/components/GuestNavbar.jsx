export default function GuestNavbar()
{
    return (
        <>
            <li className="nav-item me-3"><a className="nav-link" href="#">Histórias</a></li>
            <li className="nav-item me-3"><a className="nav-link" href="#">Linha do tempo</a></li>
            <li className="nav-item me-3"><a className="nav-link" href="/login">Entre</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Cadastre-se</a></li>
        </>
    );
}