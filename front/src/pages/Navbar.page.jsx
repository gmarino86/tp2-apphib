import { Link } from "react-router-dom";
import * as bootstrap from 'bootstrap'
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import logo from "../images/logo-nuevo.jpeg"
import { useEffect } from "react";

function Navbar() {
  
  const [user, setUser] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("user")){
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);


  function logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    closeNavbar();
  }

  function closeNavbar(){
    var myCollapse = document.getElementById('navbarNav')
    return new bootstrap.Collapse(myCollapse, {
      toogle: true
    })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
              <img src={logo} width="150" alt="Arma el Equipo"></img>
          </Link>

          
            <button className="navbar-toggler" type="button" onClick={closeNavbar}>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav text-center">
                
                {!localStorage.getItem("user") ? (
                  <li className="nav-item">
                    <Link className="nav-link custom-nav-link px-2" aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                ) : (
                  <>
                  <li className="nav-item">
                    <Link className="nav-link custom-nav-link px-2" aria-current="page" to="/" onClick={closeNavbar}>
                      Eventos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link custom-nav-link px-2" aria-current="page" to="/contactos" onClick={closeNavbar}>
                      Contactos
                    </Link>
                </li>
                </>
                )}
                {localStorage.getItem("user") ? (
                <button className="btn btn-sm btn-outline-success my-2 my-sm-0" type="button" onClick={logout}>Salir ({user.name} {user.lastName})</button>
                ) : ("")}
                
                
              </ul>
            </div>
          
        </div>
      </nav>
    </>
  );
}
export default Navbar;
