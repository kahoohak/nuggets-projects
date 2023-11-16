import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AaaException } from './AaaException';
import { Request, Response } from 'express';

@Catch(AaaException)
export class AaaFilter implements ExceptionFilter {
  catch(exception: AaaException, host: ArgumentsHost) {
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const resquest = ctx.getRequest<Request>();
      const response = ctx.getResponse<Response>();
      response.status(500).json({
        aaa: exception.aaa,
        bbb: exception.bbb,
      });
    } else if (host.getType() === 'ws') {
      console.log('ws');
    } else if (host.getType() === 'rpc') {
      console.log('rpc');
    }
  }
}
