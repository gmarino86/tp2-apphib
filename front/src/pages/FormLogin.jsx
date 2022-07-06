import { useState } from "react";
import { Link } from "react-router-dom";

import * as UserService from "../services/user.services";


function FormLogin({ onLogin }) {

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    UserService.login({ mail, pass })
      .then((data) => {
        onLogin(data.user, data.token);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="avatar text-center"></div>
          <h4 className="modal-title">Iniciar Sesión</h4>
          <div className="form-group">
            <input
              placeholder="Email"
              type="email"
              value={mail}
              onChange={ (e) => setMail(e.target.value) }
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
              onChange={ (e) => setPass(e.target.value) }
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
            value="Login"
          />
        </form>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="text-center small">
            No tenés una cuenta? <Link to="/registro">Registrate</Link>
        </div>
      </div>
  );
}

export default FormLogin;
