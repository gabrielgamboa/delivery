import { AppError } from "../../../../shared/errors/AppError";
import { Client } from "@prisma/client";
import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";


export class CreateClientUseCase {
  async execute({ username, password }: ICreateClientDTO): Promise<Client> {
    const clientAlreadyExists = await prisma.client.findUnique({
      where: {
        username
      }
   });

    if (clientAlreadyExists) {
      throw new AppError("Client already exists.");
    }

    const passwordHash = await hash(password, 8);

    const client = await prisma.client.create({
      data: {
        username,
        password: passwordHash,
      }
    });

    return client;
  }
}