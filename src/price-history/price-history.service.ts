import { Injectable, NotFoundException } from "@nestjs/common";

import { DatabaseService } from "../database/database.service";
import { databaseErrorHandler } from "../utils/database-error-handler.service";
import { CreatePriceHistoryDto } from "./dto/create-price-history.dto";

@Injectable()
export class PriceHistoryService {
  constructor(private database: DatabaseService) {}

  async create(createPriceHistoryDto: CreatePriceHistoryDto) {
    try {
      const priceHistory = await this.database.priceHistory.create({
        data: {
          offerId: createPriceHistoryDto.offerId,
          price: createPriceHistoryDto.price,
        },
      });
      return priceHistory;
    } catch (error) {
      databaseErrorHandler(error, "PriceHistory", "create");
    }
  }

  async findAll() {
    return this.database.priceHistory.findMany();
  }

  async findOne(id: number) {
    try {
      const priceHistory = await this.database.priceHistory.findUnique({
        where: { id },
      });
      if (priceHistory == null) {
        throw new NotFoundException(`PriceHistory with a given id not found`);
      }

      return priceHistory;
    } catch (error) {
      databaseErrorHandler(error, "PriceHistory", "findOne");
    }
  }
}
