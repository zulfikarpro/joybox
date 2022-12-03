import { Expose } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';
export class CreateOrderRequest {
  @IsString()
  worksId: string;
  @IsString()
  borrowTime: string;
  @IsNumber()
  lengthOfBorrowDays: number;
}
