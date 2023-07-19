import bc from "bcrypt";
import { query } from "../config/db.js";

const saltQuery = {
  getSaltDB: async () => {
    const result = await query(`SELECT * FROM salt;`);
    return result[1].rows[0].salto;
  },

  insertSalt: async () => {
    const salt = await bc.genSalt(5);
    const qre = `INSERT INTO salt(salto) values('${salt}');`;
    const result = query(qre);
    return result[1];
  },
};

export default saltQuery;
