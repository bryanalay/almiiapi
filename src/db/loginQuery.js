import { query } from "../config/db.js";

const loginQuery = {
  login: async (username) => {
    const qre = `select * from login('${username}');`;
    const result = await query(qre);
    return result[1].rows;
  },
};

export { loginQuery };