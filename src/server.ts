import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import animalRoutes from "./routes/animalRoutes";
import careRoutes from "./routes/careRoutes";
import animalCareRoutes from "./routes/animalCareRoutes";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use("/animals", animalRoutes);
app.use("/cares", careRoutes);
app.use("/animal-care", animalCareRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
