import { useEffect, useState } from "react";
import * as  UserService from "../../services/user.services.js";

function ListContactos({ contacto }) {
    console.log('%cListContactos.jsx line:5 contacto', 'color: #007acc;', contacto.id_friend);
    const [c, setC] = useState({});

    useEffect(() => {
        UserService.findByID(contacto.id_friend)
        .then(respuesta => {
            console.log("response", respuesta);
            // Setear el state de contactos
            setC(respuesta);
        })
        .catch(error => {
            console.log("error", error);
        });
    }, [contacto]);

    return(
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{c.name}</h5>
                            <p className="card-text">{c.mail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListContactos;