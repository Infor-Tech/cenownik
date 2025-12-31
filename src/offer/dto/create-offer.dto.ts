import {
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  Length,
} from "class-validator";

export class CreateOfferDto {
  @IsString()
  @Length(3, 255)
  name: string;
  @IsUrl()
  link: string;
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  priceThreshold: number;
  @IsNumber()
  @IsPositive()
  @IsInt()
  userId: number;
}
