import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as RecoveryService from "../services/recovery.services";
import * as UserService from "../services/user.services";

function FormNewPass(){
    const [ params ] = useSearchParams();
    const mail = params.get("email");
    const token = params.get("token");

    const [pass, setPass] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const [error, setError] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const [verify, setVerify] = useState("");

    useEffect(() => {
        if(token){
            if(mail){
                RecoveryService.verifyToken(token, mail)
                .then(response => {
                    if(response.error){
                        setError(response.error);
                    }
                    if(response.message){
                        setVerify(response.message);
                    }
                })
                .catch(error => {
                    setError("Falta token o mail");
                });
            } else {
                setError("Falta el mail");
            }
        } else {
            setError("Falta token");
        }
    }, [token, mail]);
    
    function handleSubmit(e){
        e.preventDefault();
        if(pass === passConfirm) {
            if(pass.length > 0) {
                UserService.updatePass(mail, pass)
                .then(() => {
                    setErrorPass("");
                    setVerify("");
                    window.location.href = "/login";
                })
                .catch(error => {
                    console.log('%cFormNewPass.jsx line:45 error', 'color: #007acc;', error);
                });
            }
            else {
                setErrorPass("Ingresá al menos 1 caracter.");
            }
        } else {
            setErrorPass("Las contraseñas no coinciden");
        }        
    }

    return (
        <div className="container">
            {error ? ( 
                <div className="alert alert-danger mt-5">{error}</div> 
            ):(
                <>
                <h1 className="mt-3">Ingrese su nueva password</h1>
                {verify ? <div className="alert alert-success my-4">{verify}</div> : null}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="password" name="pass" className="form-control" id="pass" placeholder="Password" value={pass} onChange={ (e) => setPass(e.target.value) } />
                        <div className="form-text">Ingresá tu nueva contraseña.</div>
                    </div>
                    <div className="mb-3">
                        <input type="password" name="passConfirm" className="form-control" id="pass2" placeholder="Confirmá tu Password" value={passConfirm} onChange={ (e) => setPassConfirm(e.target.value) } />
                        <div className="form-text">Repetí la contraseña.</div>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Modificar</button>
                    </div>
                </form>
                {errorPass && <div className="alert alert-danger mt-3 p-2">{errorPass}</div>}
                </>
            )}
        </div>
    )
}
export default FormNewPass;