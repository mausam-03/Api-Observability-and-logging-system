// Record start time

// Wait for response

// Calculate duration

// Log structured JSON using logger
import logger from "../logger/logger.js";
const SLOW_API_THRESHOLD = 1000; // 1 second
import correlationId from "./correlationId.js";
import {
  incrementTotalRequests,
  incrementSlowRequests,
  addResponseTime
} from "../utils/metrics.js";

const requestLogger = (req, res, next) => {
  const startTime = Date.now();
  incrementTotalRequests();
  res.on("finish", () => {
    const duration = Date.now() - startTime;
    addResponseTime(duration);
    logger.info({
      correlationId: req.correlationId,
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
      userAgent: req.get("User-Agent")
    });
    // slow request tracking
    if (duration > SLOW_API_THRESHOLD) {
      incrementSlowRequests();
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