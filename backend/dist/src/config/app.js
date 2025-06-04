"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataSource_1 = __importDefault(require("./dataSource"));
const routes_1 = __importDefault(require("../../routes"));
dataSource_1.default
    .initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(routes_1.default);
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
