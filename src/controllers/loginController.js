import { login } from "../db/loginDbController.js";

async function getPassLoggin(req,res){
    await login(req,res)
}

export { getPassLoggin }