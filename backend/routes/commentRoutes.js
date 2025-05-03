const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Add a new comment
router.post("/blogs/:id/comments", async (req, res) => {
  try {
    const { content, author } = req.body;
    const blogId = req.params.id;

    const newComment = new Comment({
      content,
      author,
      blogId,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all comments for a specific blog
router.get("/blogs/:id/comments", async (req, res) => {
  try {
    const blogId = req.params.id;
    const comments = await Comment.find({ blogId }).sort({ createdAt: -1 }); // Sort by latest first
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Backend route to delete a comment
router.delete("/blogs/:blogId/comments/:commentId", async (req, res) => {
    try {
      const { blogId, commentId } = req.params;
      await Comment.findByIdAndDelete(commentId); // Delete the comment
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      console.error("Error deleting comment:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

module.exports = router;