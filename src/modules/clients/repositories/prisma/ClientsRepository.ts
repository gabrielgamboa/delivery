import { Client } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../IClientsRepository";

export class ClientsRepository implements IClientsRepository {
    async create({ username, password }: ICreateClientDTO): Promise<Client> {
        const client = await prisma.client.create({
            data: {
                username,
                password,
            }
        });

        return client;
    }

    async findByUserName(username: string): Promise<Client | null> {
        const client = await prisma.client.findUnique({
            where: {
                username
            }
        });

        return client;
    }

}