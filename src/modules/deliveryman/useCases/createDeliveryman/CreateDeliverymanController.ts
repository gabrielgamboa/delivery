import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

export class CreateDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;
        
        const createDeliverymanUseCase = new CreateDeliverymanUseCase();
        const createdDeliveryman = await createDeliverymanUseCase.execute({ username, password });
        return res.json(createdDeliveryman);
    }
}