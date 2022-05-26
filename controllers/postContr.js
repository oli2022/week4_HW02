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
    deleteAll: async (req, res) => {
        if (req.originalUrl === '/api/posts/') {
            return appError(404, '無此網站路由', next);
        }
        postModel.deleteMany({});
        res.status(200).json({
            status: ' 刪除全部資料成功 ',
        });
    },
};

module.exports = postsController;
