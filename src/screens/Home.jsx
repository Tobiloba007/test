import React, { useEffect } from 'react'
import IntroSection from '../components/home/IntroSection'
import TrustedBy from '../components/home/TrustedBy'
import Vision from '../components/home/Vision'
import HomeSection4 from '../components/home/HomeSection4'
import HomeSection5 from '../components/home/HomeSection5'
import HomeSection6 from '../components/home/HomeSection6'
import Faq from '../components/general/Faq'
import HomeSection7 from '../components/home/HomeSection7'
import Footer from '../components/general/Footer'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div id='home-top'>
        <IntroSection />
        <TrustedBy />
        <Vision />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <Faq />
        <HomeSection7 />
        <Footer />
        <div className={`h-40 lg:flex absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b from-black to-transparent lg:h-40`}></div>
    </div>
  )
}

export default Home