import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";
import globalErrorHandler from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Doomsday Ready Backend Server is Running!",
  });
});
// Global Error Handler - Always Last
app.use(globalErrorHandler);
export default app;