import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as EventosServices from "../services/eventos.services";
import ParticipanteLista from "../components/ParticipantesLista/ParticipantesLista.component";
// import { format } from 'date-fns'

function EventoView() {
  const { id } = useParams();
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
    EventosServices.findByID(id)
      .then((evento) => setEvento(evento))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Volver
          </Link>
        </div>
      </nav>

      <div className="d-flex align-content-between flex-wrap">
        <div className="container-fluid">
          <div className="container pt-3 cuerpoLista">
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

            <div className="card">
              <div className="card-header">
                <h2>Participantes</h2>
              </div>
              <ol className="list-group list-group-numbered">
                {evento.id_jugador.length !== 0 ? (
                  evento.id_jugador.map((jugador) => (
                    <ParticipanteLista key={jugador.idJ} jugador={jugador} />
                  ))
                ) : (
                  <li>No hay participantes</li>
                )}
              </ol>
            </div>
          </div>

          <div className="container text-center">
            <button className="btn btn-success p-3 w-50" type="submit">
              Participar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventoView;
