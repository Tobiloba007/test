import React, { useEffect } from 'react'
import OurMetalsIntro from '../components/ourMetals/OurMetalsIntro'
import Footer from '../components/general/Footer'
import { useLocation } from 'react-router-dom';

const OurMetals = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className='flex flex-col items-center justify-start mx-auto max-w-screen-2xl'>
         <OurMetalsIntro />
         <Footer />
    </div>
  )
}

export default OurMetals
