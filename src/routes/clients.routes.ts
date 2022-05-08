import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "../modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController";
import { authClient } from "../shared/middlewares/authClient";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("/deliveries", authClient, findAllDeliveriesController.handle);


export { clientsRoutes }