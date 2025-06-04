"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import cors from "cors";
const routes = (0, express_1.Router)();
// var corsOptions = {
//   // origin: "http://localhost:5173",
//   origin: "*",
//   optionsSuccessStatus: 200,
// };
//allowing cors origin
// routes.use(cors(corsOptions));
// routes.get("/all-tasks", new TaskController().getAll);
exports.default = routes;
