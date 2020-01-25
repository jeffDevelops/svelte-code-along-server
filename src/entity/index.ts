import { createConnection, Connection } from "typeorm";

const connection: Promise<Connection> = createConnection({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "svelteFacts",
  entities: [__dirname + "/../entity/*.ts"]
});

export { connection };
