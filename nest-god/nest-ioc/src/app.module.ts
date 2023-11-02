import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'user1',
      useValue: {
        name: 'kaho1',
      },
    },
    {
      provide: 'user2',
      useFactory() {
        return {
          name: 'kaho2',
        };
      },
    },
    {
      provide: 'user3',
      useFactory(user: { name: string }, appService: AppService) {
        return {
          name: user.name,
          desc: appService.getHello(),
        };
      },
      inject: ['user1', AppService],
    },
    {
      provide: 'user4',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
        return {
          name: 'user4',
          desc: 'this is user4',
        };
      },
    },
    {
      provide: 'user5',
      useExisting: 'user4',
    },
  ],
})
export class AppModule {}
