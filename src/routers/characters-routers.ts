import { Router } from "express";
import * as characterControllers from "../controllers/characters-controllers";
import validateSchema from "../middlewares/validation-middleware";
import creationSchema from "../schemas/createNewCharacter-schema";
import updateSchema from "../schemas/updateCharacter-schema";

const characterRouter = Router();

characterRouter.get("/characters", characterControllers.getCharacters);
characterRouter.get("/characters/:id", characterControllers.getCharacterById);
characterRouter.post("/characters", validateSchema(creationSchema), characterControllers.createNewCharacter);
characterRouter.put("/characters/:id", validateSchema(updateSchema), characterControllers.updateCharacterById);
characterRouter.delete("/characters/:id", characterControllers.deleteCharacterById);

export default characterRouter;
