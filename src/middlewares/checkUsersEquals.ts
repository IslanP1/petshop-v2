import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";

export async function checkUsersEquals(req: Request, res: Response, next: NextFunction) {
    const { cnpj } = req.body;
    const petshop = await prisma.petShop.findUnique({ where: { cnpj } });

    if (petshop) {
        res.status(400).json({ message: "Já existe esse PetShop!" });
        return;
    }

    next();
    return;
}
