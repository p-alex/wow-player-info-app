import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { ZodError } from "zod";

const validateResource = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.message);
        return res
          .status(400)
          .json({ success: false, errors: error.flatten(), data: null });
      }
    }
  };
};

export default validateResource;
