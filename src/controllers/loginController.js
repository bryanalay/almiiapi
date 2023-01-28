import { findUserAndPassword } from "../db/loginDbController.js";

async function getPassLoggin(req,res){
    await findUserAndPassword(req,res)
}

export { getPassLoggin }