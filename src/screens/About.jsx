import React, { useEffect } from 'react'
import AboutIntro from '../components/about/AboutIntro'
import AboutSection2 from '../components/about/AboutSection2'
import AboutValue from '../components/about/AboutValue'
import AboutMission from '../components/about/AboutMission'
import Footer from '../components/general/Footer'
import { useLocation } from 'react-router-dom'

const About = () => {
  const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

  return (
    <div>
       <AboutIntro />
       <AboutSection2 />
       <AboutValue />
       <AboutMission />
       <Footer />
    </div>
  )
}

export default About
