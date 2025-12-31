import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";

import { DatabaseModule } from "./../../src/database/database.module";
import { OfferService } from "./offer.service";

describe("OfferService", () => {
  let service: OfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferService],
      imports: [DatabaseModule],
    }).compile();

    service = module.get<OfferService>(OfferService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
