import { useEffect, useState } from "react";
import * as ContactosServices from "../../services/contactos.services";
import * as UserServices from "../../services/user.services";
import * as ParticipantesServices from "../../services/participantes.services";

function ListAgregarPlayer({evento_id, participantes}){
    const [playersToAdd, setPlayersToAdd] = useState([]);
    
    useEffect(() => {
        ContactosServices.findContacts()
        .then((contactos) => {
            if(contactos !== {}){
                let contactosFiltrados = contactos.filter((contacto) => {
                    let existe = false;
                    participantes.forEach((participante) => {
                        if(contacto.friend_id === participante._id){
                            existe = true;
                        }
                    });
                    return !existe;
                });
                UserServices.getAllUsers(contactosFiltrados)
                .then((users) => {
                    if(users !== {}){
                        setPlayersToAdd(users);
                    }
                });
            }
        })
    }, [evento_id,participantes]);

    function addPlayer(friend_id){
        ParticipantesServices.addContactToEvent(evento_id, friend_id)
        .then(() => {
            window.location.reload();
        });
    }

    return (
        <>
            <ul className="list-group">                    
                { playersToAdd.map((player) => (
                    <li className="list-group-item d-flex justify-content-between" key={player._id}> 
                        <div className="pt-3">{player.name} {player.lastName}</div>
                        <div onClick={() => addPlayer(player._id)} data-bs-dismiss="modal" ><i className="bi bi-person-plus-fill text-success"></i></div>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ListAgregarPlayer