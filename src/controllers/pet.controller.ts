import { Request, Response } from "express";
import { listPets, createPet } from "../services/pet.service";

export const create = async (req: Request, res: Response) => {
    const { name, type, description, deadlineVacination, vacinated } = req.body;
    const petshopCnpj = req.headers.cnpj as string;
    const createdAt = new Date(); // Data atual
    const deadlineDate = new Date(deadlineVacination); // Converter string para Date
    const pet = await createPet(name, type, description, vacinated, deadlineDate, createdAt, petshopCnpj);
    res.status(201).json(pet);
    return;
};

export const list = async (req: Request, res: Response) => {
    const cnpj = req.headers.cnpj as string;
    const pets = await listPets(cnpj);
    res.status(200).json(pets);
    return;
}
