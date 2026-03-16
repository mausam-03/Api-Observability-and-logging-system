// Record start time

// Wait for response

// Calculate duration

// Log structured JSON using logger
import logger from "../logger/logger.js";
const SLOW_API_THRESHOLD = 1000; // 1 second
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
    if (duration > SLOW_API_THRESHOLD) {
      logger.warn({
        message: "Slow API response detected",
        correlationId: req.correlationId,
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode,
        duration: `${duration}ms`,
        ip: req.ip,
        userAgent: req.get("User-Agent")
      });
    }
  });

  next();
};

export default requestLogger;