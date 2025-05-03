// blogData.js
export const getBlogs = () => {
    // Load blogs from local storage
    const storedBlogs = localStorage.getItem("blogs");
    return storedBlogs ? JSON.parse(storedBlogs) : [];
  };
  
  export const saveBlogs = (blogs) => {
    // Save blogs to local storage
    localStorage.setItem("blogs", JSON.stringify(blogs));
  };