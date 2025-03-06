import { Router } from "express";
import { list, create, update, updateStatus } from "../controllers/pet.controller";
import { checkExistsUserAccount } from "../middlewares/checkExistsUserAccount";

const router = Router();

router.post("/", checkExistsUserAccount, create);
router.get("/", checkExistsUserAccount, list);
router.put("/:id", checkExistsUserAccount, update);
router.patch("/:id", checkExistsUserAccount, updateStatus);


export default router;
