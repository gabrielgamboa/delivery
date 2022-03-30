import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";

export class FindAllAvailableUseCase {
    async execute() {
        const deliveriesAvailable = await prisma.delivery.findMany({
            where: {
                end_at: null
            },
        });
        
        if (!deliveriesAvailable.length) {
            throw new AppError("There's no available deliveries.");
        }

        return deliveriesAvailable;
    }
}