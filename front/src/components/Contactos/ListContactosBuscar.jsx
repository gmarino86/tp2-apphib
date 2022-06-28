import { useEffect, useState } from "react";
import * as UserService from "../../services/user.services.js";
import * as ContactService from "../../services/contactos.services.js";

function ListContactos({ contacto }) {
  const [c, setC] = useState({});

  useEffect(() => {
    UserService.findByID(contacto._id)
      .then((respuesta) => {
        console.log("response", respuesta);
        setC(respuesta);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [contacto]);

  function agregar(){
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;
    const contactId = c._id

    /** 
     * TODO: PONER CONTROL DE QUE NO SE AGREGUE A SI MISMO NI A UN USER QUE YA ESTA EN LA LISTA DE CONTACTOS
     */
    ContactService.addContact(userId, contactId)
      .then((respuesta) => {
        console.log("response", respuesta);
        window.location.reload();
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

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
                <i className="bi bi-person-plus-fill" onClick={agregar}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListContactos;
