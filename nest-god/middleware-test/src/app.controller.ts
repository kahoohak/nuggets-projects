import { Controller, Get, Next, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  a1(@Next() next, @Response({ passthrough: true }) response) {
    return 'hello';
  }

  @Get('bbb')
  b1(@Next() next) {
    next();
    return 'hello1';
  }

  @Get('bbb')
  b2() {
    return 'hello2';
  }
}
