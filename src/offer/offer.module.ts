import { DatabaseModule } from "src/database/database.module";

import { Module } from "@nestjs/common";

import { OfferController } from "./offer.controller";
import { OfferService } from "./offer.service";

@Module({
  controllers: [OfferController],
  providers: [OfferService],
  imports: [DatabaseModule],
})
export class OfferModule {}
