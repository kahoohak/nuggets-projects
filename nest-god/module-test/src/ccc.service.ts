import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { DddService } from './ddd.service';

@Injectable()
export class CccService {
  @Inject(forwardRef(() => DddService))
  private dddService: DddService;

  hello() {
    return 'hello ccc';
  }

  say() {
    return this.dddService.hello() + ', i am ccc';
  }
}
