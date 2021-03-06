import { Delivery } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateDeliveryDTO } from "../../dtos/ICreateDeliveryDTO";

export class CreateDeliveryUseCase {
    async execute({item_name, id_client}: ICreateDeliveryDTO): Promise<Delivery> {
        if (!item_name || !id_client) {
            throw new AppError("Please, review the request");
        }

        const delivery = await prisma.delivery.create({
            data: {
                item_name,
                id_client
            },
        });

        return delivery
    }
}