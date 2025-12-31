import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";

import { DatabaseModule } from "../database/database.module";
import { PriceHistoryService } from "./price-history.service";

describe("PriceHistoryService", () => {
  let service: PriceHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceHistoryService],
      imports: [DatabaseModule],
    }).compile();

    service = module.get<PriceHistoryService>(PriceHistoryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
