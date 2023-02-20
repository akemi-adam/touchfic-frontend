import CollapseNavbar from "./CollapseNavbar";

export default function Header(props)
{

    return (
        <nav className="navbar navbar-expand-lg navbar-light border border-bottom">
            <div className="container">
                <a className="navbar-brand text-primary" href="/">
                    <img src="/touchfic-logo.svg" alt="Logo do Touchfic: uma mão escrevendo em chamas" className="img-fluid"/>
                    Touchfic
                </a>
                <CollapseNavbar navbar={props.navbar}/>
            </div>
        </nav>
    );
}