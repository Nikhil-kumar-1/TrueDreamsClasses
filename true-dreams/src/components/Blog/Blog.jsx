import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../config/config";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/blogs`);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Latest posts data (top 4 most recent blogs)
  const latestPosts = blogs
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by date (newest first)
    .slice(0, 4) // Get the first 4 blogs
    .map((blog) => ({
      id: blog._id,
      title: blog.title,
      path: `/blog/${blog._id}`,
    }));

  return (
    <div className="bg-gray-100">
      {/* SEO Optimization for Blog List Page */}
      <Helmet>
        <title>Blog - Kidney & Urology Care</title>
        <meta
          name="description"
          content="Stay updated with the latest news, insights, and advancements in urology and kidney care."
        />
        <meta property="og:title" content="Blog - Kidney & Urology Care" />
        <meta
          property="og:description"
          content="Explore our latest blogs on urology and kidney care."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Blue Banner Section */}
      <div className="bg-blue-700 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-lg">
          Stay updated with the latest news, insights, and advancements in
          urology.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts Grid (Left Column - 3/4 width) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 lg:p-6">
                    <h2 className="text-xl font-bold text-blue-700">
                      {blog.title}
                    </h2>
                    <p className="mt-2 text-gray-700">{blog.description}</p>
                    <button
                      onClick={() => navigate(`/blog/${blog._id}`)} // Navigate to BlogDetails with the blog ID
                      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition cursor-pointer"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Posts Section (Right Column - 1/4 width) */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-700 mb-4">
                Latest Posts
              </h2>
              <ul className="space-y-3">
                {latestPosts.map((post) => (
                  <li key={post.id}>
                    <button
                      onClick={() => navigate(post.path)}
                      className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
                    >
                      {post.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;