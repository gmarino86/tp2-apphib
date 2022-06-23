import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Armá el Equipo
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item d-flex">
              <Link className="nav-link px-2" aria-current="page" to="/login">
                Login
              </Link>
              <Link className="nav-link px-2" aria-current="page" to="/">
                Contactos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
