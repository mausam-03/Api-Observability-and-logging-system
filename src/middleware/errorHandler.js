import logger from "../logger/logger.js";

const errorHandler = (err, req, res, next) => {

  logger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
    statusCode: err.statusCode || 500,
    correlationId: req.correlationId
  });

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });

};

export default errorHandler;