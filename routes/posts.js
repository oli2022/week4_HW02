const express = require('express');

const router = express.Router();

// 引用 postContr.js檔案
const postContr = require('../controllers/postContr');

router.get('/', (req, res) => postContr.getAllPosts(req, res));
router.post('/', (req, res) => postContr.createPost(req, res));
//router.delete('/:id', (req, res) => postContr.deleteOne(req, res));
router.delete('/', (req, res) => postContr.deleteAll(req, res));

module.exports = router;
