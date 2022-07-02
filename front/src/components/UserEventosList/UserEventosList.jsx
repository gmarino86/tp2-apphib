import { useEffect, useState } from "react";
import * as UserServices from "../../services/user.services";

function UserEventosList({participacion}){

    const [user, setUser] = useState({});
    
    useEffect(() => {
        UserServices.findByID(participacion.user_id)
        .then(u => {
            setUser(u)
        })
    // eslint-disable-next-line
    },[participacion.estado])
    return (
        <>
            <li className="list-group-item">
                {user.name}
            </li>
        </>
    )
}
export default UserEventosList;
