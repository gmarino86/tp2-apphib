import express from 'express';
import cors from 'cors'

import EventosRoute from './routes/eventos.route.js';
import UserRoute from './routes/user.route.js';

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/eventos', EventosRoute);
app.use('/api/user', UserRoute);

app.listen(3333, () => {
    console.log('Server started on port http://localhost:3333');
});