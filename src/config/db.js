import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const uri = {
  connectionString: process.env.PG_URI,
  ssl: {
    rejectUnauthorized: false,
  },
};

const secretPhrase = process.env.SECRET_PG;

const pool = new pg.Pool(uri);

const query = (query) => {
  const qry = "SET search_path to almimaindb;";
  return pool.query(qry + query);
};

//temrinar mas tarde
const SP ={
  userdb: {
    getUsers: 'geUsers()'
  }
}


export { query, secretPhrase };
