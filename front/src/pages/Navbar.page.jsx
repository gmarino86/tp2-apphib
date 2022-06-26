import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo_aee.png"

function Navbar() {
  let navigate = useNavigate();
  function logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
              <img src={logo} width="50" alt="Arma el Equipo"></img>
          </Link>

          <ul className="navbar-nav">
            <li className="nav-item d-flex">
              <Link className="nav-link custom-nav-link px-2" aria-current="page" to="/login">
                Login
              </Link>
              <Link className="nav-link custom-nav-link px-2" aria-current="page" to="/">
                Contactos
              </Link>
              <button className="btn btn-sm btn-outline-success my-2 my-sm-0" type="button" onClick={logout}>Salir</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
