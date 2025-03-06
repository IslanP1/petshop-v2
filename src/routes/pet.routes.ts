import { Router } from "express";
import { list, create, update } from "../controllers/pet.controller";
import { checkExistsUserAccount } from "../middlewares/checkExistsUserAccount";

const router = Router();

router.post("/", checkExistsUserAccount, create);
router.get("/", checkExistsUserAccount, list);
router.put("/:id", checkExistsUserAccount, update);


export default router;
