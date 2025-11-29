const express = require('express');
const router = express.Router();

const postController = require('../controllers/blogController');

router.get('/', postController.getAllPosts);

module.exports = router;