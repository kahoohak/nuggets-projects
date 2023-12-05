import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { MyLogger } from './logger2/MyLogger';

@Injectable()
export class AppService {
  @Inject(MyLogger)
  private logger: MyLogger;

  getHello(): string {
    this.logger.log('is name', AppService.name);
    return 'Hello World!';
  }
}
