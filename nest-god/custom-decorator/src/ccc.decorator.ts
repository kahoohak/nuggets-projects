import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const Ccc = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log(data, ctx);
    return 'ccc';
  },
);
