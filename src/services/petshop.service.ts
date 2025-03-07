import prisma from "../config/prisma";

export const createPetShop = async (name: string, cnpj: string) => {
    return await prisma.petShop.create({
        data: {
            name,
            cnpj,
            pets: {
                create: [],
            },
        }
    });
};