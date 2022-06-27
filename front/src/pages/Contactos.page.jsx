import { useEffect } from "react";
import Navbar from "./Navbar.page";

function Contactos() {
    useEffect(() => {
        console.log("Entro a Contactos");
    }
    , []);


    return (
        <div>
            <Navbar />
            <h1>Contactos</h1>
        </div>
    );
}

export default Contactos;
