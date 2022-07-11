import express from 'express';
import cors from 'cors'
import { createServer } from 'http'; 
import * as SocketIO from 'socket.io';

import EventosRoute from './routes/eventos.route.js';
import UserRoute from './routes/user.route.js';
import ContactosRoute from './routes/contactos.route.js';
import ParticipantesRoute from './routes/participantes.route.js';

const app = express()
const server = createServer(app)
const serverSocket = new SocketIO.Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    },
    transports: ['websocket']
})

let socketCliente = null;

serverSocket.on('connection', (socket) => {
    socketCliente = socket;
    console.log('Nueva conexion')
    socket.emit('welcome', 'Bienvenido al servidor')
    
    socket.on('disconnect', () => {
        console.log('Conexion cerrada')
        socketCliente = null;
    })
})

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const mensaje = `${method} ${url}`;
    if(socketCliente) {
        socketCliente.emit('action', mensaje)
    }
    next();
})



app.use('/api/user', UserRoute);
app.use('/api/eventos', EventosRoute);
app.use('/api/contactos', ContactosRoute);
app.use('/api/participantes', ParticipantesRoute);

app.get('/hola', (req, res) => {
    if(socketCliente) {
        socketCliente.emit('welcome', 'Hola desde el servidor')
    }
    res.send('Hola mundo')
})




server.listen(3333, () => {
    console.log('Server started on port http://localhost:3333');
});