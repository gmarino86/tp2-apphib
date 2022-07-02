import { useEffect } from "react";
// import ContactosCard from "../../components/Contactos/ContactosCard.jsx";
import * as UserServices from "../../services/user.services";

function ListContactos({ contact }) {
  console.log('%cListContactos.jsx line:6 contact', 'color: #007acc;', contact);
  useEffect(() => {
    if(contact.length > 0){
      console.log('%cListContactos.jsx line:7 contact', 'color: #007acc;', contact);
      UserServices.getAllUsers(contact)
        .then(users => {
          console.log('%cListContactos.jsx line:9 users', 'color: #007acc;', users);
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }, [contact]);

  console.log('%cListContactos.jsx line:24 contact', 'color: #007acc;', contact);
  
  return (
    <>  
      {/* <ContactosCard key={contact._id} contacto={contact.friend_id} ></ContactosCard>        */}
    </>
  );

}

export default ListContactos;
