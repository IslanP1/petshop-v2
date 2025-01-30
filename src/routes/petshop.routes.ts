import { Router } from "express";
import { create } from "../controllers/petshop.controller";
import { checkUsersEquals } from "../middlewares/checkUsersEquals";
import { validateCNPJ } from "../middlewares/validateCNPJ";

const router = Router();

router.post("/", checkUsersEquals, validateCNPJ, create);

export default router;
