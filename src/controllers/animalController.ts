import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const animalController = {
  async create(req: Request, res: Response) {
    try {
      const { name, description, birthDate, species, habitat, originCountry } = req.body;

      const animal = await prisma.animal.create({
        data: {
          name,
          description,
          birthDate: new Date(birthDate),
          species,
          habitat,
          originCountry,
        },
      });

      return res.status(201).json(animal);
    } catch (error) {
      console.error("ERRO AO CRIAR ANIMAL:", error);
      return res.status(500).json({ error: "Erro ao criar animal", details: error });
    }
  },

  async list(req: Request, res: Response) {
    try {
      const animals = await prisma.animal.findMany();
      return res.json(animals);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar animais" });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const animal = await prisma.animal.findUnique({
        where: { id: Number(id) },
      });

      if (!animal) return res.status(404).json({ error: "Animal não encontrado" });

      return res.json(animal);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar animal" });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, description, birthDate, species, habitat, originCountry } = req.body;

      const animal = await prisma.animal.update({
        where: { id: Number(id) },
        data: {
          name,
          description,
          birthDate: new Date(birthDate),
          species,
          habitat,
          originCountry,
        },
      });

      return res.json(animal);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar animal" });
    }
  },

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await prisma.animal.delete({
        where: { id: Number(id) },
      });

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao remover animal" });
    }
  },
};
