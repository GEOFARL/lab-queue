import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

connectDB();

app.use(express.urlencoded({ extended: 'false' }));
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use('/api/auth', authRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is started on port ${port}`);
});
