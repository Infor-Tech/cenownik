import {
  IsCurrency,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from "class-validator";

import { PartialType } from "@nestjs/mapped-types";

import { CreateOfferDto } from "./create-offer.dto";

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
  @IsOptional()
  @IsString()
  @Length(3, 255)
  name?: string;
  @IsOptional()
  @IsUrl()
  link?: string;
  @IsOptional()
  @IsCurrency()
  priceThreshold?: number;
}
