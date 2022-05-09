import { PrismaClient } from "@prisma/client";
import { container } from "tsyringe";
import { IClientsRepository } from "../../modules/clients/repositories/IClientsRepository";
import { ClientsRepository } from "../../modules/clients/repositories/prisma/ClientsRepository";

container.register<PrismaClient>("PrismaClient", {
  useValue: new PrismaClient(),
});

container.registerSingleton<IClientsRepository>(
    "ClientsRepository",
    ClientsRepository
)