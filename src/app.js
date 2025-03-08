import express from 'express';
import schoolRouter from './routes/schoolRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/school', schoolRouter);

export default app;