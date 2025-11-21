import { Router } from "express";
import { animalController } from "../controllers/animalController";
import { validate } from "../validators/validate";
import { createAnimalSchema, idParamAnimalSchema, updateAnimalSchema } from "../validators/animalSchema";

const router = Router();

router.post("/", validate(createAnimalSchema), animalController.create);
router.get("/", animalController.list);
router.get("/:id", validate(idParamAnimalSchema), animalController.getById);
router.put("/:id", validate(updateAnimalSchema), animalController.update);
router.delete("/:id", validate(idParamAnimalSchema), animalController.remove);

export default router;
