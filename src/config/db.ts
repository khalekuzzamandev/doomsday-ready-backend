import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoUrl = process.env.MONGODB_URL;

  if (!mongoUrl) {
    throw new Error("MONGODB_URL is not configured");
  }

  await mongoose.connect(mongoUrl);
  console.log("MongoDB connected successfully");
};

export default connectDB;
