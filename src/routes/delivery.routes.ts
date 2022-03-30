import { Router } from "express";
import { CreateDeliveryController } from "../modules/delivery/useCases/createDelivery/CreateDeliveryController";
import { auth } from "../shared/middlewares/auth";
import { FindAllAvailableController } from "../modules/delivery/useCases/findAllAvailable/FindAllAvailableController";

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();

deliveryRoutes.post("/", auth, createDeliveryController.handle);
deliveryRoutes.get("/available", findAllAvailableController.handle);

export { deliveryRoutes };