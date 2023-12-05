import { ConsoleLogger } from '@nestjs/common';

export class MyLogger2 extends ConsoleLogger {
  log(message, context) {
    console.log(`[${context}]`, message);
  }
}
