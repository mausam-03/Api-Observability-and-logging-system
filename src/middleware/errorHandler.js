import logger from "../logger/logger.js";

const errorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || 500;

  logger.error({
    message: err.message,
    errorType: err.errorType || "UNKNOWN_ERROR",
    method: req.method,
    url: req.originalUrl,
    statusCode,
    correlationId: req.correlationId,
    stack: err.stack
  });

  res.status(statusCode).json({
    success: false,
    errorType: err.errorType || "UNKNOWN_ERROR",
    message: err.message
  });
};

export default errorHandler;