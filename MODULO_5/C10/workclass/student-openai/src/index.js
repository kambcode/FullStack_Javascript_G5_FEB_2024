const express = require('express');
const dotenv = require('dotenv');
const recommendationRoutes = require('./routes/recommendationRoutes.js');

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const nameBootcamp = process.env.NAME_BOOTCAMP;

app.use('/api', recommendationRoutes);

app.get('/', (req, res) => {
    res.send(`API de recomendación de cursos C10 ${nameBootcamp}`);
});

app.listen(PORT, () => {
    res.send(`Servidor corriendo puerto ${PORT}`);
});