import { AppError } from "../../../../shared/errors/AppError";
import { Client } from "@prisma/client";
import { hash } from "bcrypt";
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateClientUseCase {

  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository,
  ) {}

  async execute({ username, password }: ICreateClientDTO): Promise<Client> {
    const clientAlreadyExists = await this.clientsRepository.findByUserName(username);

    if (clientAlreadyExists) {
      throw new AppError("Client already exists.");
    }

    const passwordHash = await hash(password, 8);
    const client = await this.clientsRepository.create({ username, password: passwordHash });
    return client;
  }
}