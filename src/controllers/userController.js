import userQuery from '../db/userQuery.js'
import { nanoid } from 'nanoid'
import { hash } from 'bcrypt'
import saltQuery from '../db/saltQuery.js'

const userController = {
  getUsers: async (req, res) => {
    try {
      const result = await userQuery.getUsers()
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await userQuery.getUserById(id)
      if (result.length > 0) {
        res.status(200).json(result)
        console.log(result)
      } else {
        throw new Error(`Usuario con id ${id} inexistente`)
      }
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  },

  getUserByUsername: async (req, res) => {
    try {
      const { username } = req.params
      const result = await userQuery.getUserByUsername(username)
      if (result.length > 0) {
        res.status(200).json(result)
      } else {
        throw new Error('Usuario inexistente')
      }
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  },

  insertUser: async (req, res) => {
    const { username, password } = req.body
    const id = nanoid(4)
    const salto = await saltQuery.getSaltDB()
    const passwordHashed = await hash(password, salto)
    try {
      const user = {
        id: id,
        username: username,
        passwordHashed: passwordHashed
      }
      const result = await userQuery.insertUser(user)
      res.status(200).json({
        Message: 'Usuario creado!!'
      })
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await userQuery.getUserById(id)
      if (result.length > 0) {
        const result = await userQuery.deleteUser(id)
        res.status(200).json({
          Message: 'Deleted succesfully'
        })
      } else {
        throw new Error('Usuario inexcistente!!')
      }
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  },
  updateProf: async (req, res) => {
    try {
      const { userid, fprofile, fbanner } = req.body
      const profile = {
        userid: userid,
        fprofile: fprofile,
        fbanner: fbanner
      }
      const result = await userQuery.updateProfile(profile)
      res.status(200).json({
        Message: 'Profile updated!!'
      })
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  },

  updateAvatarProfile: async (req, res) => {
    try {
      const { urlString, userid } = req.body
      const result = await userQuery.updateAvatar(urlString, userid)
      res.status(200).json({
        Message: 'Avatar updated!!'
      })
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  },

  updateBannerProfile: async (req, res) => {
    try {
      const { urlString, userid } = req.body
      const result = await userQuery.updateBanner(urlString, userid)
      res.status(200).json({
        Message: 'Avatar updated!!'
      })
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  },

  crearPerfiles: async (req, res) => {
    try {
      const resultWithUsersId = await userQuery.traerAllUserId()

      console.log('lista usuarios')
      ///console.log(resultWithUsersId)

      //resultWithUsersId.forEach(async (element) => {
      //const userid = element.id

      //await userQuery.crearPerfil(userid, '', '')
      //})

      res.status(200).json({
        Message: resultWithUsersId
      })
      // const result = await userQuery.updateProfile(profile)
      // res.status(200).json({
      //   Message: 'Profile created!!'
      // })
    } catch (error) {
      res.status(404).json({
        status: '404',
        message: error.message
      })
    }
  }
}

export default userController
