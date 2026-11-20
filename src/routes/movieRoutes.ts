import { Router } from "express";
import mongoose from "mongoose";
import Movie from "../models/Movie";

const router = Router();

router.post("/", async (req, res) => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Request body must be a JSON object",
    });
  }

  const { title, description, genre, releaseYear, director, posterUrl, rating } =
    req.body;

  try {
    const movie = await Movie.create({
      title,
      description,
      genre,
      releaseYear,
      director,
      posterUrl,
      rating,
    });

    return res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: movie,
    });
  } 
  catch (error) {
    if (
      error instanceof mongoose.Error.ValidationError ||
      error instanceof mongoose.Error.CastError
    ) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    console.error("Failed to create movie:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create movie",
    });
  }
});

export default router;
