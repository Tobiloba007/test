import React, { useEffect } from 'react'
import SupportIntro from '../components/support/SupportIntro'
import Faq from '../components/general/Faq'
import Footer from '../components/general/Footer'
import SupportSection3 from '../components/support/SupportSection3'
import { useLocation } from 'react-router-dom'

const Support = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
        <SupportIntro />
        <Faq />
        <SupportSection3 />
        <Footer />
    </div>
  )
}

export default Support
