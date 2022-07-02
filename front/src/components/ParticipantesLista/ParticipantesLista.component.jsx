// import { useState } from "react";
// import * as UserServices from "../../services/user.services";

function ParticipantesLista({ usuario }) {
  // const [users, setUsers] = useState([{
  //   _id: "",
  //   name: "",
  //   lastname: "",
  //   mail: "",
  // }]);


  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {/* {user.name} {user.lastname} */}
        </div>
      </div>
      {/* {participante.estado === 1 ? (
        <span className="badge bg-primary rounded-pill">Participa</span>
      ) : (
        <span className="badge bg-danger rounded-pill">No Participa</span>
      )} */}
    </li>
  );
}

export default ParticipantesLista;
