import { Delivery } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";


interface ICreateDeliveryDTO {
    item_name: string;
    id_client: string;
}
export class CreateDeliveryUseCase {
    async execute({item_name, id_client}: ICreateDeliveryDTO): Promise<Delivery> {
        const delivery = await prisma.delivery.create({
            data: {
                item_name,
                id_client
            },
        });

        return delivery
    }
}