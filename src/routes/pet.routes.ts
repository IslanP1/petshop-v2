import { Router } from "express";
import { list, create } from "../controllers/pet.controller";
import { checkExistsUserAccount } from "../middlewares/checkExistsUserAccount";

const router = Router();

router.post("/", checkExistsUserAccount, create);
router.get("/", checkExistsUserAccount, list);

export default router;
