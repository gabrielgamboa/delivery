import { Delivery } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";
import { IUpdateDeliveryWithDeliverymanDTO } from "../../dtos/IUpdateDeliveryWithDeliverymanDTO";

export class UpdateDeliveryWithDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryWithDeliverymanDTO): Promise<Delivery> {
    const updatedDelivery = await prisma.delivery.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman
      }
    });

    return updatedDelivery;
  }
}