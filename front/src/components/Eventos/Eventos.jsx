import EventosList from "./EventosList";
import { useState, useEffect } from "react";
import * as EventosServices from "../../services/eventos.services";
import { Link } from "react-router-dom";

function Evento() {
  const [eventos, setEventos] = useState([
    {
      _id: "",
      titulo: "",
      id_jugador: [],
      lugar: "",
      deporte: "",
      estado: 0,
      cantParticipantes: 0,
      dia: "",
      hora: "00:00",
    },
  ]);

  useEffect(() => {
    EventosServices.find().then((data) => {
      setEventos(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Armá el Equipo
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Contactos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <h1>Eventos</h1>
        <ul>
          {eventos.map((evento) => (
            <EventosList key={evento._id} event={evento} />
          ))}
        </ul>

        <div id="container-floating">
          <div id="floating-button">
            <Link to={`/evento/crear`}>
              <p className="plus">+</p>
              <img
                className="edit"
                src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
                alt="Crear Evento"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Evento;
