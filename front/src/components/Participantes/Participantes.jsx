import { useState, useEffect } from "react";
import * as ParticipantesServices from "../../services/participantes.services";

import ParticipanteLista from "../../components/ParticipantesLista/ParticipantesLista.component";

function Participantes({ evento , cantidad }) {
  const [participantes, setParticipantes] = useState([]);

  useEffect (() => {
    if(cantidad){
      ParticipantesServices.findByEventId(evento, cantidad)
      .then((participantes) => {
        console.log('%cParticipantes.jsx line:12 participantes', 'color: #007acc;', participantes);
        setParticipantes(participantes);
      })
      .catch((err) => console.log(err));
    }
  }, [evento, cantidad]);

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h2>Participantes</h2>
      </div>
      <ol className="list-group list-group-numbered">
        {participantes ? (
          participantes.map((participante) => (
            <ParticipanteLista key={participante.user_id} participante={participante} />
          ))
        ) : (
          <li className="p-2 text-center">No hay participantes</li>
        )}
      </ol>
    </div>
  );
}

export default Participantes;
