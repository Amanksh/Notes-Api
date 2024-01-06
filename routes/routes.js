// routes/postRoutes.js
const express = require("express");
const router = express.Router();
const postController = require("../controllers/controllers");

// Create a new post
router.post("/posts", postController.createPost);

// Get all posts
router.get("/posts", postController.getAllPosts);

// More routes for updating and deleting posts if needed
// ...

module.exports = router;
