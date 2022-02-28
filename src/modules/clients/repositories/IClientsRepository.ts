import { Client } from "@prisma/client";
import { ICreateClientDTO } from "../dtos/ICreateClientDTO";

export interface IClientsRepository {
    create({username, password}: ICreateClientDTO): Promise<Client>;
    findByUserName(username: string): Promise<Client | null>; 
}