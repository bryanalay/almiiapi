import { pool } from "./pgdb.js"

async function getCustomersById(req,res){
    const id = req.params.id
//getLikesByPostId
//sp001getorderbyid
    const query = `
    SET search_path to almimaindb;
    select * FROM sp001getorderbyid(${id});`
    await pool.query(query)
    .then((result)=>{
        console.log(result);
        console.log(result[1].rows);
        res.status(200).send(
            result[1].rows)
    })
    .catch((err)=>{
        res.status(404).send({
            Message : err.Message
        })
    })
}

export { getCustomersById }