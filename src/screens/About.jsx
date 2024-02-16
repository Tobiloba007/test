import React from 'react'
import AboutIntro from '../components/about/AboutIntro'
import AboutSection2 from '../components/about/AboutSection2'
import AboutValue from '../components/about/AboutValue'
import AboutMission from '../components/about/AboutMission'
import Footer from '../components/general/Footer'

const About = () => {
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
