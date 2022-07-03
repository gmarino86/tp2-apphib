function UserEventosList({ user }) {
    return (
        <>
        <li className="list-group-item">
            {user.name} {user.lastname}
        </li>
        </>
    );
}
export default UserEventosList;
