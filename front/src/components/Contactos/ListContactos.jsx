import { useEffect, useState } from "react";
import * as UserService from "../../services/user.services.js";

function ListContactos({ contacto, buscador = null }) {
  const [c, setC] = useState({});

  useEffect(() => {
    UserService.findByID(contacto.id_friend)
      .then((respuesta) => {
        console.log("response", respuesta);
        // Setear el state de contactos
        setC(respuesta);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [contacto]);

  return (
    <>
      <div className="col-md-6 mb-2">
        <div className="card">
          <div className="card-body d-flex justify-content-between">
            <div>
              <h2 className="card-title">
                {c.name} {c.lastname}
              </h2>
              <p className="card-text">{c.mail}</p>
            </div>
            { buscador ? (
                <div>
                    <i className="bi bi-person-plus-fill"></i>
                </div>
            ) : (
                null
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListContactos;
