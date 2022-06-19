import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as EventosServices from "../services/eventos.services";

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
    console.log("Entre al useEffect");
    EventosServices.findByID(id)
      .then((evento) => setEvento(evento))
      .catch((err) => console.log(err));
  }, [ id ]);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => window.history.back()}><i className="bi bi-chevron-left"></i> Volver</button>
      <h1>{evento.titulo}</h1>
      <p>Lugar: {evento.lugar}</p>
      <p>Deporte: {evento.deporte}</p>
      <p>Fecha del evento: {evento.dia} {evento.hora}</p>
      <p>Cantidad de Participantes: {evento.cantParticipantes}</p>
      {evento.estado === 0 ? (<p>Estado: No se juega</p>) : (<p>Estado: Se juega</p>)}
    </div>
  );
}

export default EventoView;
