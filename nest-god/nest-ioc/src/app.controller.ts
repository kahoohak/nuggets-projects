import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('user1') private readonly user1: { name: string },
    @Inject('user2') private readonly user2: { name: string },
    @Inject('user3') private readonly user3: { name: string; desc: string },
    @Inject('user4') private readonly user4: { name: string; desc: string },
    @Inject('user5') private readonly user5: { name: string; desc: string },
  ) {}

  @Get()
  getHello(): string {
    console.log(this.user1);
    console.log(this.user2);
    console.log(this.user3);
    console.log(this.user4);
    console.log(this.user5);
    return this.appService.getHello();
  }
}
