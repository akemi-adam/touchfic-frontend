import { useEffect } from "react";
import { check } from "../services/auth";
import Header from "../components/Header";
import AuthNavbar from "../components/AuthNavbar";

export default function Dashboard()
{
    useEffect(() => {
        check();
    }, []);

    return (
        <>
            <Header navbar={<AuthNavbar/>}/>
            <div className="container mt-5">
                <h1>Dashboard</h1>
            </div>
        </>
    );
}