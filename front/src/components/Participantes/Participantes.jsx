import { useState, useEffect } from "react";
import * as ParticipantesServices from "../../services/participantes.services";
import UserEventosList from "../UserEventosList/UserEventosList";

function Participantes({ evento }) {
  const [participantes, setParticipantes] = useState([]);

  useEffect (() => {
    if(evento._id){
      ParticipantesServices.findByEventId(evento._id)
      .then(jugadores => setParticipantes(jugadores)) 
    }
    // eslint-disable-next-line
  }, [evento])
  
  return (
    <>
    <div className="card mb-3">
      <div className="card-header">
        <h2>Participantes</h2>
      </div>
      <ol className="list-group list-group-numbered">
        {participantes.map(participante => (
          <UserEventosList key={participante._id} participacion={participante}></UserEventosList>
          )
        )}
      </ol>
    </div>
    <div className="container text-center">
      <button className="btn btn-success p-3 w-50" type="button" >
        Participar
      </button>
  </div>
  </>
  );
}

export default Participantes;
