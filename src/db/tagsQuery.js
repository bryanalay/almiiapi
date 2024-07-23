import { query } from '../config/db.js'

const tagsQuery = {
  async selectAllTags() {
    const qre = 'select * from tags order by counter desc limit 10;'
    const result = await query(qre)
    return result[1].rows
  },
  async updateCounter(id) {
    const qre = `update almimaindb.tags set counter = counter + 1 where id = '${id}';`
    const result = await query(qre)
    return result[1].command
  }
}

export default tagsQuery
