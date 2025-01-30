import { Request, Response, NextFunction } from "express";

export function validateCNPJ(req: Request, res: Response, next: NextFunction) {
    const cnpj = req.body.cnpj;
    const regex = /^\d{2}\.\d{3}\.\d{3}\/0001-\d{2}$/;

    if (!regex.test(cnpj)) {
        return res.status(400).json({ error: "CNPJ inválido!" });
    }

    next();
}
