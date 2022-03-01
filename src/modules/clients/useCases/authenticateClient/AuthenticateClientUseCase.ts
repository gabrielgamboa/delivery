import { compare } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { GenerateToken } from "../../../../providers/GenerateToken";
import { AppError } from "../../../../shared/errors/AppError";


interface IAuthenticateClient {
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient): Promise<string> {
        const client = await prisma.client.findFirst({
            where: {
                username,
            },
        });

        if (!client) {
            throw new AppError("Username or password incorrect.");
        }

        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) {
            throw new AppError("Username or password incorrect.");
        }

        const token = new GenerateToken().execute(client.id);

        return token;
    }
}