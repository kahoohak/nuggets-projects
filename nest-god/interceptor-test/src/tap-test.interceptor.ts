import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class TapTestInterceptor implements NestInterceptor {
  @Inject(AppService)
  private appService: AppService;

  private readonly logger = new Logger(TapTestInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        // 模拟更新缓存
        this.appService.getHello();
        this.logger.log('log something', data);
      }),
    );
  }
}
