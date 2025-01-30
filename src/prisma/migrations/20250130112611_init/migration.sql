-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vacinated" BOOLEAN NOT NULL,
    "deadlineVacination" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "petshopId" TEXT NOT NULL,
    CONSTRAINT "Pet_petshopId_fkey" FOREIGN KEY ("petshopId") REFERENCES "PetShop" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PetShop" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PetShop_cnpj_key" ON "PetShop"("cnpj");
