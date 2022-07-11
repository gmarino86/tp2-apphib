import React, { useEffect, useState } from 'react';
import SocketIO from 'socket.io-client';

function PageSocket() {
    const [mensaje, setMensaje] = useState('Sin data');
    const [acciones, setAcciones] = useState([]);

    useEffect(() => {
        const socket = SocketIO('http://127.0.0.1:3333',{
            transports: ['websocket']
        });
        
        socket.on('welcome', (data) => {
            setMensaje(data);
        });

        socket.on('action', (data) => {
            setAcciones([...acciones, data]);
        });
    }, [acciones]);


    return (
        <div>
            <h1>PageSocket</h1>
            <p>{mensaje}</p>
            <h2>Acciones</h2>
            <ul>
                {acciones.map((accion, index) => (
                    <li key={index}>{accion}</li>
                ))}
            </ul>
        </div>
    )
}

export default PageSocket;