import Header from "../components/Header";
import GuestNavbar from "../components/GuestNavbar";

export default function Homepage() {

    return (
        <>
            <Header navbar={<GuestNavbar/>}/>
            <div className="container mt-5">
                <div className="d-flex flex-wrap flex-row justify-content-center">
                    <img src="/welcome.svg" alt="Um leitor ávido por histórias, símbolo do Touchfic, lendo" className="img-responsive"/>
                    <div className="flex-column">
                        <h1 className="text-primary">Boas-vindas ao Touchfic!</h1>
                        <p>
                            O Touchfic é um universo de possibilidades criadas a partir da imaginação de diferentes pessoas, em diferentes partes do mundo!
                        </p>
                        <p>
                            Faça parte dessa grande biblioteca de histórias, que vão desde da mais aterrorizante história de terror até os mais divertidos e perspicazes contos de <span className="fst-italic">sci-fi</span>
                        </p>
                        <p>
                            Comece sua jornada de leitura e compartilhe suas fanfics ou histórias originais com uma conta no Touchfic!
                        </p>
                        <div className="flex-row text-center">
                            <button className="btn btn-primary me-5 border rounded-pill">Cadastre-se grátis</button>
                            <button className="btn btn-primary border rounded-pill">Faça login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}