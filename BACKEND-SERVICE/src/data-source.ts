import "reflect-metadata";
import { DataSource } from "typeorm";
import { joyeria } from "./entities/joyeria";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [joyeria],
  migrations:[],
  subscribers:[]
});