import React, { useEffect } from 'react'
import LocationsIntro from '../components/locations/LocationsIntro'
import Footer from '../components/general/Footer'
import { useLocation } from 'react-router-dom';

const Locations = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div id='location' className='flex flex-col items-center justify-start mx-auto max-w-screen-2xl'>
        <LocationsIntro />
        <Footer />
    </div>
  )
}

export default Locations
