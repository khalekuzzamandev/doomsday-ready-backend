import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Movie title is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    genre: {
      type: String,
      trim: true,
    },
    releaseYear: {
      type: Number,
      min: 1888,
    },
    director: {
      type: String,
      trim: true,
    },
    posterUrl: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
    },
  },
  { timestamps: true },
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
