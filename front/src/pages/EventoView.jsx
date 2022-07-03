import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Participantes from "../components/Participantes/Participantes";
import * as EventosServices from "../services/eventos.services";
import * as ParticipantesServices from "../services/participantes.services";

function EventoView() {
  const { evento_id } = useParams();
  const [evento, setEvento] = useState({
    cantParticipantes: 0,
    deporte: "",
    dia: "",
    estado: 0,
    hora: "",
    lugar: "",
    titulo: "",
    _id: ""
  });
  const [participantes, setParticipantes] = useState([]);
  
  useEffect(() => {
    if(evento_id){
      EventosServices.findByID(evento_id)
      .then((event) => {
        setEvento(event);
      })
      .then(() => {
        ParticipantesServices.findByEventId(evento_id)
        .then(jugadores => {
          setParticipantes(jugadores)
        })
      })
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand btn btn-success text-white" to="/">
            Volver
          </Link>
        </div>
      </nav>

      <div className="d-flex align-content-between flex-wrap">
        <div className="container-fluid">
          <div className="container pt-3">
            <div className="card border-success mb-3">
              <div className="card-header border-success text-center">
                <h1>{evento.titulo}</h1>
              </div>
              <div className="card-body">
                <div className="col-md-6">
                  <p className="m-0 p-0">Lugar: {evento.lugar}</p>
                  <p className="m-0 p-0">Deporte: {evento.deporte}</p>
                  <p className="m-0 p-0">
                    Fecha del evento: {evento.dia} {evento.hora}
                  </p>
                  <p className="m-0 p-0">
                    Cantidad de Participantes: {evento.cantParticipantes} -{" "}
                    {evento.estado === 0
                      ? "Estado: No se juega"
                      : "Estado: Se juega"}
                  </p>
                </div>
              </div>
            </div>
            <Participantes players={participantes} evento_id={evento_id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventoView;
