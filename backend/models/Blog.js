const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  likes: {type: Number,default: 0},
dislikes: { type: Number,default: 0},
});

module.exports = mongoose.model("Blog", blogSchema);