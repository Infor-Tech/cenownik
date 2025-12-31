import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";

import { DatabaseModule } from "./../../src/database/database.module";
import { OfferController } from "./offer.controller";
import { OfferService } from "./offer.service";

describe("OfferController", () => {
  let controller: OfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferController],
      providers: [OfferService],
      imports: [DatabaseModule],
    }).compile();

    controller = module.get<OfferController>(OfferController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
