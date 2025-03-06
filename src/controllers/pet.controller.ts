import { Request, Response } from "express";
import { listPets, createPet, updatePet, updateStatusVacination } from "../services/pet.service";

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

export const update = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, type, description, deadlineVacination } = req.body;
    const petshopCnpj = req.headers.cnpj as string;
    const deadlineDate = new Date(deadlineVacination); // Converter string para Date
    const pet = await updatePet(id, name, type, description, deadlineDate, petshopCnpj);
    res.status(200).json(pet);
    return;
}

export const updateStatus = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { vacinated } = req.body;
    const petshopCnpj = req.headers.cnpj as string;
    const pet = await updateStatusVacination(id, vacinated, petshopCnpj);
    res.status(200).json(pet);
    return;
}