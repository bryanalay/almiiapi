import { getPosts, insertPost, deletePost, selectPostByid } from "../db/postsDBController.js";

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

export { getAllPosts, savePost, eliminatePost, getPostById }