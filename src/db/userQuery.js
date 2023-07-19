import { query } from "../config/db.js";

const userQuery = {
  getUsers: async () => {
    const qre = "SELECT * FROM userDB";
    const result = await query(qre);
    return result[1].rows;
  },

  getUserById: async (id) => {
    const qre = `SELECT * FROM userDB where id = '${id}'`;
    const result = await query(qre);
    return result[1].rows;
  },

  getUserByUsername: async (username) => {
    const qre = `SELECT * FROM userDB where username = '${username}';`;
    const result = await query(qre);
    return result[1].rows;
  },

  insertUser: async (user) => {
    const { id, username, passwordHashed } = user;
    const qre = `insert into userdb (id, username, password) values ('${id}','${username}', '${passwordHashed}');`;
    const result = await query(qre);
    return result[1];
  },

  deleteUser: async (id) => {
    const qre = `delete from userdb where id = '${id}';`;
    const result = await query(qre);
    return result[1];
  },
};

export default userQuery;
