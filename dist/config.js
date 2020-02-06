"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.SERVER_PORT = parseInt(process.env.SERVER_PORT || "3000");
const connectionString = "postgresql://postgres:apsk846tu@localhost:5432/appeal";
exports.pool = new pg_1.Pool({
    connectionString: connectionString,
    ssl: false,
});
//# sourceMappingURL=config.js.map