import EventosList from "./EventosList";
import { useState, useEffect } from "react";
import * as EventosServices from '../../services/eventos.services';

function Evento() {

  const [eventos, setEventos] = useState([]);
  
  useEffect(() => {
    EventosServices.find()
    .then(data => setEventos(data));
  }, [])


  return (
    <div>
      <h1>Eventos</h1>
      <ul>
        {eventos.map((evento) => (
          <EventosList key={evento._id} event={evento} />
        ))}
      </ul>
    </div>
  );
}

export default Evento;
