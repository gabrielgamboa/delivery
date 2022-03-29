import { Router } from "express";
import { CreateDeliveryController } from "../modules/delivery/useCases/createDelivery/CreateDeliveryController";

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();

deliveryRoutes.post("/", createDeliveryController.handle);

export { deliveryRoutes };