import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const careController = {
  async create(req: Request, res: Response) {
    try {
      const { name, description, frequency } = req.body;

      const care = await prisma.care.create({
        data: { name, description, frequency },
      });

      return res.status(201).json(care);
    } catch (error) {
      console.error("ERRO AO CRIAR CUIDADO:", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  },

  async listAll(req: Request, res: Response) {
    try {
      const cares = await prisma.care.findMany();
      return res.json(cares);
    } catch (error) {
      console.error("ERRO AO LISTAR CUIDADOS:", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const care = await prisma.care.findUnique({
        where: { id },
      });

      if (!care) return res.status(404).json({ error: "Cuidado não encontrado" });

      return res.json(care);
    } catch (error) {
      console.error("ERRO AO BUSCAR CUIDADO:", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, description, frequency } = req.body;

      const careExists = await prisma.care.findUnique({ where: { id } });
      if (!careExists) return res.status(404).json({ error: "Cuidado não encontrado" });

      const updated = await prisma.care.update({
        where: { id },
        data: { name, description, frequency },
      });

      return res.json(updated);
    } catch (error) {
      console.error("ERRO AO ATUALIZAR CUIDADO:", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  },

  async remove(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const careExists = await prisma.care.findUnique({ where: { id } });
      if (!careExists) return res.status(404).json({ error: "Cuidado não encontrado" });

      await prisma.care.delete({
        where: { id },
      });

      return res.json({ message: "Cuidado deletado com sucesso" });
    } catch (error) {
      console.error("ERRO AO DELETAR CUIDADO:", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  },
};
