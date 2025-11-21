import { z } from "zod";

export const associationSchema = z.object({
  params: z.object({
    animalId: z.string().regex(/^\d+$/, "animalId deve ser numérico"),
    careId: z.string().regex(/^\d+$/, "careId deve ser numérico"),
  }),
});

export const listCaresOfAnimalSchema = z.object({
  params: z.object({
    animalId: z.string().regex(/^\d+$/, "animalId deve ser numérico"),
  }),
});

export const listAnimalsOfCareSchema = z.object({
  params: z.object({
    careId: z.string().regex(/^\d+$/, "careId deve ser numérico"),
  }),
});
