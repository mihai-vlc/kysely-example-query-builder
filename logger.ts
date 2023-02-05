import { format, createLogger, transports } from "winston";

const myFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const globalLogger = createLogger({
    level: "debug",
    format: format.combine(format.timestamp(), myFormat),
    transports: [
        new transports.File({
            filename: "log.txt",
            dirname: __dirname,
        }),
        new transports.Console(),
    ],
});

export default globalLogger;
