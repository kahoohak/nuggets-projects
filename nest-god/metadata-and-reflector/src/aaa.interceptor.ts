import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AaaInterceptor implements NestInterceptor {
  @Inject(Reflector)
  private reflector: Reflector;

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(
      'interceptor1',
      this.reflector.get('roles', context.getHandler()),
    );
    console.log(
      'interceptor2',
      this.reflector.get('roles', context.getClass()),
    );
    return next.handle();
  }
}
