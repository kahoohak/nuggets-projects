import {
  Body,
  Controller,
  Get,
  // HttpException,
  // HttpStatus,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Param } from '@nestjs/common';
import { ParseEnumPipe } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common';
import { DefaultValuePipe } from '@nestjs/common';
import { AaaPipe } from './aaa.pipe';
import { Kk } from './dto/kk.dto';
import { MyValidationPipePipe } from './my-validation-pipe.pipe';
import { Ll } from './dto/ll.dto';

enum Ggg {
  AAA = '111',
  BBB = '222',
  CCC = '333',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aa')
  getHello(
    @Query(
      'aa',
      new ParseIntPipe({
        // errorHttpStatusCode: HttpStatus.NOT_FOUND,
        // exceptionFactory: (msg) => {
        //   console.log(msg);
        //   throw new HttpException('xxx ' + msg, HttpStatus.NOT_IMPLEMENTED);
        // },
      }),
    )
    aa: number,
  ): number {
    return aa + 1;
  }

  @Get('bb')
  bb(@Query('bb', ParseFloatPipe) bb: number): number {
    return bb + 1;
  }

  @Get('cc')
  cc(@Query('cc', ParseBoolPipe) cc: boolean): boolean {
    return cc;
  }

  @Get('ee')
  ee(
    @Query(
      'ee',
      new ParseArrayPipe({
        items: Number,
      }),
    )
    ee: Array<number>,
  ): number {
    return ee.reduce((total, item) => total + item, 0);
  }

  @Get('ff')
  ff(
    @Query(
      'ff',
      new ParseArrayPipe({
        separator: '..',
        optional: true,
      }),
    )
    ff: Array<string>,
  ): Array<string> {
    return ff;
  }

  @Get('gg/:enum')
  gg(@Param('enum', new ParseEnumPipe(Ggg)) gg: Ggg): Ggg {
    return gg;
  }

  @Get('hh/:uuid')
  hh(@Param('uuid', new ParseUUIDPipe()) uuid: string): string {
    return uuid;
  }

  @Get('ii')
  ii(@Query('ii', new DefaultValuePipe('default value')) ii: string): string {
    return ii;
  }

  @Get('jj/:aaa')
  jj(
    @Param('aaa', AaaPipe) aaa: string,
    @Query('bbb', AaaPipe) bbb: string,
  ): string {
    console.log(aaa, bbb);
    return aaa + bbb;
  }

  // @Post('kk')
  // kk(@Body(new ValidationPipe()) obj: Kk) {
  //   console.log(obj);
  // }

  // @Post('kk')
  // kk(@Body(MyValidationPipePipe) obj: Kk) {
  //   console.log(obj);
  // }

  @Post('kk')
  kk(@Body() obj: Kk) {
    console.log(obj);
  }

  @Post('ll')
  ll(@Body() ll: Ll) {
    console.log(ll);
  }
}
