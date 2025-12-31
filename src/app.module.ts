import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { OfferModule } from "./offer/offer.module";
import { PriceHistoryModule } from "./price-history/price-history.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [DatabaseModule, OfferModule, UserModule, PriceHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
