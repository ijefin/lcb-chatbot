import express from "express";
import appDataSource from "./dataSource";
import routes from "../../routes";

appDataSource
  .initialize()
  .then(() => {
    const app = express();

    app.use(express.json());

    app.use(routes);

    app.get("/", (req, res) => {
      res.json({
        status: "🟢 Online",
        app: "Chatbot API",
        version: "1.0.0",
        timestamp: new Date().toISOString(),
      });
    });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`🚀 Servidor iniciado em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao inicializar, verifique seu data-source.", err);
  });
