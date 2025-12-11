// src/routes/posts.routes.js
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller");

// GET /api/v1/posts
router.get("/", postsController.getAllPosts);

// GET /api/v1/posts/:id
router.get("/:id", postsController.getPostById);

module.exports = router;
