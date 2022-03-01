import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { clientsRoutes } from "./clients.routes";

const routes = Router();

routes.use("/clients", clientsRoutes);
routes.use("/auth", authenticateRoutes);

export { routes };