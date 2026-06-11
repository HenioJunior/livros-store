import express from "express";

const app = express();

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis"
  },
  {
    id: 2,
    titulo: "O Hobbit"
  },
  {
    id: 3,
    titulo: "Silmarillion"
  },
  {
    id: 4,
    titulo: "As Crônicas de Nárnia"
  },
  {
    id: 5,
    titulo: "Harry Potter e a Pedra Filosofal"
  },
  {
    id: 6,
    titulo: "Harry Potter e a Câmara Secreta"
  }
];

app.get("/", (req, res) =>{
res.status(200).send("Curso de Express/MongoDB");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

export default app;