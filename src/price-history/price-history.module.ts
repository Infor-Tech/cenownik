import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { PriceHistoryController } from "./price-history.controller";
import { PriceHistoryService } from "./price-history.service";

@Module({
  imports: [DatabaseModule],
  controllers: [PriceHistoryController],
  providers: [PriceHistoryService],
})
export class PriceHistoryModule {}
