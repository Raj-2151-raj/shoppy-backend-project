import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js'; // connected to DB
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));