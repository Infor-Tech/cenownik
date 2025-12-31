import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreatePriceHistoryDto {
  @IsNumber()
  @IsNotEmpty()
  offerId: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;
}
