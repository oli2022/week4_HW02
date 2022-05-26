const express = require('express');

const router = express.Router();

// 引用 postModel.js 檔案
const postModel = require('../Models/postModel');

// 引用其他檔案 - 錯誤訊息

// 新增、修改、刪除
const postsController = {
    getAllPosts: async (req, res) => {
        const post = await postModel.find();
        res.status(200).json(post);
    },
    createPost: async (req, res) => {
        const newPost = await postModel.create(req.body);
        res.status(200).json({
            post: newPost,
            status: ' 單筆資料新增成功 ',
        });
    },
    deleteOne: async (req, res) => {
        const newPost = await postModel.create(req.body);
        res.status(200).json({
            post: newPost,
            status: ' 單筆資料刪除成功 ',
        });
    },
};

module.exports = postsController;
