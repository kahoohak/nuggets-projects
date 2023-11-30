import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CccService } from './ccc.service';

@Injectable()
export class DddService {
  @Inject(forwardRef(() => CccService))
  private cccService: CccService;

  hello() {
    return 'hello ddd';
  }

  say() {
    return this.cccService.hello() + ', i am ddd';
  }
}
