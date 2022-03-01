import { Router } from "express";
import { AuthenticateClientController } from "../modules/clients/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "../modules/deliveryman/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";

const authenticateRoutes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

authenticateRoutes.post("/client", authenticateClientController.handle);
authenticateRoutes.post("/deliveryman", authenticateDeliverymanController.handle);

export { authenticateRoutes }