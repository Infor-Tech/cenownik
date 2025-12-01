import type { Prisma } from "@prisma/client";

import {
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";

export function databaseErrorHandler(
  error: unknown,
  entityName: string,
  action: string,
) {
  if (error instanceof NotFoundException) {
    throw error;
  }
  const databaseError = error as Prisma.PrismaClientKnownRequestError;
  switch (databaseError.code) {
    case "P2025": {
      throw new NotFoundException(`${entityName} with a given id not found`);
    }
    case "P2002": {
      throw new ConflictException("Task with such id may already exist.");
    }
    default: {
      throw new InternalServerErrorException(
        `Failed to ${action} ${entityName}`,
      );
    }
  }
}
