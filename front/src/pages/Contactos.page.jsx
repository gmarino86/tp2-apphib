import { useEffect, useState } from "react";
import Navbar from "./Navbar.page";
import * as ContactService from "../services/contactos.services";
import ListContactos from "../components/Contactos/ListContactos.jsx";
import { Link } from "react-router-dom";

function Contactos() {
    const [contactos, setContactos] = useState([]);
    useEffect(() => {
        ContactService.findContacts()
        .then(contacts => {
            console.log('%cContactos.page.jsx line:12 object', 'color: #007acc;', contacts);
            setContactos(contacts)
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
                    <Link className="lh-3" to="/buscarContactos">Buscar Contactos</Link>
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
