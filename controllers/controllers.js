// controllers/postController.js
const Post = require("../models/post.models");

const postController = {
  createPost: async (req, res) => {
    try {
      const { username, title, content } = req.body;
      const post = new Post({ username, title, content });
      await post.save();
      res.send(post);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.send(posts);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // More controller methods if needed
  // ...
};

module.exports = postController;
