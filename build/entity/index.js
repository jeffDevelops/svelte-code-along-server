"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
console.log(__dirname + "/../**/*.js");
var connection = typeorm_1.createConnection({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "svelteFacts",
    entities: [__dirname + "/../build/entity/*.js"]
});
exports.connection = connection;
