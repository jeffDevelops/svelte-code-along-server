"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var connection = typeorm_1.createConnection({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "svelteFacts",
    entities: [__dirname + "/../entity/*.ts"]
});
exports.connection = connection;
