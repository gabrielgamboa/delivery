import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface IRequest {
    username: string;
    password: string;
}

export class CreateClientUseCase {
    async execute({username, password}: IRequest): Promise<any> {
        const clientAlreadyExists = await prisma.clients.findUnique({
            where: {
                username
            }
        });

        if (clientAlreadyExists) {
            throw new Error("Client already exists.");
        }

        const passwordHash = await hash(password, 8);

        const client = await prisma.clients.create({
            data: {
                username,
                password: passwordHash,
            }
        });

        return client;
    }
}