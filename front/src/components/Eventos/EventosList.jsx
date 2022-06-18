function EventoJugadorListItem({ event }) {
    console.log('%cEventosList.jsx line:2 event', 'color: #007acc;', event);
    return (
    <li>
        <p>{event.titulo}</p>
        <a href={`/evento/${event._id}`}>Ver más</a>
    </li>
    );
}

export default EventoJugadorListItem; 
