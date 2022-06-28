import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.page";
import * as ContactService from "../services/contactos.services";
import ListContactos from "../components/Contactos/ListContactos.jsx";

function Contactos() {
    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        ContactService.findContacts()
        .then(contacts => {
            setContactos(contacts);

        })
        .catch(error => {
            console.log("error", error);
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h1>Contactos</h1>
                    <Link to="/buscarContactos">Buscar Contacto</Link>
                </div>
                <div className="row">
                    {contactos.map(contact => (
                        <ListContactos key={contact._id} contacto={contact} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Contactos;
