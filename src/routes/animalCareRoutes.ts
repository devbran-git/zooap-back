import { Router } from "express";
import { animalCareController } from "../controllers/animalCareController";
import { validate } from "../validators/validate";
import { associationSchema, listAnimalsOfCareSchema, listCaresOfAnimalSchema } from "../validators/animalCareSchema";

const router = Router();

router.post("/:animalId/cares/:careId", validate(associationSchema), animalCareController.associate);
router.delete("/:animalId/cares/:careId", validate(associationSchema), animalCareController.dissociate);
router.get("/:animalId/cares", validate(listCaresOfAnimalSchema), animalCareController.listCaresOfAnimal);
router.get("/care/:careId/animals", validate(listAnimalsOfCareSchema), animalCareController.listAnimalsOfCare);

export default router;
