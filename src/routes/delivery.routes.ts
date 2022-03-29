import { Router } from "express";
import { CreateDeliveryController } from "../modules/delivery/useCases/createDelivery/CreateDeliveryController";
import { auth } from "../shared/middlewares/auth";

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();

deliveryRoutes.post("/", auth, createDeliveryController.handle);

export { deliveryRoutes };