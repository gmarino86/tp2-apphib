import { Link } from "react-router-dom";

function EventoJugadorListItem({ event }) {
    return (
    <li>
        <Link to={`/evento/${event._id}`}>{event.titulo}</Link>
        <p>{event.lugar}</p>
        <hr />
    </li>
    );
}

export default EventoJugadorListItem; 
