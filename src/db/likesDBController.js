import { nanoid } from "nanoid";
import { pool } from "./pgdb.js";

async function selectLikes(req,res){
    await pool.query(`select * from almimaindb.likesdb;`)
    .then((result)=>{
        res.status(200).send(result?.rows)
    })
    .catch((err)=>{
        res.status(404).send({
            Message : err.Message
        })
    })
}

async function selectLikesByPostId(req,res){
    const { postid } = req.body
    await pool.query(`select user_id from almimaindb.likesdb where post_id = '${postid}';`)
    .then((result)=>{
        res.status(200).send(result.rows)
    })
    .catch((err)=>{
        res.status(404).send({
            Message : err.Message
        })
    })
}

async function insertLike(req,res){
    const { postid, userid } = req.body
    const id = nanoid(4)
    console.log(id, postid, userid);
    await pool.query(`insert into almimaindb.likesdb(id,post_id,user_id)
    values('${id}','${postid}','${userid}');`)
    .then((result)=>{
        res.status(201).send({
            Message : 'Liked',
            post_liked: postid,
            byUser: userid,
            id_like: id
        })
    })
    .catch((err)=>{
        res.status(404).send({
            Message : err.Message
        })
    })
}

async function deleteLike(req,res){
    const { id } = req.body
    await pool.query(`delete from almimaindb.likesdb where id = '${id}';`)
    .then((result)=>{
        res.status(200).send({
            Message : 'Like droped'
        })
    })
    .catch((err)=>{
        res.status(404).send({
            Message : err.Message
        })
    })
}

export { insertLike, selectLikes, deleteLike, selectLikesByPostId }