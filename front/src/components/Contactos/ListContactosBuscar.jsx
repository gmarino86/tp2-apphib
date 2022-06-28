import { useEffect, useState } from "react";
import * as UserService from "../../services/user.services.js";

function ListContactos({ contacto }) {
  const [c, setC] = useState({});

  useEffect(() => {
    UserService.findByID(contacto._id)
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
            <div>
                <i className="bi bi-person-plus-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListContactos;
