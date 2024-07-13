import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;
const nameApi = process.env.API_NAME;

app.use(express.json());

app.listen(port, () => {
    console.log(`API ${nameApi} corriendo en puerto ${port}`);
});