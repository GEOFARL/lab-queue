import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: 'false' }));
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`App is started on port ${port}`);
});
