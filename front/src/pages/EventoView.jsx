import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Participantes from "../components/Participantes/Participantes";
import * as EventosServices from "../services/eventos.services";
import * as ParticipantesServices from "../services/participantes.services";

import { UserContext } from "../context/UserContext";

function EventoView() {
  const { evento_id } = useParams();
  
  const [evento, setEvento] = useState({});
  const [participantes, setParticipantes] = useState([]);
  
  const userLocale = JSON.parse(localStorage.getItem("user"));

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
  }, [evento_id])

  return (
    <div>
      <div className="d-flex align-content-between flex-wrap">
        <div className="container-fluid">
          <div className="container pt-3">
            <div className="card border-success mb-3 cardTituloEvento container">
              
                <div className="card-header border-success row">
                  <div className="col-4">
                    <Link className="navbar-brand btn btn-outline-success p-2 px-3" to="/">
                      <i className="bi bi-chevron-left"></i>
                    </Link>
                  </div>
                  <div className="col-8">
                    <h1>{evento.titulo}</h1>
                  </div>
                </div>
              
              <div className="card-body">
                <div className="col-12">
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
            {/* Aca el provider del Contexto */}
            <UserContext.Provider value={{ userLocale }}>
              <Participantes players={participantes} evento_id={evento_id} />
            </UserContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventoView;
