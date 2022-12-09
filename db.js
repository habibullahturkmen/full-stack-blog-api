import mysql from "mysql2";
import * as dotenv from "dotenv";

dotenv.config();

export const Database = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});
