import express from 'express';
import mongoose from 'mongoose';

import PostSchema from '../mongoDB/models/post.js';

const router=express.Router();

export const getPosts = async(req, res) =>{
    try {
        const postMessages= await PostSchema.find({});
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({  message: error.message})
    }
}

export const createPost = async(req,res) => {
    const {title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostSchema({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export default router;