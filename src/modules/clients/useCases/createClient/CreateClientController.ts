import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;

        const createClientUseCase = new CreateClientUseCase();

        const createdClient = await createClientUseCase.execute({ username, password });

        return res.json(createdClient);
    }
}