'use strict';

import winston, { createLogger, format, transports, child } from 'winston';
import 'winston-daily-rotate-file';
import { v4 } from 'uuid';
const { combine, timestamp, prettyPrint } = format;

const transport = new (winston.transports.DailyRotateFile)({
    filename: './logs/%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

const logger = createLogger({
    format: combine(
        timestamp(),
        prettyPrint(),
    ),
    transports: [
        transport
    ],
    exitOnError: false,
});

const children = logger.child({requestId: v4()});

export const stream = {
    write: (message: string) => {
        children.info(message);
    }
}

export default children;