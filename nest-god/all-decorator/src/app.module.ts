import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Kaho } from './kaho';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    Kaho,
    {
      provide: 'KahoFactory',
      useFactory() {
        return {
          name: 'kahoFactory',
        };
      },
    },
  ],
  imports: [AaaModule, BbbModule],
})
export class AppModule {}
