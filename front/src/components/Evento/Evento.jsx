import EventoJugadorListItem from "./EventoJugadorListItem"
const JUGADORES_EVENTO = [
    {"idJ": 1, "name": "Gaston Marino", "estado":1, "fecha":"2022-06-15 22:37:00"},
    {"idJ": 2, "name": "Fede Garabello", "estado":1, "fecha":"2022-06-15 22:38:00"}
]

function Evento(){
    return (
        <div>
            <h1>Evento</h1>
            <ul>
                {JUGADORES_EVENTO.map((jugador) => <EventoJugadorListItem key={jugador.idJ} player={jugador} />)}
            </ul>
        </div>
    )
}

export default Evento