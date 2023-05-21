import { getPosts, insertPost, deletePost, selectPostByid, selectPostByUserId, getUsernamesByPostId } from "../db/postsDBController.js";

async function getAllPosts(req,res){
    await getPosts(req,res)
}

async function savePost(req,res){
    await insertPost(req,res)
}

async function eliminatePost(req,res){
    await deletePost(req,res)
}

async function getPostById(req,res){
    await selectPostByid(req,res)
}

async function getPostByUserId(req,res){
    await selectPostByUserId(req,res)
}

async function getUsernamesLikesById(req,res){
    await  getUsernamesByPostId(req,res)
}

export { getAllPosts, savePost, eliminatePost, getPostById, getPostByUserId, getUsernamesLikesById }