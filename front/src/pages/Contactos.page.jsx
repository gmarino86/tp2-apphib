import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "./Navbar.page";
import ListContactos from "../components/Contactos/ListContactos.jsx";
import * as ContactService from "../services/contactos.services";

function Contactos() {
    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        ContactService.findContacts()
        .then((contacts) => {
            setContactos(contacts);
        })
        .catch((error) => {
            console.log("error", error);
        });
        // eslint-disable-next-line
    }, []);

    return (
        <>
        <Navbar />
        <div className="container">
            <div className="d-flex justify-content-between">
            <h1>Contactos</h1>
            <Link className="lh-3" to="/buscarContactos">
                Buscar Contactos
            </Link>
            </div>
            <div className="row">
                <ListContactos contactos={contactos} />
            </div>
        </div>
        </>
    );
}

export default Contactos;
