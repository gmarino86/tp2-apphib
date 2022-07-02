import { useState, useEffect } from "react";
import * as ParticipantesServices from "../../services/participantes.services";
// import * as UserServices from "../../services/user.services";

function Participantes({ evento }) {
  const [participantes, setParticipantes] = useState([]);

  useEffect (() => {
    if(evento._id){
      ParticipantesServices.findByEventId(evento._id)
      .then((data) => {
        setParticipantes(data);
        console.log('%cParticipantes.jsx line:13 participantes', 'color: #007acc;', participantes);
      })
    }
  // eslint-disable-next-line
  }, []);

      // console.log("Evento ID: ", evento._id);
      // UserServices.getAllUsers(evento._id)
      // .then((data) => {
      //   console.log("%cuser.services.js line:45 data", 'color: #007acc;', data);
      // })
      // .catch((error) => console.log(error));
      // }

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h2>Participantes</h2>
      </div>
      <ol className="list-group list-group-numbered">
          
      </ol>
    </div>
  );
}

export default Participantes;
