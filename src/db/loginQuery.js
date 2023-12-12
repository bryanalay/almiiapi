import { query } from '../config/db.js'

const loginQuery = {
  login: async (username) => {
    const qre = `select * from login('${username}');`
    const result = await query(qre)
    return result[1].rows
  },
  insertToken: async (token, userid) => {
    const qre = `insert into almimaindb.token(user_id,token) values ('${userid}','${token}');`
    const result = await query(qre)
    return result
  },
  deactivateToken: async (token, userid) => {
    const qre = `select * from desactivarToken('${userid}','${token}')`
    const result = await query(qre)
    return result
  }
}

export { loginQuery }
