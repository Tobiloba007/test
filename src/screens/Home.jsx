import React from 'react'
import Navbar from '../components/general/Navbar'
import background from '../assets/images/intro-bg.jpeg'
import IntroSection from '../components/home/IntroSection'
import TrustedBy from '../components/home/TrustedBy'
import Vision from '../components/home/Vision'
import HomeSection4 from '../components/home/HomeSection4'
import HomeSection5 from '../components/home/HomeSection5'

const Home = () => {

  return (
    <div className="flex flex-col items-center justify-start w-full font-poppins bg-cover bg-center h-screen" 
    style={{ backgroundImage: `url(${background})`}}>
        <Navbar />
        <IntroSection />
        <TrustedBy />
        <Vision />
        <HomeSection4 />
        <HomeSection5/>
    </div>
  )
}

export default Home