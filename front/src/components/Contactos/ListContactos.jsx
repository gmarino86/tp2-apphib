import { useEffect, useState } from "react";
import * as UserService from "../../services/user.services.js";

function ListContactos({ contacto }) {

  const [c, setC] = useState({});

  useEffect(() => {
    console.log('%cListContactos.jsx line:8 contacto.id_friend', 'color: #007acc;', contacto.id_friend);
    UserService.findByID(contacto.id_friend)
      .then((contact) => {
        console.log("response", contact);
        setC(contact);
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
          </div>
        </div>
      </div>
    </>
  );

}

export default ListContactos;
