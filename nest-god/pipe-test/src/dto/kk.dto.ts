import { IsInt } from 'class-validator';

export class Kk {
  name: string;
  @IsInt()
  age: number;
}
