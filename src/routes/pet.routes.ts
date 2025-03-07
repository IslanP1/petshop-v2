import { Router } from "express";
import { listPetsController, createPetController, updatePetController, updateStatus } from "../controllers/pet.controller";
import { checkExistsUserAccount } from "../middlewares/checkExistsUserAccount";

const router = Router();

router.post("/", checkExistsUserAccount, createPetController);
router.get("/", checkExistsUserAccount, listPetsController);
router.put("/:id", checkExistsUserAccount, updatePetController);
router.patch("/:id", checkExistsUserAccount, updateStatus);


export default router;
