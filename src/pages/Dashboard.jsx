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
            <h1>Dashboard</h1>
        </>
    );
}