import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { clientsRoutes } from "./clients.routes";
import { deliverymanRoutes } from "./deliveryman.routes";

const routes = Router();

routes.use("/clients", clientsRoutes);
routes.use("/deliveryman", deliverymanRoutes);
routes.use("/auth", authenticateRoutes);

export { routes };