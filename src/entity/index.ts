import { createConnection, Connection } from "typeorm";
import { config as dotenv } from "dotenv";

console.log(process.env.SVELTEFACTS_CONNECTION_STRING!);

const connection: Promise<Connection> = createConnection({
  type: "mongodb",
  url: process.env.SVELTEFACTS_CONNECTION_STRING!,
  port: 27017,
  database: "svelteFacts",
  entities: [__dirname + "/../entity/*.ts"],
  useNewUrlParser: true
});

export { connection };
