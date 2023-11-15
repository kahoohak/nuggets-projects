import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseFilters,
  Query,
  ParseIntPipe,
  ParseBoolPipe,
  UseGuards,
  UseInterceptors,
  SetMetadata,
  Headers,
  Ip,
  Session,
} from '@nestjs/common';
import { AaaService } from './aaa.service';
import { CreateAaaDto } from './dto/create-aaa.dto';
import { UpdateAaaDto } from './dto/update-aaa.dto';
import { AaaFilter } from './aaa.filter';
import { AaaDto } from './dto/aaa.dto';
import { AaaGuard } from './aaa.guard';
import { AaaInterceptor } from './aaa.interceptor';

@Controller('aaa')
@SetMetadata('roles', ['user'])
export class AaaController {
  constructor(private readonly aaaService: AaaService) {}

  @Post()
  create(@Body() createAaaDto: CreateAaaDto) {
    return this.aaaService.create(createAaaDto);
  }

  @Get()
  findAll() {
    return this.aaaService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.aaaService.findOne(+id);
  // }

  @Get('hello')
  @UseFilters(AaaFilter)
  @UseGuards(AaaGuard)
  @UseInterceptors(AaaInterceptor)
  @SetMetadata('roles', ['admin'])
  getHello() {
    throw new HttpException('xxxx', HttpStatus.BAD_REQUEST);
  }

  @Get('xxx/:aaa')
  getHello2(
    @Param('aaa', ParseIntPipe) aaa: number,
    @Query('bbb', ParseBoolPipe) bbb: boolean,
  ) {
    console.log(typeof aaa, typeof bbb);
    console.log(aaa, bbb);
    return 'hello';
  }

  @Get('header')
  getHeader(@Headers('Accept') accept: string) {
    console.log(accept);
  }

  @Get('ip')
  getIp(@Ip() ip: string) {
    console.log(ip);
  }

  @Get('session')
  getSession(@Session() session) {
    if (!session.count) {
      session.count = 0;
    }
    session.count = session.count + 1;
    return session.count;
  }

  @Post('/bbb')
  getHello3(@Body() aaa: AaaDto) {
    console.log(aaa);
    return 'hello';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAaaDto: UpdateAaaDto) {
    return this.aaaService.update(+id, updateAaaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aaaService.remove(+id);
  }
}
