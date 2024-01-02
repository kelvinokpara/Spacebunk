import mongoose from "mongoose";
import { envConfig } from "./config.js";

export const dbConnect = () => {
  const connection = mongoose.connect(envConfig.mongodb.db_url);
  return connection;
};
