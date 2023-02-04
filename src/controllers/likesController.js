import { insertLike, selectLikes, deleteLike, selectLikesByPostId } from "../db/likesDBController.js"

async function getLikes(req,res){
    selectLikes(req,res)
}

async function postLike(req,res){
    await insertLike(req,res)
}

async function dropLike(req,res){
    await deleteLike(req,res)
}

async function getLikedBy(req,res){
    await selectLikesByPostId(req,res)
}

export { getLikes, postLike, dropLike, getLikedBy }