import { Injectable } from "@nestjs/common";

import { DatabaseService } from "../database/database.service";
import { databaseErrorHandler } from "../utils/database-error-handler.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(private database: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.database.user.create({
        data: {
          email: createUserDto.email,
        },
      });
      return user;
    } catch (error: unknown) {
      databaseErrorHandler(error, "User", "create");
    }
  }

  async findAll() {
    return this.database.user.findMany();
  }

  async findOne(id: number) {
    try {
      const user = await this.database.user.findUnique({
        where: { id },
      });
      return user;
    } catch (error: unknown) {
      databaseErrorHandler(error, "User", "find");
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.database.user.update({
        where: { id },
        data: {
          email: updateUserDto.email,
        },
      });
      return user;
    } catch (error: unknown) {
      databaseErrorHandler(error, "User", "update");
    }
  }

  async remove(id: number) {
    try {
      return await this.database.user.delete({
        where: { id },
      });
    } catch (error: unknown) {
      databaseErrorHandler(error, "User", "delete");
    }
  }
}
