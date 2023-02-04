import { nanoid } from "nanoid";
import { pool } from "./pgdb.js";

async function getPosts(req,res){
    await pool.query(`select * from almimaindb.postdb;`)
    .then((result)=>{
        res.status(200).send(result?.rows)
    })
    .catch((err)=>{
        res.status(404).send({
            message : err.message
        })
    })
}

async function insertPost(req,res){
    const { userid, data } = req.body
    const id = nanoid(6)
    const fecha = new Date().toLocaleString()
    await pool.query(`insert into almimaindb.postdb(id,user_id,body,fecha) 
    values ('${id}','${userid}','${data}','${fecha}');`)
    .then((result)=>{
        res.status(201).send({
            message: 'Posted successfully',
            postid: id
        })
    })
    .catch((err)=>{
        res.status(404).send({
            message : err.message
        })
    })
}

async function deletePost(req,res){
    const { postid } = req.body
    await pool.query(`delete from almimaindb.postdb where id = '${postid}';`)
    .then((result)=>{
        res.status(200).send({
            message : 'Post deleted',
            postid: postid            
        })
    })
    .catch((err)=>{
        res.status(404).send({
            message : err.message
        })
    })
}

async function selectPostByid(req,res){
    const { postid } = req.body
    await pool.query(`select * from almimaindb.postdb where id = '${postid}'`)
    .then((result)=>{
        res.status(200).send(result?.rows[0])
    })
    .catch((err)=>{
        res.status(404).send({
            message : err.message
        })
    })
}

export { getPosts, insertPost, deletePost, selectPostByid }