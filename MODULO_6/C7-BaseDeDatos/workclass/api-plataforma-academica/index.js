const express = require('express');
const app = express();
const sequelize = require('./config/database');
const estudiantesRoutes = require('./routes/estudiantes');

app.use(express.json());
app.use('/api', estudiantesRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => console.error('Unable to sync database:', err));