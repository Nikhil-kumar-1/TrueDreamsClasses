import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../config/config";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch the blog details and comments from the backend
  useEffect(() => {
    const fetchBlogAndComments = async () => {
      try {
        // Fetch blog details
        const blogResponse = await fetch(`${backendUrl}/api/blogs/${id}`);
        if (!blogResponse.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const blogData = await blogResponse.json();
        setBlog(blogData);

        // Fetch comments for the blog
        const commentsResponse = await fetch(`${backendUrl}/api/blogs/${id}/comments`);
        if (!commentsResponse.ok) {
          throw new Error("Failed to fetch comments");
        }
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching blog details or comments:", error);
      }
    };

    fetchBlogAndComments();
  }, [id]);

  // Handle comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/blogs/${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newComment, author: "Current User" }), // Replace "Current User" with the actual user
      });
      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }
      const data = await response.json();
      setComments([...comments, data]); // Add the new comment to the list
      setNewComment(""); // Clear the comment input
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  // Handle like
  const handleLike = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/blogs/${id}/like`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to like blog");
      }
      const data = await response.json();
      setBlog(data); // Update the blog with new like count
    } catch (error) {
      console.error("Error liking blog:", error);
    }
  };

  // Handle dislike
  const handleDislike = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/blogs/${id}/dislike`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to dislike blog");
      }
      const data = await response.json();
      setBlog(data); // Update the blog with new dislike count
    } catch (error) {
      console.error("Error disliking blog:", error);
    }
  };

  if (!blog) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* React Helmet for SEO */}
      <Helmet>
  <title>{blog.title} - My Blog</title>
  <meta name="description" content={blog.content ? blog.content.substring(0, 160) : "Read this amazing blog on our platform."} />
  <meta property="og:title" content={blog.title} />
  <meta property="og:description" content={blog.content ? blog.content.substring(0, 160) : "Check out this blog!"} />
  <meta property="og:image" content={blog.image || "/default-thumbnail.jpg"} />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={blog.title} />
  <meta name="twitter:description" content={blog.content ? blog.content.substring(0, 160) : "Engaging blog content"} />
  <meta name="twitter:image" content={blog.image || "/default-thumbnail.jpg"} />

  {/* Schema Markup for SEO */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.content ? blog.content.substring(0, 160) : "Read this blog on our platform.",
      "image": blog.image || "/default-thumbnail.jpg",
      "author": {
        "@type": "Person",
        "name": blog.author || "Unknown Author"
      },
      "publisher": {
        "@type": "Organization",
        "name": "My Blog",
        "logo": { "@type": "ImageObject", "url": "/logo.png" }
      },
      "datePublished": blog.createdAt,
      "dateModified": blog.updatedAt || blog.createdAt
    })}
  </script>
</Helmet>


      {/* Banner Image */}
      <div className="relative h-64 lg:h-96 overflow-hidden">
        <img
          src={blog.image}
          alt="Blog Banner"
          className="w-full h-full object-cover pl-6 pr-6"
        />
      </div>

      {/* Blog Content Section */}
      <div className="max-w-full mx-auto bg-white p-6 lg:p-8 rounded-lg shadow-md mt-5 mb-8">
        {/* Blog Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          {blog.title}
        </h1>

        {/* Like/Dislike Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={handleLike}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <span>Like</span>
            <span>{blog.likes}</span>
          </button>
          <button
            onClick={handleDislike}
            className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            <span>Dislike</span>
            <span>{blog.dislikes}</span>
          </button>
        </div>

        {/* Blog Content */}
        <div
          className="text-gray-700 space-y-4"
          dangerouslySetInnerHTML={{
            __html: blog.content
              .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-4">')
              .replace(/<h2>/g, '<h2 class="text-2xl font-bold mb-3">')
              .replace(/<h3>/g, '<h3 class="text-xl font-bold mb-2">')
              .replace(/<p>/g, '<p class="mb-4">')
              .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4">')
              .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4">')
              .replace(/<li>/g, '<li class="mb-2">'),
          }}
        />
      </div>

      {/* Comment Section */}
      <div className="max-w-full mx-auto bg-white p-6 lg:p-8 rounded-lg shadow-md mt-5 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Comments</h2>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
          <button
            type="submit"
            className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit Comment
          </button>
        </form>

        {/* Display Comments */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment._id} className="border-b border-gray-200 pb-4">
              <p className="text-gray-700">{comment.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                Posted by {comment.author} on {new Date(comment.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;