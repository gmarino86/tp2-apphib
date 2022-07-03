import { useEffect , useState } from "react";
import ContactosCard from "../../components/Contactos/ContactosCard.jsx";
import * as UserServices from "../../services/user.services";

function ListContactos({ contactos }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      UserServices.getAllUsers(contactos)
        .then(data => {
          setUsers(data);
        })
        .catch(error => {
          console.log("error", error);
        });
  }, [contactos]);
  
  return (
    <>  
      {users.map(user => (
        <ContactosCard key={user._id} contacto={user} />
      ))}
    </>
  );
}

export default ListContactos;
