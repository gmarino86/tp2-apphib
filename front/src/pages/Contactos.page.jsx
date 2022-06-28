import { useEffect, useState } from "react";
import Navbar from "./Navbar.page";
import * as ContactService from "../services/contactos.services";
import ListContactos from "../components/Contactos/ListContactos.jsx";

function Contactos() {
    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        ContactService.findContacts()
        .then(contacts => {
            console.log("response", contacts);
            // Setear el state de contactos
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
                <h1>Contactos</h1>
                    {contactos.map(contact => (
                        <ListContactos key={contact._id} contacto={contact} />
                    ))}
            </div>
        </>
    );
}

export default Contactos;
