import { Client } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";

export class FindAllDeliveriesUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.client.findMany({
      where: {
        id: id_client,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    if (!deliveries.length) throw new AppError("Deliveries not found.", 404);

    return deliveries;
  }
}