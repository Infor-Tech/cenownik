import { Controller, Get, Param } from "@nestjs/common";

import { PriceHistoryService } from "./price-history.service";

@Controller("price-history")
export class PriceHistoryController {
  constructor(private readonly priceHistoryService: PriceHistoryService) {}

  @Get()
  async findAll() {
    return this.priceHistoryService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.priceHistoryService.findOne(+id);
  }
}
