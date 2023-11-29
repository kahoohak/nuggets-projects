import {
  Controller,
  Get,
  Headers,
  ParseIntPipe,
  Query,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Aaa } from './aaa.decorator';
import { AaaGuard } from './aaa.guard';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { MyHeaders } from './my-headers.decorator';
import { MyQuery } from './my-query.decorator';
import { Ddd } from './ddd.decorator';

// @Controller()
@Ddd('eee', 'kaho')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  @Aaa('admin')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('hello2', 'admin')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('hello4')
  getHello4(@Ccc() c) {
    return c;
  }

  @Get('hello5')
  getHello5(@Headers('Accept') header1, @MyHeaders('Accept') header2) {
    console.log('header1', header1);
    console.log('header2', header2);
  }

  @Get('hello6')
  getHello6(
    @Query('aaa', new ParseIntPipe()) aaa1,
    @MyQuery('aaa', new ParseIntPipe()) aaa2,
  ) {
    console.log('aaa1', aaa1 + 1);
    console.log('aaa2', aaa2 + 1);
  }
}
