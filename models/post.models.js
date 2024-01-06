const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
