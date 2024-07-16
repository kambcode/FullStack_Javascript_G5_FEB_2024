import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const apiName = process.env.NAME;

app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`API ${apiName} corriendo en puerto ${port}`);
});