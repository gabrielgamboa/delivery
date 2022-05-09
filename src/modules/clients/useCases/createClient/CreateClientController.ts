import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;

        const createClientUseCase = container.resolve(CreateClientUseCase);

        const createdClient = await createClientUseCase.execute({ username, password });

        return res.json(createdClient);
    }
}