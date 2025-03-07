import { Request, Response } from "express";
import { createPetShop } from "../services/petshop.service";

export const create = async (req: Request, res: Response) => {
    const { name, cnpj } = req.body;
    const petshop = await createPetShop(name, cnpj);
    res.status(201).json(petshop);
};
