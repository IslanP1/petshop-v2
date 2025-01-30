import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";

export async function checkExistsUserAccount(req: Request, res: Response, next: NextFunction) {
    const cnpj = req.headers.cnpj as string;
    const petshop = await prisma.petShop.findUnique({
        where: { cnpj },
        include: { pets: true }
    });

    if (!petshop) {
        return res.status(404).json({ error: "PetShop não encontrado" });
    }

    req.petshop = petshop;
    next();
}
