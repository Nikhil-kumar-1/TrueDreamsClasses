import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Courses from "./components/Courses/AllCourse";
import ContactPage from "./components/Contact/Contact";
import AboutUs from "./components/About/AboutUs";
import ScrollToTop from "./components/ScrollOnTop";
import NotFound from "./components/NotFound/NotFound";
import PrivacyPolicy from "./components/Terms/PrivacyPolicy";
import TermsOfService from "./components/Terms/TermsAndCondition";
import ApplyNow from "./components/GetInTouch/GetInTouch";
import BlogDetails from "./components/Blog/BlogDetails";
import Login from "./components/Login";
import Blog from "./components/Blog/Blog";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />

          <Route path="/apply" element={<ApplyNow />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Helmet>
                  <title>Admin Dashboard - Manage Website</title>
                </Helmet>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
