import winston from "winston";

const { combine, timestamp, json } = winston.format;
const logger = winston.createLogger({
    level: "info",
    format: combine(timestamp(),json()),  //added timestamp
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({ filename: "src/logs/app.log" })   //adding logs in file app.log
    ]
});

export default logger;