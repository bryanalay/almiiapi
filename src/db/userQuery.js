import { query } from '../config/db.js'

const userQuery = {
  getUsers: async () => {
    const qre = 'SELECT id, username FROM userDB'
    const result = await query(qre)
    return result[1].rows
  },

  getUserById: async (id) => {
    const qre = `SELECT id, username, fprofile, fbanner 
    FROM userDB as us
    inner join profile as prof
    on us.id = prof.userid
    where id = '${id}';`
    const result = await query(qre)
    return result[1].rows
  },

  getUserByUsername: async (username) => {
    const qre = `SELECT id,username,fprofile, fbanner FROM userDB as us 
    inner join profile as prof
    on us.id = prof.userid
    where username = '${username}';`
    const result = await query(qre)
    return result[1].rows
  },

  insertUser: async (user) => {
    const { id, username, passwordHashed } = user
    const qre = `insert into userdb (id, username, password) values ('${id}','${username}', '${passwordHashed}');`
    const result = await query(qre)
    return result[1]
  },

  deleteUser: async (id) => {
    const qre = `delete from userdb where id = '${id}';`
    const result = await query(qre)
    return result[1]
  },

  updateProfile: async (profile) => {
    const { userid, fprofile, fbanner } = profile
    const qre = `insert into profile (userid, fprofile, fbanner) values ('${userid}', '${fprofile}', '${fbanner}');`
    const result = await query(qre)
    return result[1]
  },

  updateAvatar: async (urlString, userid) => {
    const qre = `UPDATE profile AS pf
            SET fprofile = '${urlString}'
            WHERE userid = '${userid}';`
    const result = await query(qre)
    return result[1]
  },

  updateBanner: async (urlString, userid) => {
    const qre = `UPDATE profile AS pf
            SET fbanner = '${urlString}'
            WHERE userid = '${userid}';`
    const result = await query(qre)
    return result[1]
  },

  crearPerfil: async (userid, fprofile, fbanner) => {
    const qre = `insert into profile (userid, fprofile, fbanner) values ('${userid}', '${fprofile}', '${fbanner}');`
    const result = await query(qre)
    return result[1]
  },

  traerAllUserId: async () => {
    const qre = 'SELECT userid FROM profile;'
    const result = await query(qre)
    return result[1].rows
  }
}

export default userQuery
