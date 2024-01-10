import mongoose from "mongoose";

const Post =new mongoose.Schema({
    tittle: String,
    message: String,
    creater: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type: Date,
        default: new Date(),
    },
})

const PostSchema=mongoose.model('Post',Post);

export default PostSchema;