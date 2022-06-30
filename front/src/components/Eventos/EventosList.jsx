import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as EventosServices from "../../services/eventos.services";

function EventosList({ event }) {

  const [evento, setEvento] = useState({
    _id: "",
    titulo: "",
    id_jugador: [],
    lugar: "",
    deporte: "",
    estado: 0,
    cantParticipantes: 0,
    dia: "",
    hora: "00:00",
  });

  useEffect(() => {
    EventosServices.findByID(event)
    .then((data) => {
      console.log('%cEventosList.jsx line:21 data', 'color: #007acc;', data);
      setEvento(data);
    });
  }, [event]);

  return (
        <>
        <div className="col-md-4 mt-2">
          <div className="card card-01">
            <img className="card-img-top" src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb" alt={evento.titulo} />
            <div className="card-body">
              <span className="badge-box"><i className="fa fa-check"></i></span>
              <h4 className="card-title">{evento.titulo}</h4>
              <p className="card-text">{evento.lugar}</p>
              <Link className="btn btn-default btn-event text-uppercase" to={`/evento/${evento._id}`}>Ver más</Link>
            </div>
          </div>
          </div>
        </>
  );
}

export default EventosList;
