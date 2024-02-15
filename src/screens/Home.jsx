import React from 'react'
import IntroSection from '../components/home/IntroSection'
import TrustedBy from '../components/home/TrustedBy'
import Vision from '../components/home/Vision'
import HomeSection4 from '../components/home/HomeSection4'
import HomeSection5 from '../components/home/HomeSection5'
import HomeSection6 from '../components/home/HomeSection6'
import Faq from '../components/general/Faq'
import HomeSection7 from '../components/home/HomeSection7'
import Footer from '../components/general/Footer'

const Home = () => {

  return (
    <div>
        <IntroSection />
        <TrustedBy />
        <Vision />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <Faq />
        <HomeSection7 />
        <Footer />
    </div>
  )
}

export default Home