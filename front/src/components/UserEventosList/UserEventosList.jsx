import { useEffect } from "react";

function UserEventosList({ user }) {
    useEffect(() => {
        console.log('%cUserEventosList.jsx line:5 user', 'color: #007acc;', user);
    }, [user]);
    return (
        <>
        <li className="list-group-item px-4 py-1">
            {user.name} {user.lastName}
        </li>
        </>
    );
}
export default UserEventosList;
