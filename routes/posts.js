const express = require('express');

const router = express.Router();

// 引用 postContr.js檔案
const postContr = require('../controllers/postContr');

router.get('/', (req, res) => postContr.getAllPosts(req, res));
router.post('/', (req, res) => postContr.createPost(req, res));

module.exports = router;
