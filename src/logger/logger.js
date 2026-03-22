import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";  

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
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