import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("Server listening at http://localhost:5000");
});
