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
    deleteAll: async (req, res) => {
        await postModel.deleteMany({});
        res.status(200).json({
            status: ' 刪除全部資料成功 ',
        });
    },
    deleteOne: async (req, res) => {
        const id = req.params.id;
        await postModel.findByIdAndDelete(id);
        res.status(200).json({
            status: ' 單筆資料刪除成功 ',
        });
    },
    updatePost: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        await postModel.findByIdAndUpdate(id, data);
        res.status(200).json({
            status: ' 單筆資料更新成功 ',
            data,
        });
    },
};

module.exports = postsController;
