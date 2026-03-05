import express from 'express';
import logger from './logger/logger.js';

const app = express();

app.get('/',(req,res)=>{
    logger.info("Root route accessed");
    res.send("Hello World");
});

export default app;