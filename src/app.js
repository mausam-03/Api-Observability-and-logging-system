import express, { request } from 'express';
import logger from './logger/logger.js';
import correlationId from './middleware/correlationId.js';
import errorHandler from './middleware/errorHandler.js';
import requestLogger from './middleware/requestLogger.js';

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
export default app;