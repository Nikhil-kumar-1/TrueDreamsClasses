import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/AllCourse';
import ContactPage from './components/Contact/Contact';
import AboutUs from './components/About/AboutUs';
import ScrollToTop from './components/ScrollOnTop';
import CustomCursor from './components/Cursor';
import NotFound from './components/NotFound/NotFound';
import PrivacyPolicy from './components/Terms/PrivacyPolicy';
import TermsOfService from './components/Terms/TermsAndCondition';
import ApplyNow from './components/GetInTouch/GetInTouch';




const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/courses" element={<Courses />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/about" element={<AboutUs />} />
       <Route path="/privacy-policy" element={<PrivacyPolicy />} />
       <Route path="/terms" element={<TermsOfService/>} />
       
       <Route path="/apply" element={<ApplyNow/>} />
       <Route path="*" element={<NotFound />} />
       
       
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
