
import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

const globalErrorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode =
    err instanceof AppError ? err.statusCode : 500;

  const status =
    err instanceof AppError ? err.status : "error";

  res.status(statusCode).json({
    success: false,
    status,
    message: err.message || "Internal Server Error",
  });
};

export default globalErrorHandler;
