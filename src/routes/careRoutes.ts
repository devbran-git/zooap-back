import { Router } from "express";
import { careController } from "../controllers/careController";
import { validate } from "../validators/validate";
import { createCareSchema, updateCareSchema, idParamCareSchema } from "../validators/careSchema";

const router = Router();

router.post("/", validate(createCareSchema), careController.create);
router.get("/", careController.listAll);
router.get("/:id", validate(idParamCareSchema), careController.getById);
router.put("/:id", validate(updateCareSchema), careController.update);
router.delete("/:id", validate(idParamCareSchema), careController.remove);

export default router;
