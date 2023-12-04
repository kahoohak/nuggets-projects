import {
  BadGatewayException,
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HelloFilter } from './hello.filter';
import { AaaDto } from './dto/aaa.dto';
import { UnLoginException } from './unlogin.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // throw new HttpException('xxxx', HttpStatus.BAD_REQUEST);

    // throw new BadRequestException('yyyy');

    // throw new BadGatewayException('zzzz');

    throw new UnLoginException();
    return this.appService.getHello();
  }

  @Post('aaa')
  aaa(@Body() aaaDto: AaaDto) {
    return 'success';
  }
}
