import logger from "../logger/logger.js";
import { incrementErrorRequests } from "../utils/metrics.js";

const errorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || 500;
  incrementErrorRequests();
  logger.error({
    message: err.message,
    errorType: err.errorType || "UNKNOWN_ERROR",
    method: req.method,
    url: req.originalUrl,
    statusCode,
    stack: err.stack
  });

  res.status(statusCode).json({
    success: false,
    errorType: err.errorType || "UNKNOWN_ERROR",
    message: err.message
  });
};

export default errorHandler;