import EventosList from "./EventosList";
import { useState, useEffect } from "react";


function Evento() {

  const [eventos, setEventos] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3333/api/eventos')
    .then(res => res.json())
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
