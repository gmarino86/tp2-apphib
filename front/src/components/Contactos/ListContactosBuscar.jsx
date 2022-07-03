// import { useNavigate } from "react-router-dom";
import * as ServiceContactos from "../../services/contactos.services";

function ListContactosBuscar({ contacto }) {
  // const navigate = useNavigate();

  function agregarContacto(idC) {
    let idU = JSON.parse(localStorage.getItem('user'));
    idU = idU._id;
    ServiceContactos.addContact(idU, idC)
    .then(() => {
        window.location.reload();
    })
  }

  return (
    <>
      <div className="col-md-6 mb-2">
        <div className="card">
          <div className="card-body d-flex justify-content-between">
            <div>
              <h2 className="card-title">
                {contacto.name} {contacto.lastname}
              </h2>
              <p className="card-text">{contacto.mail}</p>
            </div>
            <div>
              <button className="btn btn-outline-success" onClick={() => agregarContacto(contacto._id)}>
                <i className="bi bi-person-plus-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListContactosBuscar;
