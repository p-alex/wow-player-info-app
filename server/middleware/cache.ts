import { NextFunction, Request, Response } from 'express';

const cache = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ success: false, errors: [], data: null });
  }
};
