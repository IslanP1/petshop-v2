import { Router } from "express";
import { create } from "../controllers/petshop.controller";
import { checkExistsUserAccount } from "../middlewares/checkExistsUserAccount";

const router = Router();

router.post("/", checkExistsUserAccount, create);

export default router;
