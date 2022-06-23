import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as UserService from '../services/user.services';
import NavbarPage from './Navbar.page';

function FormLogin(){

    let navigate = useNavigate();

    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    function handleMail(e){
        setMail(e.target.value);
    }
    function handlePass(e){
        setPass(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const userLogin = {
            mail: mail,
            pass: pass,
        }
        UserService.login(userLogin)
        .then(response => {
            console.log('%cFormLogin.jsx line:28 response', 'color: #007acc;', response);
            navigate('/', { replace: true });
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <NavbarPage></NavbarPage>
            <div className="container">
            <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="mail" className="form-label">Email</label>
                        <input type="email" value={mail} onChange={handleMail} name="mail" className="form-control" id="mail" aria-describedby="mailHelp" />
                        <div id="mailHelp" className="form-text">Ingresá tu email.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label">Password</label>
                        <input type="password" value={pass} onChange={handlePass} name="pass" className="form-control" id="pass" aria-describedby="passHelp" />
                        <div id="passHelp" className="form-text">Ingresá tu password</div>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;