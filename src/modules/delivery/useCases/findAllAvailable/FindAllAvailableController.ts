import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController{
    async handle(req: Request, res: Response): Promise<Response> {
        const findAllAvailableUseCase = new FindAllAvailableUseCase();
        const deliveriesAvailable = await findAllAvailableUseCase.execute();
        return res.json(deliveriesAvailable);
    }
}