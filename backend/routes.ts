import { Router } from "express";
// import cors from "cors";

const routes = Router();

// var corsOptions = {
//   // origin: "http://localhost:5173",
//   origin: "*",
//   optionsSuccessStatus: 200,
// };

//allowing cors origin
// routes.use(cors(corsOptions));

// routes.get("/all-tasks", new TaskController().getAll);

export default routes;
