import { createLogger, format, transports } from "winston";

const logger = createLogger({
    format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        }),
        new transports.File({ filename: 'logs.log' })
    ]
});

export default logger;