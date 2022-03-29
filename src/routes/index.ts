import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { clientsRoutes } from "./clients.routes";
import { deliveryRoutes } from "./delivery.routes";
import { deliverymanRoutes } from "./deliveryman.routes";

const routes = Router();

routes.use("/clients", clientsRoutes);
routes.use("/deliveryman", deliverymanRoutes);
routes.use("/auth", authenticateRoutes);
routes.use("/delivery", deliveryRoutes);

export { routes };