import commentsQuery from '../db/commentsQuery.js'

const commentsController = {
  getComments: async (req, res) => {
    try {
      const result = await commentsQuery.selectComments()
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({
        status: '404',
        message: error.message
      })
    }
  },
  getComment: async (req, res) => {
    try {
      const { id } = req.params
      const result = await commentsQuery.getComment(id)
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({
        status: '404',
        message: error.message
      })
    }
  },
  postComent: async (req, res) => {
    try {
      const { id, postid, userid, comentario } = req.body
      const result = await commentsQuery.insertComment(
        id,
        postid,
        userid,
        comentario
      )
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({
        status: '404',
        message: error.message
      })
    }
  },
  deleteComment: async (req, res) => {
    try {
      const { id, postid, userid } = req.body
      const result = await commentsQuery.deleteComment(id, postid, userid)
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({
        status: '404',
        message: error.message
      })
    }
  }
}

export default commentsController
