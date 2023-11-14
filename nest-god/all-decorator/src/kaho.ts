import { Inject, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class Kaho {
  // constructor(private appService: AppService) {}
  @Inject(AppService)
  private readonly appService: AppService;

  getKaho() {
    return 'i am kaho';
  }
}
