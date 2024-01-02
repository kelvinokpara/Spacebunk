import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import httpStatus from "http-status";
import colors from "colors";
import { dbConnect } from "./config/dbConfig.js";

dotenv.config();

const app = express();

app.use(express);
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    status: "success",
    payload: "Welcome to spacebunk servers...",
  });
});

// req handler to handle deviant links
app.all("*", (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: "success",
    payload: "ERROR: Endpoint or payload undefined",
  });
});

const port = process.env.NODE_ENV === "production" ? process.env.PORT : 9000;

dbConnect()
  .then((res) => {
    console.log(`db connection successful`.bgCyan);
    app.listen(port, (err) => {
      if (err) {
        console.log(`err: ${err}`.bgRed);
        return;
      }
      console.log(
        `Server running on port ${port} in ${process.env.NODE_ENV} mode`.bgGreen
      );
    });
  })
  .catch((err) => {
    console.log(`db connection error: ${err.message}`.bgYellow);
  });
