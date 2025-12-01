import {
  IsCurrency,
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
  @IsCurrency()
  priceThreshold: number;
  @IsNumber()
  @IsPositive()
  @IsInt()
  userId: number;
}
