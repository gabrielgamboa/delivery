import { Request, Response } from "express";
import { UpdateDeliveryWithDeliverymanUseCase } from "./UpdateDeliveryWithDeliverymanUseCase";

export class UpdateDeliveryWithDeliverymanController {
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { id_deliveryman } = req;
        const { id_delivery } = req.params;
        console.log({ id_delivery, id_deliveryman})
        const updateDeliveryWithDeliverymanUseCase = new UpdateDeliveryWithDeliverymanUseCase();
        const deliveryUpdated = await updateDeliveryWithDeliverymanUseCase.execute({ id_deliveryman, id_delivery });
        return res.status(204).json(deliveryUpdated);
    }
}