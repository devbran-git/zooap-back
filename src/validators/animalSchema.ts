import { z } from "zod";

export const createAnimalSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Nome muito curto"),
    description: z.string().min(5),
    birthDate: z.string().datetime("Data inválida"),
    species: z.string().min(2),
    habitat: z.string().min(2),
    originCountry: z.string().min(2),
  }),
});

export const updateAnimalSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID deve ser numérico"),
  }),
  body: z.object({
    name: z.string().min(2).optional(),
    description: z.string().min(5).optional(),
    birthDate: z.iso.datetime().optional(),
    species: z.string().min(2).optional(),
    habitat: z.string().min(2).optional(),
    originCountry: z.string().min(2).optional(),
  }),
});

export const idParamAnimalSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID deve ser numérico"),
  }),
});
