import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as fs from 'node:fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      dest: 'uploads', // 设置文件上传的目标目录
    }),
  )
  uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('files', files);
    console.log('body', body);

    const { name, index } = body;
    const chunkDir = 'uploads/chunk_' + name;

    if (!fs.existsSync(chunkDir)) {
      fs.mkdirSync(chunkDir);
    }

    fs.cpSync(files[0].path, `${chunkDir}/${name}-${index}`);
    fs.rmSync(files[0].path);
  }

  @Get('merge')
  merge(@Query('name') name: string) {
    const chunkDir = 'uploads/chunk_' + name;
    const files = fs.readdirSync(chunkDir);

    let start = 0;
    files.map((file) => {
      const filePath = chunkDir + '/' + file;
      const stream = fs.createReadStream(filePath);
      stream.pipe(fs.createWriteStream('uploads/' + name, { start }));
      start += fs.statSync(filePath).size;
    });
  }
}
