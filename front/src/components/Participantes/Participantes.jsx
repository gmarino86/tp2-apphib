import { useState, useEffect, useContext } from "react";
import * as bootstrap from 'bootstrap'

import * as UserServices from "../../services/user.services";
import * as ParticipantesServices from "../../services/participantes.services";
import UserEventosList from "../UserEventosList/UserEventosList";
import ListAgregarPlayer from "../ListAgregarPlayer/ListAgregarPlayer";

import { UserContext } from "../../context/UserContext";

function Participantes({ players, evento_id }) {
  const [participantes, setParticipantes] = useState([]);
  const [estado, setEstado] = useState(0);

  // Aca el uso del contexto
  const { userLocale } = useContext(UserContext);

  useEffect(() => {
    if(players !== []){
      let PlayersGo = []
      players.forEach(j => {
        if(j.estado === 1){
          PlayersGo.push(j)
        }
      });
      
      const user_ids = PlayersGo.map((jugadores) => jugadores.user_id);
      UserServices.getAllPlayers(user_ids)
      .then((users) => {
        setParticipantes(users);
      });
      
      const user_logged = userLocale._id;
      players.forEach(participacion => {
        if(user_logged === participacion.user_id){
          setEstado(participacion.estado);
        }
      });
    }
  }, [players, userLocale]);

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

  function openModal(){
    const modalShowAddPlayer = new bootstrap.Modal('#modalAddPlayer', {
      toogle: true
    })
    return modalShowAddPlayer.show();
  }

  return (
    <>
      <div className="card mb-3 cuerpoLista">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <h2 className="mt-3">Participantes</h2>
            <button className="btn" type="button" onClick={openModal}><i className="bi bi-person-plus-fill"></i></button>
          </div>
        </div>
        <ol className="list-group list-group-numbered">
          {participantes.length > 0 ? participantes.map((jugador) => (
            <UserEventosList key={jugador._id} user={jugador}></UserEventosList>
          )) : (
            <p className="text-center mt-4">Aún nadie confirmó</p>
          )}
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
              { participantes.length > 0 ? (
                <ListAgregarPlayer evento_id={evento_id} participantes={participantes} />
              ) : (
                <p className="text-center mt-4">No hay contactos para agregar</p>
              )}

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Participantes;
