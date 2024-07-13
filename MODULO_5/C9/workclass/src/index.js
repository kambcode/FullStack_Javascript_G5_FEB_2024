import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT;
const nameApi = process.env.API_NAME;

app.use('/api', bookRoutes);
app.use(express.json());

app.listen(port, () => {
    console.log(`API ${nameApi} corriendo en puerto ${port}`);
});