import { useEffect } from "react";

function UserEventosList({ user }) {
    useEffect(() => {
    }, [user]);
    return (
        <>
        <li className="list-group-item">
            {user.name} {user.lastname}
        </li>
        </>
    );
}
export default UserEventosList;
