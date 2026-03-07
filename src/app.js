import express, { request } from 'express';
import logger from './logger/logger.js';

const app = express();

app.use(express.json());
app.use(requestLogger);

app.get('/',(req,res)=>{
 res.send("Observability system running");
});

export default app;