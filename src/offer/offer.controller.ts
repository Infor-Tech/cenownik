import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { CreateOfferDto } from "./dto/create-offer.dto";
import { UpdateOfferDto } from "./dto/update-offer.dto";
import { OfferService } from "./offer.service";

@Controller("offer")
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post()
  async create(@Body() createOfferDto: CreateOfferDto) {
    return this.offerService.create(createOfferDto);
  }

  @Get()
  async findAll() {
    return this.offerService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.offerService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateOfferDto: UpdateOfferDto,
  ) {
    return this.offerService.update(+id, updateOfferDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.offerService.remove(+id);
  }
}
