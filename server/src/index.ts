import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";

const app = express();
app.use(
  cors({
    origin: [process.env.CLIENT_URL!],
    credentials: true,
  })
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server listening at http://localhost:" + PORT);
});
