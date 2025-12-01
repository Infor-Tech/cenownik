import { databaseErrorHandler } from "src/utils/database-error-handler.service";

import { Injectable } from "@nestjs/common";

import { DatabaseService } from "../database/database.service";
import { CreateOfferDto } from "./dto/create-offer.dto";
import { UpdateOfferDto } from "./dto/update-offer.dto";

@Injectable()
export class OfferService {
  constructor(private database: DatabaseService) {}

  async create(createOfferDto: CreateOfferDto) {
    try {
      const offer = await this.database.offer.create({
        data: createOfferDto,
      });
      return offer;
    } catch (error: unknown) {
      databaseErrorHandler(error, "Offer", "create");
    }
  }

  async findAll() {
    return await this.database.offer.findMany();
  }

  async findOne(id: number) {
    try {
      const offer = await this.database.offer.findUnique({
        where: { id },
      });
      return offer;
    } catch (error: unknown) {
      databaseErrorHandler(error, "Offer", "find");
    }
  }

  async update(id: number, updateOfferDto: UpdateOfferDto) {
    try {
      const offer = await this.database.offer.update({
        where: { id },
        data: updateOfferDto,
      });
      return offer;
    } catch (error: unknown) {
      databaseErrorHandler(error, "Offer", "update");
    }
  }

  async remove(id: number) {
    try {
      return await this.database.offer.delete({
        where: { id },
      });
    } catch (error: unknown) {
      databaseErrorHandler(error, "Offer", "delete");
    }
  }
}
