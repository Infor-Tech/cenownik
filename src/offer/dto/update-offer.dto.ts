import { PartialType } from "@nestjs/mapped-types";

import { CreateOfferDto } from "./create-offer.dto";

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
  name?: string;
  link?: string;
  priceThreshold?: number;
}
