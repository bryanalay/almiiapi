import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const uri ={
    connectionString: process.env.PG_URI,
    ssl: {
        rejectUnauthorized: false
    }
    
}

const secretPhrase = process.env.SECRET_PG

const pool = new pg.Pool(uri);    

export { pool, secretPhrase };
