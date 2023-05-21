import { getCustomersById } from "../db/customers.js";

async function getCustomerId(req,res){
    await getCustomersById(req,res)
}

export { getCustomerId }