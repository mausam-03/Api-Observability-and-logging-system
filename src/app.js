import express, { request } from 'express';
import logger from './logger/logger.js';
import correlationId from './middleware/correlationId.js';

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(correlationId);
app.get('/',(req,res)=>{
 res.send("Observability system running");
});

export default app;