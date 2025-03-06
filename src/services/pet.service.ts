import prisma from "../config/prisma";

export const createPet = async (
    name: string,
    type: string,
    description: string,
    vacinated: boolean,
    deadlineVacination: Date,
    createdAt: Date,
    petshopCnpj: string
) => {
    return await prisma.pet.create({
        data: {
            name,
            type,
            description,
            vacinated,
            createdAt,
            deadlineVacination: new Date(deadlineVacination), // Garante que é um Date válido
            petshop: {
                connect: { cnpj: petshopCnpj }
            }
        }
    });
};



export const listPets = async (petshopCnpj: string) => {
    return await prisma.pet.findMany({
        where: { petshop: { cnpj: petshopCnpj } }
    })
}

export const updatePet = async (
    id: string,
    name: string,
    type: string,
    description: string,
    deadlineVacination: Date,
    petshopCnpj: string
) => {
    return await prisma.pet.update({
        where: { id },
        data: {
            name,
            type,
            description,
            deadlineVacination: new Date(deadlineVacination),
            petshop: {
                connect: { cnpj: petshopCnpj }
            }
        }
    });
}

export const updateStatusVacination = async (
    id: string,
    vacinated: boolean, 
    petshopCnpj: string
) => {
    return await prisma.pet.update({
        where: { id },
        data: {
            vacinated, 
            petshop: {
                connect: { cnpj: petshopCnpj }
            }
        }
    });
}