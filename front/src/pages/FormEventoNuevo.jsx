import * as EventosService from '../services/eventos.services';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NavbarPage from '../pages/Navbar.page';

function FormEventoNuevo(){

    let navigate = useNavigate();

    const [titulo, setTitulo] = useState("");
    const [lugar, setLugar] = useState("");
    const [deporte, setDeporte] = useState("");
    const [dia, setDia] = useState("");
    const [hora, setHora] = useState("00:00");
    const [cantParticipantes, setCantParticipantes] = useState(0);

    function handleTitulo(e){
        setTitulo(e.target.value);
    }
    function handleLugar(e){
        setLugar(e.target.value);
    }
    function handleDeporte(e){
        setDeporte(e.target.value);
    }
    function handleDia(e){
        setDia(e.target.value);
    }
    function handleHora(e){
        setHora(e.target.value);
    }
    function handleCantParticipantes(e){
        setCantParticipantes(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        const evento = {
            titulo: titulo,
            lugar: lugar,
            deporte: deporte,
            dia: dia,
            hora: hora,
            cantParticipantes: parseInt(cantParticipantes),
            estado: 1,
        }
        EventosService.create(evento)
        .then(response => {
            console.log('%cFormEventoNuevo.jsx line:49 response', 'color: #007acc;', response);
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
                <h1>Evento nuevo</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="titulo" className="form-label">Título</label>
                        <input type="text" value={titulo} onChange={handleTitulo} name="titulo" className="form-control" id="titulo" aria-describedby="tituloHelp" />
                        <div id="tituloHelp" className="form-text">Ingresá el nombre del evento.</div>
                    </div>
                    <div className="row g-2">
                        <div className="col-6">
                            <label htmlFor="dia" className="form-label">Día</label>
                            <input type="date" value={dia} onChange={handleDia} name="dia" className="form-control" id="dia" aria-describedby="diaHelp" />
                            <div id="diaHelp" className="form-text">Seleccioná fecha y hora.</div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="hora" className="form-label">Hora</label>
                            <input type="time" value={hora} onChange={handleHora} name="hora" className="form-control" id="hora" aria-describedby="horaHelp" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lugar" className="form-label">Dirección</label>
                        <input type="text" value={lugar} onChange={handleLugar} name="lugar" className="form-control" id="lugar" aria-describedby="lugarHelp" />
                        <div id="lugarHelp" className="form-text">Ingresá la dirección del evento.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="deporte" className="form-label">Deporte</label>
                        <input type="text" value={deporte} onChange={handleDeporte} name="deporte" className="form-control" id="deporte" aria-describedby="deporteHelp" />
                        <div id="deporteHelp" className="form-text">Seleccioná el deporte.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cantParticipantes" className="form-label">Participantes</label>
                        <input type="number" value={cantParticipantes} onChange={handleCantParticipantes} name="cantParticipantes" className="form-control" id="cantParticipantes" aria-describedby="cantParticipantesHelp" />
                        <div id="cantParticipantesHelp" className="form-text">Cantidad de participantes: {cantParticipantes}</div>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FormEventoNuevo;