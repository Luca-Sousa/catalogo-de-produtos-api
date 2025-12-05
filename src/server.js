const express = require("express");
const { testConnection } = require("./config/db");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "API de Catálogo de Produtos",
    version: "1.0.0",
    endpoints: {
      produtos: "/api/produtos",
      categorias: "/api/produtos/categorias",
    },
  });
});

app.use("/api/produtos", produtoRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Rota não encontrada",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Erro interno do servidor",
    error: err.message,
  });
});

const startServer = async () => {
  try {
    await testConnection();

    app.listen(PORT, () => {
      console.log(`\nServidor rodando na porta ${PORT}`);
      console.log(`Acesse: http://localhost:${PORT}`);
      console.log(`API Produtos: http://localhost:${PORT}/api/produtos\n`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
