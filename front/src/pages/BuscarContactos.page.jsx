import { useState } from "react";
import * as ContactService from "../services/contactos.services";
import Navbar from "../pages/Navbar.page";
import ListContactosBuscar from "../components/Contactos/ListContactosBuscar.jsx";

function BuscarContactos(){
    const [nombre, setNombre] = useState("");
    const [contactos, setContactos] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        ContactService.findContactsNew(nombre)
        .then(contacts => {
            setContactos(contacts);
        })
        .catch(error => {
            console.log("error", error);
        });
    }


    return(
        <>
            <Navbar />
            <div className="container">
                <h1>Buscar Contactos</h1>

                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input className="form-control me-2" name="name" value={nombre} onChange={(e) => setNombre(e.target.value)} type="search" placeholder="Ingresá un nombre" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <div className="row mt-3">
                    {contactos.map(contact => (
                        <ListContactosBuscar key={contact._id} contacto={contact}  />
                    ))}
                </div>

            </div>
        </>
    )
}

export default BuscarContactos;