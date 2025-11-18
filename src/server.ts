import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Rodando!");
});

const port = 3000;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
