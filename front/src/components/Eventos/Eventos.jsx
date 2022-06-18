import EventosList from "./EventosList";
const EVENTOS = [
  {
    _id: "61887816c49eaaed6b6aee08",
    titulo: "Futbol con los pibes",
    id_jugador: [2, 1],
    lugar: "Costa Rica 5525",
    deporte: "Futbol",
    estado: 1,
    cantParticipantes: 2,
    dia: "Lunes",
    hora: "18:00",
  },
  {
    _id: "6188a39f4421f2d9073f6fca",
    titulo: "Otro evento",
    id_jugador: [1, 3, 4],
    lugar: "Cramer 2291",
    deporte: "Futbol",
    estado: 1,
    cantParticipantes: 2,
    dia: "Jueves",
    hora: "20:00",
  },
];

function Evento() {
  return (
    <div>
      <h1>Eventos</h1>
      <ul>
        {EVENTOS.map((evento) => (
          <EventosList key={evento._id} event={evento} />
        ))}
      </ul>
    </div>
  );
}

export default Evento;
