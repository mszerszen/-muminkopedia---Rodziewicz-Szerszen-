import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import characterRoutes from "./routes/characterRoutes";
import artifactRoutes from "./routes/artifactRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/characters", characterRoutes)
app.use("/artifacts", artifactRoutes)

app.get("/", (req, res) => {
    res.json({ message: "API Express + TypeScript działa!" });
});

export default app;