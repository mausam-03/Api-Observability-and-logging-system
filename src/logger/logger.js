import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";  

const { combine, timestamp, json } = winston.format;
const logger = winston.createLogger({
    level: "info",
    format: combine(timestamp(),json()),  //added timestamp
    transports:[
        new winston.transports.Console(),
        //new winston.transports.File({ filename: "src/logs/app.log" }) adding logs in file app.log
        //adding daily rotation to logs
        new DailyRotateFile({
               filename: "logs/application-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxSize: "20m",
      maxFiles: "14d"
    })
    ]
});

export default logger;