import React, { useEffect } from 'react'
import AboutIntro from '../components/about/AboutIntro'
import AboutSection2 from '../components/about/AboutSection2'
import AboutValue from '../components/about/AboutValue'
import AboutMission from '../components/about/AboutMission'
import Footer from '../components/general/Footer'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div>
       <AboutIntro />
       <AboutSection2 />
       <div id='learn-more'>
           <AboutValue />
       </div>
       <AboutMission />
       <Footer />
    </div>
  )
}

export default About
