import { insertSalt, findSalt } from "../db/saltBcrypt.js"

const postSalt = async (req,res)=>{
    await insertSalt(req,res)
}

const getSalt = async (req,res)=>{
    await findSalt(req,res)
}

export { postSalt, getSalt }