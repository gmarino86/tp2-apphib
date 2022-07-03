import { useState } from "react";
import * as UserService from "../services/user.services";
import NavbarPage from "./Navbar.page";

// Crear una pagina para registro que tenga nombre apellido mail y pass
function Registro() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    UserService.create({ name, lastName, mail, pass })
    .then((user) => {
      if(user){
        setError("");
        window.location.href = "/login";
      } else {
        setError("Usuario ya existe");
      }
    })
    .catch((err) => {
      setError(err.message);
    });
  }

  return (
    <>
      <NavbarPage></NavbarPage>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="avatar text-center"></div>
          <h4 className="modal-title">Registro</h4>
          <div className="form-group">
            <input
              placeholder="Nombre"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Apellido"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              name="lastName"
              className="form-control"
              id="lastName"
              aria-describedby="lastNameHelp"
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Email"
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              name="mail"
              className="form-control"
              id="mail"
              aria-describedby="mailHelp"
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Password"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              name="pass"
              className="form-control"
              id="pass"
              aria-describedby="passHelp"
            />
          </div>
          <div className="form-group small clearfix">
            <a href="/" className="forgot-link">
              Olvidaste tu contraseña?
            </a>
          </div>
          <input
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            value="Registro"
          />
        </form>
        {error && <p className="text-danger">{error}</p>}
        
      </div>
    </>
  );
}

export default Registro;
