import { useState, useEffect } from "react";
import * as ContactService from "../services/contactos.services";
import ListContactosBuscar from "../components/Contactos/ListContactosBuscar.jsx";

function BuscarContactos(){
    const [nombre, setNombre] = useState("");
    const [contactos, setContactos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {    
    }, []);

    function handleSubmit(e){
        e.preventDefault();
        if(nombre){
            setError("");
            ContactService.findContactsNew(nombre)
            .then(contacts => {
                setContactos(contacts);
            })
            .catch(error => {
                console.log("error", error);
            });
        } else {
            setError("Ingrese un nombre");
        }
    }
    
    return(
        <>
            <div className="container">
                <h1>Buscar Contactos</h1>

                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input className="form-control me-2" name="name"  value={nombre} onChange={(e) => setNombre(e.target.value)} type="search" placeholder="Ingresá un nombre" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                {error && <p className="text-danger">{error}</p>}

                <div className="row mt-3">
                    {
                        contactos.length > 0 ? contactos.map((contacto) => (
                            <ListContactosBuscar key={contacto._id} contacto={contacto}></ListContactosBuscar>
                        )) : <h2 className="text-center mt-4">No hay contactos</h2>
                    }
                </div>
            </div>
        </>
    )
}
export default BuscarContactos