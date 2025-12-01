import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { OfferModule } from "./offer/offer.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [DatabaseModule, OfferModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
