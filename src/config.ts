import {Pool} from "pg";

export const SERVER_PORT = parseInt(process.env.SERVER_PORT || "3000");

const connectionString = "postgresql://postgres:apsk846tu@localhost:5432/appeal";

export const pool = new Pool({
    connectionString: connectionString,
    ssl: false,
});
