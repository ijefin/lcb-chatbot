import "dotenv/config";
import { DataSource } from "typeorm";

const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306; //Converts the type if isset(dbport on .env)

const appDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/**/entities/*.{ts, js}`], //allows you to search all files regardless of their extension js or ts
  migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
});

export default appDataSource;
