import { useState, useEffect } from "react";
import * as UserServices from "../../services/user.services";

function ParticipantesLista({ jugador }) {
  const [participante, setParticipante] = useState({
    _id: "",
    name: "",
    lastname: "",
    mail: "",
  });

  useEffect(() => {
    UserServices.findByID(jugador.idJ).then((participante) => {
      console.log("participante", participante);
      setParticipante(participante);
    });
  }, [jugador.idJ]);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {participante.name} {participante.lastname}
        </div>
        {jugador.actualizacion}
      </div>
      {jugador.estado === 1 ? (
        <span className="badge bg-primary rounded-pill">va</span>
      ) : (
        <span className="badge bg-danger rounded-pill">no va</span>
      )}
    </li>
  );
}

export default ParticipantesLista;
