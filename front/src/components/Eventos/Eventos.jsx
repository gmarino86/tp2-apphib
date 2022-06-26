import EventosList from "./EventosList";
import { useState, useEffect } from "react";
import * as EventosServices from "../../services/eventos.services";
import { Link } from "react-router-dom";
import NavbarPage from "../../pages/Navbar.page";

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
    EventosServices.find()
    .then((data) => {
      setEventos(data);
    });
  }, []);

  console.log(eventos);

  return (
    <div>
      <NavbarPage></NavbarPage>
      <div className="container">
        <h1>Eventos</h1>

        <div className="row mt-5">    
          {eventos.map((evento) => (
            <EventosList key={evento._id} event={evento} />
          ))}
        </div>

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
