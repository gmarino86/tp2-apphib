import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import * as UserService from '../services/user.services';

function FormOlvidePass(){

    // let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        const mailOfPass = {
            email: email
        }
        
        UserService.olvidePass(mailOfPass)
        .then(response => {
            if(response.message){
                setEmail("");
                setError(response.message);
            }

            // navigate('/login');
        })

        
    }

    return (
        <div>
            <div className="container">
                <h1 className="mt-3">Recuperá tu contraseña</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-5">
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                        <div id="emailHelp" className="form-text">Ingresá el mail para recuperar la contraseña.</div>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary mb-4" type="submit">Recuperar</button>
                    </div>
                </form>
                {error && <div className="badge bg-primary text-wrap">{error}</div>}
            </div>
        </div>
    );
}
export default FormOlvidePass;