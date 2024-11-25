import 'dotenv/config';
import 'reflect-metadata'

import { DataSource } from "typeorm";

import { Driver } from "../src/entities/drivers";
import { Ride } from "../src/entities/rides";

const port = process.env.BB_PORT as number | undefined; 

export const AppDataSource = new DataSource({
  type: "mysql", 
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [Driver, Ride],
  migrations: ["src/migration/*.ts"],
  //entities: [`${__dirname}/**/entities/*.{td,js}`],
  //migrations: [`${__dirname}/**/migrations/*.{td,js}`],
  subscribers: ["src/subscriber/**/*.ts"],
});

AppDataSource.initialize();