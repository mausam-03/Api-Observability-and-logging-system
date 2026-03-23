import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";  
import asyncLocalStorage from "../utils/asyncContext.js";

const { combine, timestamp, json } = winston.format;

const addCorrelationId = winston.format((info) => {
  const store = asyncLocalStorage.getStore();

  if (store && store.correlationId) {
    info.correlationId = store.correlationId;
  }

  return info;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(addCorrelationId(),timestamp(), json()),
  transports: [
    new winston.transports.Console(),

    new DailyRotateFile({
      filename: "./logs/application-%DATE%.log",
      datePattern: "YYYY-MM-DD",

      // Retention policies
      maxSize: "20m",
      maxFiles: "7d",
      zippedArchive: true,

      level: "info"
    })
  ]
});

export default logger;