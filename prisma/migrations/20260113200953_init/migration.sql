-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "species" TEXT NOT NULL,
    "habitat" TEXT NOT NULL,
    "originCountry" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Care" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,

    CONSTRAINT "Care_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimalCare" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER NOT NULL,
    "careId" INTEGER NOT NULL,

    CONSTRAINT "AnimalCare_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AnimalCare_animalId_careId_key" ON "AnimalCare"("animalId", "careId");

-- AddForeignKey
ALTER TABLE "AnimalCare" ADD CONSTRAINT "AnimalCare_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalCare" ADD CONSTRAINT "AnimalCare_careId_fkey" FOREIGN KEY ("careId") REFERENCES "Care"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
