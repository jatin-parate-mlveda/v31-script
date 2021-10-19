import winston, { createLogger, transports, format } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, prettyPrint } = format;

const transportForError = new winston.transports.DailyRotateFile({
  frequency: '24h',
  filename: `log/error/${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}/error-%DATE%.log`,
  datePattern: 'YYYY-MM-DD-HH',
  maxSize: '1m',
  utc: true,
  level: 'error',
});

const transportForInfo = new winston.transports.DailyRotateFile({
  frequency: '24h',
  filename: `log/info/${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}/info-%DATE%.log`,
  datePattern: 'YYYY-MM-DD-HH',
  maxSize: '1m',
  utc: true,
  level: 'info',
});

const errorStackFormat = format(info => {
  if (info instanceof Error) {
    return { ...info, stack: info.stack, message: info.message };
  }
  return info;
});

const logger = createLogger({
  format: combine(
    errorStackFormat(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    prettyPrint(),
  ),
  transports: [transportForError, transportForInfo],
  exitOnError: false,
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      level: 'error',
      format: combine(format.colorize(), format.simple()),
    }),
  );
}

export default logger;
