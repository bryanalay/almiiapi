import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const uri = {
    user: process.env.USER_PG,
    host: process.env.HOST_PG,
    database: process.env.DATABASE_PG,
    password: process.env.PASSWORD_PG,
    port: parseInt(process.env.PORT_PG),
    ssl: {
        rejectUnauthorized: false,
    },
}
const secretPhrase = process.env.SECRET_PG

const pool = new pg.Pool(uri);

export { pool, secretPhrase };
