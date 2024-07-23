import tagsQuery from '../db/tagsQuery.js'

const tagsController = {
  getTags: async (req, res) => {
    try {
      const result = await tagsQuery.selectAllTags()
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  },
  updateTagCounter: async (req, res) => {
    try {
      const { id } = req.params
      const result = await tagsQuery.updateCounter(id)
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  }
}

export default tagsController
