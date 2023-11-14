import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';
import { Kaho } from './kaho';

@Controller()
export class AppController {
  // constructor(
  //   private readonly appService: AppService,
  //   private readonly kaho: Kaho,
  // ) {}

  @Inject(AppService)
  private readonly appService: AppService;

  @Inject(Kaho)
  private readonly kaho: Kaho;

  @Optional()
  @Inject('KahoFactory')
  private readonly kahoFactory: Record<string, any>;

  @Get()
  getHello(): string {
    console.log(this.kahoFactory);
    return this.kaho.getKaho() + ', ' + this.appService.getHello();
  }
}
