import { z } from "zod";

export const createCareSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    description: z.string().min(5),
    frequency: z.enum(["diária", "semanal", "mensal", "anual"]),
  }),
});

export const updateCareSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID inválido"),
  }),
  body: z.object({
    name: z.string().min(2).optional(),
    description: z.string().min(5).optional(),
    frequency: z.enum(["diária", "semanal", "mensal", "anual"]).optional(),
  }),
});

export const idParamCareSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID inválido"),
  }),
});
