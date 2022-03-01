import { AppError } from "../../../../shared/errors/AppError";
import { Deliveryman } from "@prisma/client";
import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { ICreateDeliverymanDTO } from "../../dtos/ICreateDeliverymanDTO";


export class CreateDeliverymanUseCase {
    async execute({username, password}: ICreateDeliverymanDTO): Promise<Deliveryman> {
        const deliverymanAlreadyExists = await prisma.deliveryman.findUnique({
            where: {
                username
            }
        });

        if (deliverymanAlreadyExists) {
            throw new AppError("Deliveryman already exists.");
        }

        const passwordHash = await hash(password, 8);

        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: passwordHash,
            }
        });

        return deliveryman;
    }
}