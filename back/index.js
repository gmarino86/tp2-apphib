import express from 'express';
import EventosRoute from './routes/eventos.route.js';
import cors from 'cors'

const app = express();
app.use(cors());

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use('/', EventosRoute);

app.listen(3333, () => {
    console.log('Server started on port http://localhost:3333');
});