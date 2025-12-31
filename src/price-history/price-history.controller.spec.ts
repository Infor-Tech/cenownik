import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";

import { DatabaseModule } from "../database/database.module";
import { PriceHistoryController } from "./price-history.controller";
import { PriceHistoryService } from "./price-history.service";

describe("PriceHistoryController", () => {
  let controller: PriceHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceHistoryController],
      providers: [PriceHistoryService],
      imports: [DatabaseModule],
    }).compile();

    controller = module.get<PriceHistoryController>(PriceHistoryController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
