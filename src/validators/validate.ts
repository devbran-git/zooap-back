import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export function validate(schema: ZodObject<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      return res.status(400).json({
        error: "Dados inválidos",
        issues: result.error.issues,
      });
    }

    (req as any).validated = result.data;

    next();
  };
}
