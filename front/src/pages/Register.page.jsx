import * as UserService from "../services/user.services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarPage from "./Navbar.page";

function Registro() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleLastname(e) {
    setLastname(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
    };
    UserService.create(user)
      .then((response) => {
        console.log(response);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <NavbarPage />
      <div className="container">
        <h1>Registrate gratis!</h1>
        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            <div className="col-6">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                value={name}
                onChange={handleName}
                name="name"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
              />
              <div id="nameHelp" className="form-text">
                Ingresá tu nombre
              </div>
            </div>
            <div className="col-6">
              <label htmlFor="lastname" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                value={lastname}
                onChange={handleLastname}
                name="lastname"
                className="form-control"
                id="lastname"
                aria-describedby="lastnameHelp"
              />
              <div id="lastnameHelp" className="form-text">
                Ingresá tu Apellido
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="mail"
              value={email}
              onChange={handleEmail}
              name="mail"
              className="form-control"
              id="mail"
              aria-describedby="email"
            />
            <div id="email" className="form-text">
              Ingresá tu email
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              name="password"
              className="form-control"
              id="password"
              aria-describedby="password"
            />
            <div id="password" className="form-text">
              Ingresá tu password
            </div>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-main btn-primary" type="submit">
              Crear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registro;
