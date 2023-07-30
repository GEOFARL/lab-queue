import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

connectDB();

app.use(express.urlencoded({ extended: 'false' }));
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res, next) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`App is started on port ${port}`);
});
