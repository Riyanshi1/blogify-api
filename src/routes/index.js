// src/routes/index.js
const express = require("express");
const router = express.Router();

const postsRouter = require("./posts.routes");

// Resource-level mounting
router.use("/posts", postsRouter);

module.exports = router;
