import mongoose from "mongoose";
import { ENV } from "./env.js";
export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.DB_URL);
    console.log("Connected to DB !!!");
  } catch (error) {
    console.error("Error connecting to DB!!! ", error);
    process.exit(1); //0-> means success 1->means failure
  }
};
