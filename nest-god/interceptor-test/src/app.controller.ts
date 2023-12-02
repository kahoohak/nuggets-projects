import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaInterceptor } from './aaa.interceptor';
import { MapTestInterceptor } from './map-test.interceptor';
import { TapTestInterceptor } from './tap-test.interceptor';
import { CatchErrorTestInterceptor } from './catch-error-test.interceptor';
import { TimeoutTestInterceptor } from './timeout-test.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(AaaInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  @UseInterceptors(MapTestInterceptor)
  aaa() {
    return 'this is aaa';
  }

  @Get('bbb')
  @UseInterceptors(TapTestInterceptor)
  bbb() {
    return 'this is bbb';
  }

  @Get('ccc')
  @UseInterceptors(CatchErrorTestInterceptor)
  ccc() {
    throw new Error('xxxx');
    return 'this is ccc';
  }

  @Get('ddd')
  @UseInterceptors(TimeoutTestInterceptor)
  async ddd() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return 'this is ddd';
  }

  @Get('eee')
  eee() {
    return 'eee';
  }
}
