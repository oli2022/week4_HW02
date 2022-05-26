const express = require('express');

const router = express.Router();

const { errorHandle, deleteError, deleteAllError, nullError } = require('../servers/errorHandle');

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
        try {
            const newPost = await postModel.create(req.body);
            res.status(200).json({
                post: newPost,
                status: ' 單筆資料新增成功 ',
            });
        } catch (error) {
            nullError(res, error);
        }
    },
    deleteAll: async (req, res) => {
        try {
            if (req.originalUrl === '/posts') {
                await postModel.deleteMany({});
                res.status(200).json({
                    status: '刪除全部資料成功',
                });
            } else {
                deleteAllError(res, error);
            }
        } catch (error) {
            deleteAllError(res, error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            const id = req.params.id;
            await postModel.findByIdAndDelete(id);
            res.status(200).json({
                status: ' 單筆資料刪除成功 ',
            });
        } catch (error) {
            deleteError(res, error);
        }
    },
    updatePost: async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            await postModel.findByIdAndUpdate(id, data);
            res.status(200).json({
                status: ' 單筆資料更新成功 ',
                data,
            });
        } catch (error) {
            deleteError(res, error);
        }
    },
};

module.exports = postsController;
