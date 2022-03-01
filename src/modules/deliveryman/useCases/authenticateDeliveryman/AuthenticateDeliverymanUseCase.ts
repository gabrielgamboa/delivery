import { compare } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { GenerateToken } from "../../../../providers/GenerateToken";
import { AppError } from "../../../../shared/errors/AppError";

interface IAuthenticateDeliveryman {
    username: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: IAuthenticateDeliveryman): Promise<string> {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username,
            },
        });

        if (!deliveryman) {
            throw new AppError("Username or password incorrect.");
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if (!passwordMatch) {
            throw new AppError("Username or password incorrect.");
        }

        const token = new GenerateToken().execute(deliveryman.id);

        return token;
    }
}