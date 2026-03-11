// Record start time

// Wait for response

// Calculate duration

// Log structured JSON using logger
import logger from "../logger/logger.js";
import correlationId from "./correlationId.js";

const requestLogger = (req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;

    logger.info({
      correlationId: req.correlationId,
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
      userAgent: req.get("User-Agent")
    });
  });

  next();
};

export default requestLogger;