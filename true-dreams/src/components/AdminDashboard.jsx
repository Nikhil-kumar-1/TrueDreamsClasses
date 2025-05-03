import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../config/config";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [consultations, setConsultations] = useState([]);
  const [applications, setApplications] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState("consultations");
  const [newBlog, setNewBlog] = useState({ title: "", content: "", image: "" });
  const [editBlog, setEditBlog] = useState(null);
  const [comments, setComments] = useState({});
  const [dailyVisits, setDailyVisits] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState({
    consultations: false,
    applications: false,
    blogs: false,
    visits: false,
    contacts: false,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch all consultations
  useEffect(() => {
    const fetchConsultations = async () => {
      setLoading((prev) => ({ ...prev, consultations: true }));
      setError(null);
      try {
        const response = await fetch(`${backendUrl}/api/Consultation`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setConsultations(Array.isArray(data) ? data : data.data || []);
      } catch (error) {
        console.error("Error fetching consultations:", error);
        setError(error.message);
        setConsultations([]);
      } finally {
        setLoading((prev) => ({ ...prev, consultations: false }));
      }
    };

    fetchConsultations();
  }, []);

  // Fetch all applications
  useEffect(() => {
    const fetchApplications = async () => {
      setLoading((prev) => ({ ...prev, applications: true }));
      setError(null);
      try {
        const response = await fetch(`${backendUrl}/api/applicationdata`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApplications(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        console.error("Error fetching applications:", error);
        setError(error.message);
        setApplications([]);
      } finally {
        setLoading((prev) => ({ ...prev, applications: false }));
      }
    };

    if (activeTab === "applications") {
      fetchApplications();
    }
  }, [activeTab]);

  // Fetch Contact Messages
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading((prev) => ({ ...prev, contacts: true }));
      setError(null);
      try {
        const response = await fetch(`${backendUrl}/api/admin/contacts`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setContacts(Array.isArray(data) ? data : data.data || []);
      } catch (error) {
        console.error("Error fetching contact messages:", error);
        setError(error.message);
        setContacts([]);
      } finally {
        setLoading((prev) => ({ ...prev, contacts: false }));
      }
    };

    if (activeTab === "contact") {
      fetchContacts();
    }
  }, [activeTab]);

  // Fetch comments for a specific blog
  const fetchComments = async (blogId) => {
    try {
      const response = await fetch(
        `${backendUrl}/api/blogs/${blogId}/comments`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setComments((prev) => ({
        ...prev,
        [blogId]: Array.isArray(data) ? data : data.data || [],
      }));
    } catch (error) {
      console.error("Error fetching comments:", error);
      setComments((prev) => ({ ...prev, [blogId]: [] }));
    }
  };

  // Fetch all blogs
  const fetchBlogs = async () => {
    setLoading((prev) => ({ ...prev, blogs: true }));
    setError(null);
    try {
      const response = await fetch(`${backendUrl}/api/blogs`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const blogsData = Array.isArray(data) ? data : data.data || [];
      setBlogs(blogsData);

      // Fetch comments for each blog
      blogsData.forEach((blog) => {
        fetchComments(blog._id);
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError(error.message);
      setBlogs([]);
    } finally {
      setLoading((prev) => ({ ...prev, blogs: false }));
    }
  };

  // Fetch daily visits
  const fetchDailyVisits = async () => {
    setLoading((prev) => ({ ...prev, visits: true }));
    setError(null);
    try {
      const response = await fetch(`${backendUrl}/api/daily-visits`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDailyVisits(Array.isArray(data) ? data : data.data || []);
    } catch (error) {
      console.error("Error fetching daily visits:", error);
      setError(error.message);
      setDailyVisits([]);
    } finally {
      setLoading((prev) => ({ ...prev, visits: false }));
    }
  };

  useEffect(() => {
    if (activeTab === "blogs") {
      fetchBlogs();
    } else if (activeTab === "visits") {
      fetchDailyVisits();
    }
  }, [activeTab]);

  // Handle create blog
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      alert("Blog created successfully!");
      setNewBlog({ title: "", content: "", image: "" });
      fetchBlogs(); // Refresh the blog list
    } catch (error) {
      console.error("Error creating blog:", error);
      alert(error.message);
    }
  };

  // Handle consultation deletion
  const handleDeleteConsultation = async (consultationId) => {
    if (window.confirm("Are you sure you want to delete this consultation?")) {
      try {
        const response = await fetch(
          `${backendUrl}/api/consultations/${consultationId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete consultation");
        }
        setConsultations((prev) =>
          prev.filter((consultation) => consultation._id !== consultationId)
        );
      } catch (error) {
        console.error("Error deleting consultation:", error);
        alert(error.message);
      }
    }
  };

  // Handle application status change
  const handleApplicationStatusChange = async (id, status) => {
    try {
      const response = await fetch(`${backendUrl}/api/application/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update application status");
      }

      const updatedApplication = await response.json();
      setApplications((prev) =>
        prev.map((app) =>
          app._id === id ? updatedApplication.data : app
        )
      );
    } catch (error) {
      console.error("Error updating application status:", error);
      alert(error.message);
    }
  };

  // Handle application deletion
  const handleDeleteApplication = async (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      try {
        const response = await fetch(`${backendUrl}/api/application/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete application");
        }

        setApplications((prev) => prev.filter((app) => app._id !== id));
      } catch (error) {
        console.error("Error deleting application:", error);
        alert(error.message);
      }
    }
  };

  // Handle contact deletion
  const handleContactDelete = async (contactId) => {
    if (
      window.confirm("Are you sure you want to delete this contact message?")
    ) {
      try {
        const response = await fetch(`${backendUrl}/api/contact/${contactId}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete contact details");
        }
        setContacts((prev) =>
          prev.filter((contact) => contact._id !== contactId)
        );
      } catch (error) {
        console.error("Error deleting contact details:", error);
        alert(error.message);
      }
    }
  };

  // Handle delete blog
  const handleDeleteBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const response = await fetch(`${backendUrl}/api/blogs/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete blog");
        }

        alert("Blog deleted successfully!");
        fetchBlogs(); // Refresh the blog list
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert(error.message);
      }
    }
  };

  // Handle edit blog
  const handleEditBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/blogs/${editBlog._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editBlog),
      });

      if (!response.ok) {
        throw new Error("Failed to update blog");
      }

      alert("Blog updated successfully!");
      setEditBlog(null); // Clear edit mode
      fetchBlogs(); // Refresh the blog list
    } catch (error) {
      console.error("Error updating blog:", error);
      alert(error.message);
    }
  };

  // Handle delete comment
  const handleDeleteComment = async (blogId, commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        const response = await fetch(
          `${backendUrl}/api/blogs/${blogId}/comments/${commentId}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete comment");
        }

        alert("Comment deleted successfully!");
        fetchComments(blogId); // Refresh comments for the blog
      } catch (error) {
        console.error("Error deleting comment:", error);
        alert(error.message);
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Prepare data for the bar chart
  const chartData = {
    labels: dailyVisits.map((visit) =>
      new Date(visit.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Daily Visits",
        data: dailyVisits.map((visit) => visit.count),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Visits",
      },
    },
  };

  // Loading component
  const LoadingIndicator = () => (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-full lg:w-64 bg-blue-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setActiveTab("consultations")}
                className={`block py-2 px-4 w-full text-left hover:bg-blue-700 rounded ${
                  activeTab === "consultations" ? "bg-blue-700" : ""
                }`}
              >
                Consultations
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("applications")}
                className={`block py-2 px-4 w-full text-left hover:bg-blue-700 rounded ${
                  activeTab === "applications" ? "bg-blue-700" : ""
                }`}
              >
                Student Applications
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("blogs")}
                className={`block py-2 px-4 w-full text-left hover:bg-blue-700 rounded ${
                  activeTab === "blogs" ? "bg-blue-700" : ""
                }`}
              >
                Manage Blogs
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("visits")}
                className={`block py-2 px-4 w-full text-left hover:bg-blue-700 rounded ${
                  activeTab === "visits" ? "bg-blue-700" : ""
                }`}
              >
                Daily Visits
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("contact")}
                className={`block py-2 px-4 w-full text-left hover:bg-blue-700 rounded ${
                  activeTab === "contact" ? "bg-blue-700" : ""
                }`}
              >
                Contact Messages
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block py-2 px-4 w-full text-left hover:bg-blue-700 rounded"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p>{error}</p>
          </div>
        )}

        {activeTab === "contact" ? (
          <>
            <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>
            {loading.contacts ? (
              <LoadingIndicator />
            ) : (
              <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                        Name
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                        Email
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                        Phone
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                        Message
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {contacts.length > 0 ? (
                      contacts.map((contact) => (
                        <tr key={contact._id}>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            {contact.name}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            {contact.email}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            {contact.phone}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            {contact.message}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            <button
                              onClick={() => handleContactDelete(contact._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="px-4 py-4 text-center text-gray-500"
                        >
                          No contact messages found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        ) : activeTab === "consultations" ? (
          <>
            <h1 className="text-3xl font-bold mb-8">Consultations</h1>
            {loading.consultations ? (
              <LoadingIndicator />
            ) : (
              <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-blue-500">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                        Name
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                        Email
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                        Phone
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                        Date
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                        Message
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {consultations.length > 0 ? (
                      consultations.map((consultation) => (
                        <tr key={consultation._id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {consultation.name}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {consultation.email}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {consultation.phone}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {new Date(consultation.date).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {consultation.message}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            <button
                              onClick={() => handleDeleteConsultation(consultation._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-4 py-4 text-center text-gray-500"
                        >
                          No consultations found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        ) : activeTab === "applications" ? (
          <>
            <h1 className="text-3xl font-bold mb-8">Student Applications</h1>
            {loading.applications ? (
              <LoadingIndicator />
            ) : (
              <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-blue-500">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">Name</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">Email</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">Phone</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">Grade</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">City</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">Reference</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">Status</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {applications.length > 0 ? (
                      applications.map((application) => (
                        <tr key={application._id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {application.name}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {application.email}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {application.phone}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {application.grade}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {application.city}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            {application.reference || "N/A"}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            <select
                              value={application.status || "Pending"}
                              onChange={(e) => 
                                handleApplicationStatusChange(application._id, e.target.value)
                              }
                              className="border rounded p-1 text-sm"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Registered">Registered</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 bg-blue-50">
                            <button
                              onClick={() => handleDeleteApplication(application._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="px-4 py-4 text-center text-gray-500">
                          No applications found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        ) : activeTab === "blogs" ? (
          <>
            <h1 className="text-3xl font-bold mb-8">Manage Blogs</h1>

            {/* Create/Edit Blog Form */}
            <div className="bg-white rounded-lg shadow p-4 lg:p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">
                {editBlog ? "Edit Blog" : "Create New Blog"}
              </h2>
              <form onSubmit={editBlog ? handleEditBlog : handleCreateBlog}>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={editBlog ? editBlog.title : newBlog.title}
                    onChange={(e) =>
                      editBlog
                        ? setEditBlog({ ...editBlog, title: e.target.value })
                        : setNewBlog({ ...newBlog, title: e.target.value })
                    }
                    className="w-full p-2 lg:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea
                    placeholder="Content"
                    value={editBlog ? editBlog.content : newBlog.content}
                    onChange={(e) =>
                      editBlog
                        ? setEditBlog({ ...editBlog, content: e.target.value })
                        : setNewBlog({ ...newBlog, content: e.target.value })
                    }
                    className="w-full p-2 lg:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    rows="5"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={editBlog ? editBlog.image : newBlog.image}
                    onChange={(e) =>
                      editBlog
                        ? setEditBlog({ ...editBlog, image: e.target.value })
                        : setNewBlog({ ...newBlog, image: e.target.value })
                    }
                    className="w-full p-2 lg:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                  >
                    {editBlog ? "Update Blog" : "Create Blog"}
                  </button>
                  {editBlog && (
                    <button
                      type="button"
                      onClick={() => setEditBlog(null)}
                      className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Blog List */}
            {loading.blogs ? (
              <LoadingIndicator />
            ) : (
              <div className="bg-white rounded-lg shadow p-4 lg:p-6">
                <h2 className="text-xl font-bold mb-4">Blogs</h2>
                {blogs.length > 0 ? (
                  <div className="space-y-4">
                    {blogs.map((blog) => (
                      <div key={blog._id} className="border p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">{blog.title}</h3>
                        <p className="text-sm text-gray-600">
                          {blog.content.split(" ").slice(0, 50).join(" ")}
                          {blog.content.split(" ").length > 50 ? "..." : ""}
                        </p>
                        {blog.image && (
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-48 object-cover mt-2 rounded"
                          />
                        )}
                        <div className="mt-4">
                          <p className="text-sm text-gray-700">
                            Likes: {blog.likes || 0} | Dislikes:{" "}
                            {blog.dislikes || 0}
                          </p>
                        </div>

                        {/* Display Comments */}
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Comments</h4>
                          {comments[blog._id]?.length > 0 ? (
                            comments[blog._id].map((comment) => (
                              <div
                                key={comment._id}
                                className="border-t pt-2 mt-2"
                              >
                                <p className="text-sm text-gray-700">
                                  {comment.content}
                                </p>
                                <p className="text-xs text-gray-500">
                                  Posted by {comment.author || "Anonymous"} on{" "}
                                  {new Date(
                                    comment.createdAt
                                  ).toLocaleDateString()}
                                </p>
                                <button
                                  onClick={() =>
                                    handleDeleteComment(blog._id, comment._id)
                                  }
                                  className="text-red-600 hover:text-red-800 text-xs"
                                >
                                  Delete Comment
                                </button>
                              </div>
                            ))
                          ) : (
                            <p className="text-sm text-gray-500">
                              No comments yet.
                            </p>
                          )}
                        </div>

                        {/* Edit and Delete Blog Buttons */}
                        <div className="mt-4 flex space-x-4">
                          <button
                            onClick={() => setEditBlog(blog)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(blog._id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No blogs found</p>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-8">Daily Visits</h1>
            {loading.visits ? (
              <LoadingIndicator />
            ) : (
              <div className="bg-white rounded-lg shadow p-4 lg:p-6">
                {dailyVisits.length > 0 ? (
                  <Bar data={chartData} options={chartOptions} />
                ) : (
                  <p className="text-gray-500">No visit data available</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;