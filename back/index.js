import express from 'express';
import EventosRoute from './routes/eventos.route.js';

const app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use('/', EventosRoute);

app.listen(3333, () => {
    console.log('Server started on port http://localhost:3333');
});