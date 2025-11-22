import { z } from "zod";

export const createAnimalSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Nome muito curto"),
    description: z.string().min(5, "Descrição muito curta"),
    birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD"),
    species: z.string().min(2, "Espécie muito curta"),
    habitat: z.string().min(2, "Habitat muito curto"),
    originCountry: z.string().min(2, "País de origem muito curto"),
  }),
});

export const updateAnimalSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID deve ser numérico"),
  }),
  body: z.object({
    name: z.string().min(2).optional(),
    description: z.string().min(5).optional(),
    birthDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD")
      .optional(),
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

export const listAnimalsSchema = z.object({
  query: z.object({
    habitat: z.string().min(2).optional(),
    species: z.string().min(2).optional(),
    originCountry: z.string().min(2).optional(),
  }),
});
