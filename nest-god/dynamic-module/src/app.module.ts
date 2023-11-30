import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import { AaaModule } from './aaa/aaa.module';
import { CccModule } from './ccc/ccc.module';

@Module({
  imports: [
    BbbModule.register({
      aaa: 1,
      bbb: 2,
    }),
    AaaModule,
    CccModule.register({
      aaa: 3,
      bbb: 4,
    }),
    // CccModule.registerAsync({
    //   useFactory: async () => {
    //     await 123;
    //     return {
    //       aaa: 5,
    //       bbb: 6,
    //     };
    //   },
    //   inject: [],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
