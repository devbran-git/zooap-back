import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const animalCareController = {
  async associate(req: Request, res: Response) {
    try {
      const animalId = Number(req.params.animalId);
      const careId = Number(req.params.careId);

      const animal = await prisma.animal.findUnique({ where: { id: animalId } });
      if (!animal) return res.status(404).json({ error: "Animal não encontrado" });

      const care = await prisma.care.findUnique({ where: { id: careId } });
      if (!care) return res.status(404).json({ error: "Cuidado não encontrado" });

      const exists = await prisma.animalCare.findUnique({
        where: { animalId_careId: { animalId, careId } },
      });

      if (exists) return res.status(400).json({ error: "Este cuidado já está associado a este animal" });

      const relation = await prisma.animalCare.create({
        data: { animalId, careId },
      });

      return res.status(201).json({
        message: "Cuidado associado ao animal com sucesso",
        relation,
      });
    } catch (error) {
      console.error("ERRO AO ASSOCIAR CUIDADO:", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  },

  async dissociate(req: Request, res: Response) {
    try {
      const animalId = Number(req.params.animalId);
      const careId = Number(req.params.careId);

      const exists = await prisma.animalCare.findUnique({
        where: { animalId_careId: { animalId, careId } },
      });

      if (!exists) return res.status(404).json({ error: "Associação entre animal e cuidado não encontrada" });

      await prisma.animalCare.delete({
        where: { animalId_careId: { animalId, careId } },
      });

      return res.json({
        message: "Cuidado removido do animal com sucesso",
      });
    } catch (error) {
      console.error("ERRO AO REMOVER ASSOCIAÇÃO:", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  },

  async listCaresOfAnimal(req: Request, res: Response) {
    try {
      const animalId = Number(req.params.animalId);

      const animal = await prisma.animal.findUnique({
        where: { id: animalId },
        include: { cares: { include: { care: true } } },
      });

      if (!animal) return res.status(404).json({ error: "Animal não encontrado" });

      return res.json({
        animal: animal.name,
        cares: animal.cares.map((rel) => rel.care),
      });
    } catch (error) {
      console.error("ERRO AO LISTAR CUIDADOS DO ANIMAL:", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  },

  async listAnimalsOfCare(req: Request, res: Response) {
    try {
      const careId = Number(req.params.careId);

      const care = await prisma.care.findUnique({
        where: { id: careId },
        include: { animals: { include: { animal: true } } },
      });

      if (!care) return res.status(404).json({ error: "Cuidado não encontrado" });

      return res.json({
        care: care.name,
        animals: care.animals.map((rel) => rel.animal),
      });
    } catch (error) {
      console.error("ERRO AO LISTAR ANIMAIS DO CUIDADO:", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  },
};
