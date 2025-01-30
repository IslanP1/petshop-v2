import { PetShop } from "@prisma/client"; // Importa o modelo do Prisma

declare module "express-serve-static-core" {
  interface Request {
    petshop?: PetShop;
  }
}
