import { useState, useEffect } from "react";
import UserEventosList from "../UserEventosList/UserEventosList";
import * as UserServices from "../../services/user.services";
import * as ParticipantesServices from "../../services/participantes.services";

function Participantes({ players, evento_id }) {
  const [participantes, setParticipantes] = useState([]);
  const [estado, setEstado] = useState(0);

  useEffect(() => {
    // Trae todos los usuario del evento con nombre y apellido
    const user_ids = players.map((player) => player.user_id);
    UserServices.getAllPlayers(user_ids)
    .then((users) => {
      setParticipantes(users);
    });
    
    // Estado del usuario en el evento
    const user_logged = JSON.parse(localStorage.getItem("user"))._id;
    players.forEach(participacion => {
      if(user_logged === participacion.user_id){
        setEstado(participacion.estado);
      }
    });
  }, [players, evento_id]);

  function participar(){
    ParticipantesServices.participacion(evento_id, 1)
    .then(() => {
      setEstado(1);
      window.location.reload()
    });
  }

  function noParticipar(){
    ParticipantesServices.participacion(evento_id, 0)
    .then(() => {
      setEstado(0);
      window.location.reload()
    });
  }

  return (
    <>
      <div className="card mb-3 cuerpoLista">
        <div className="card-header">
          <h2>Participantes</h2>
        </div>
        <ol className="list-group list-group-numbered">
          {participantes.map((jugador) => (
            <UserEventosList key={jugador._id} user={jugador}></UserEventosList>
          ))}
        </ol>
      </div>
      <div className="container text-center">
            {estado === 0 ? (
              <button className="btn btn-success p-3 w-50 mt-3" type="button" onClick={participar}>
              Participar
            </button>
            ) : (
              <button className="btn btn-danger p-3 w-50 mt-3" type="button" onClick={noParticipar}>
                No Participar
              </button>
            )}
          </div>
    </>
  );
}

export default Participantes;
