export default function CollapseNavbar(props)
{
    return (
        <>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    { props.navbar }
                </ul>
                <form className="d-flex input-group w-auto">
                    <input type="search" className="form-control" placeholder="Atrás de algo?" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="button" data-bs-ripple-color="dark">Buscar</button>
                </form>
            </div>
        </>
    );
}