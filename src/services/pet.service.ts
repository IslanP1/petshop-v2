import prisma from "../config/prisma";

export const createPet = async (petshopId: string, name: string, type: string, description: string, deadlineVacination: Date, vacinated: boolean) => {
    return await prisma.pet.create({
        data: {
            name,
            type,
            description,
            deadlineVacination,
            petshopId: petshopId,
            vacinated, 
        }
    });
};

