import React from 'react'
import FoundationFactHeroSection from './_components/FoundationFactHeroSection'
import FoundationFacts from '../_components/FoundationFacts'
import Testimonials from './_components/Testimonials'
import AipFootprints from './_components/AipFootprints'

const page = () => {
  return (
    <div>
        <FoundationFactHeroSection/>
        <FoundationFacts/>
        <Testimonials/>
        <AipFootprints/>
    </div>
  )
}

export default page