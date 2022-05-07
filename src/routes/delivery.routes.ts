import { Router } from "express";
import { CreateDeliveryController } from "../modules/delivery/useCases/createDelivery/CreateDeliveryController";
import { authClient } from "../shared/middlewares/authClient";
import { authDeliveryman } from "../shared/middlewares/authDeliveryman";
import { FindAllAvailableController } from "../modules/delivery/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliveryWithDeliverymanController } from "../modules/delivery/useCases/updateDeliveryWithDeliveryman/UpdateDeliveryWithDeliverymanController";

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliveryWithDeliverymanController = new UpdateDeliveryWithDeliverymanController();

deliveryRoutes.post("/", authClient, createDeliveryController.handle);
deliveryRoutes.get("/available", authDeliveryman, findAllAvailableController.handle);
deliveryRoutes.put("/updateDeliveryman/:id_delivery", authDeliveryman, updateDeliveryWithDeliverymanController.handle);

export { deliveryRoutes };