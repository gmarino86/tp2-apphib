import { useEffect } from "react";

function ContactosCard({contacto}) {

    useEffect(() => {
        console.log("Entro a useEffect");
    }, [contacto]);

    return (
        <div className="col-md-6 mb-2">
        {/* <div className="card">
            <div className="card-body d-flex justify-content-between">
            
            </div>
        </div> */}
        </div>
    );
}

export default ContactosCard;
