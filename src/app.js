import express, { request } from 'express';
import logger from './logger/logger.js';
import correlationId from './middleware/correlationId.js';
import errorHandler from './middleware/errorHandler.js';
import requestLogger from './middleware/requestLogger.js';
import authError from './errors/authError.js';
import dataError from './errors/dataError.js';
import validationError from './errors/validationError.js';
import { getMetrics } from "./utils/metrics.js";

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(correlationId);
app.get('/',(req,res)=>{
 res.send("Observability system running");
});
//for testing error handling and logging
app.get("/error", (req, res, next) => {
  const error = new Error("Test error occurred");
  error.statusCode = 500;
  next(error);
});
app.use(errorHandler);
app.get("/slow", async (req, res) => {

  await new Promise(resolve => setTimeout(resolve, 1200));

  res.json({
    message: "Slow API response"
  });

});
app.get("/test-validation", (req, res, next) => {
  next(new validationError("Email is invalid"));
});

app.get("/test-auth", (req, res, next) => {
  next(new authError("Token missing"));
});
app.get("/test-db", (req, res, next) => {
  next(new dataError("DB connection failed"));
});
app.get("/metrics", (req, res) => {
  res.json(getMetrics());
});

export default app;