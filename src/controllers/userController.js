import { getUsers, findByUsername, findById, insertUser } from "../db/userDbControllers.js"

const getAllUsers= async (req,res)=>{
    await getUsers(req,res)
}

const getUserById = async (req,res)=>{
    await findById(req,res)
}

const getUserByUser = async (req,res)=>{
    await findByUsername(req,res)
}

const postUser = async (req,res)=>{
    await insertUser(req,res)
}

export { getAllUsers, getUserById, getUserByUser, postUser }