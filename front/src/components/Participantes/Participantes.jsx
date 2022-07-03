import { useState, useEffect } from "react";
import * as UserServices from "../../services/user.services";
import * as ParticipantesServices from "../../services/participantes.services";
import UserEventosList from "../UserEventosList/UserEventosList";
import ListAgregarPlayer from "../ListAgregarPlayer/ListAgregarPlayer";

function Participantes({ players, evento_id }) {
  const [participantes, setParticipantes] = useState([]);
  const [estado, setEstado] = useState(0);

  console.log('%cParticipantes.jsx line:11 players', 'color: #007acc;', players);
  useEffect(() => {
    if(players !== []){
      const user_ids = players.map((player) => player.user_id);
      UserServices.getAllPlayers(user_ids)
      .then((users) => {
        setParticipantes(users);
      });
      
      const user_logged = JSON.parse(localStorage.getItem("user"))._id;
      players.forEach(participacion => {
        if(user_logged === participacion.user_id){
          setEstado(participacion.estado);
        }
      });
    }
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
        <div className="card-header d-flex justify-content-between">
          <h2>Participantes</h2>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots-vertical"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><button className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#modalAddPlayer">Agregar participantes</button></li>
            </ul>
          </div>
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

      <div className="modal" id="modalAddPlayer">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agregar participante</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ListAgregarPlayer evento_id={evento_id} participantes={participantes} />

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Participantes;
