import { Router } from "express";
import characterRouter from "./characters-routers";

const indexRoutes = Router();

indexRoutes.use(characterRouter);

export default indexRoutes;