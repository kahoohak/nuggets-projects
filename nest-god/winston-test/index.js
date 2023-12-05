import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import winston from "winston";
import 'winston-daily-rotate-file'

const _filename_ = fileURLToPath(import.meta.url);
const _dirname_ = dirname(_filename_);

const logger = winston.createLogger({
  level: 'debug',
  // format: winston.format.simple(),
  // format: winston.format.json(),
  // format: winston.format.prettyPrint(),
  // format: winston.format.combine(
  //   winston.format.label({label: '标签' }),
  //   winston.format.timestamp(), 
  //   winston.format.json()
  // )
  // format: winston.format.combine(
  //   winston.format.colorize(),
  //   winston.format.simple()
  // ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),

    new winston.transports.File({
      dirname: path.join(_dirname_, 'log'),
      filename: 'test.log',
      format: winston.format.json()
    })

    // new winston.transports.DailyRotateFile({
    //   level: 'info',
    //   dirname: path.join(_dirname_, 'log2'),
    //   filename: 'test-%DATE%.log',
    //   datePattern: 'YYYY-MM-DD-HH-mm',
    //   maxSize: '1k'
    // })

    // new winston.transports.Http({
    //   host: 'localhost',
    //   port: '3000',
    //   path: '/log'
    // })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      dirname: path.join(_dirname_, 'log'),
      filename: 'error.log'
    })
  ]
})

// logger.clear()
// logger.add(console)
// logger.remove(console)
// logger.add(file)

throw new Error('xxx')

logger.info('kaho')
logger.error('ohak')
logger.debug(666)