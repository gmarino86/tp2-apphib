import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ParticipantesServices from "../../services/participantes.services";
import * as EventosServices from "../../services/eventos.services";
import EventosList from "./EventosList";

function Evento() {
  const [eventosDatos, setEventosDatos] = useState([]);

  useEffect(() => {
    ParticipantesServices.find()
    .then((data) => {
      EventosServices.findArray(data)
      .then((data) => {
        setEventosDatos(data);
      })
    })
    }, [])

  return (
    <div>
      <div className="container">
        <h1>Eventos</h1>
        <div className="row mt-3">
          {eventosDatos.length === 0 ? (
            <h2 className="text-center mt-5">Aún no hay eventos</h2>
          ) : (
            eventosDatos.map((evento) => (
              <EventosList key={evento._id} event={evento} />
            ))
          )}
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
