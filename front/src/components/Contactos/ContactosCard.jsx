import { useEffect, useState } from "react";

function ContactosCard({contacto}) {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(contacto);
    }, [contacto]);

    return (
        <div className="col-md-6 mb-2">
            <div className="card">
                <div className="card-body d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="mr-3">
                            <p className="mb-0">{user.name} {user.lastName}</p>
                            <p className="mb-0">{user.mail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactosCard;
