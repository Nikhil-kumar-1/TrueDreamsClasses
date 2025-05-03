import React from 'react'
import HeroSection from '../Hero/Hero'
import AboutUs from '../About/About'
import ScholarshipPopup from '../Scholarship/Scholarship'
import AboutAndCourses from '../Courses/Courses'
import WhyChooseUs from '../ChooseUs/ChooseUs'
import DirectorSection from '../Director/Director'
import Who from '../WhoWeAre/WhoWeAre'
// import GetInTouchSection from '../GetInTouch/GetInTouch'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ScholarshipPopup />
      <AboutAndCourses />
      <WhyChooseUs />
      <Who />
      <DirectorSection />
      {/* <GetInTouchSection /> */}
    </div>
  )
}

export default Home
