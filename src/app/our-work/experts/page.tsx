import React from 'react'
import ExpertHeroSection from './_components/ExpertHeroSection'
import AipAndExperts from './_components/AipAndExperts'
import AsAnExperts from './_components/AsAnExperts'
import ExpertsJoinTheFlow from './_components/ExpertsJoinTheFlow'
import WhyPartner from './_components/WhyPartner'
import NetworkOfExperts from './_components/NetworkOfExperts'
import ExpertsShelves from './_components/ExpertsShelves'

const page = () => {
  return (
    <div className='pt-[5rem]'>
        <ExpertHeroSection/>
        <AipAndExperts/>
        <AsAnExperts/>
        <ExpertsJoinTheFlow/>
        <WhyPartner/>
        <NetworkOfExperts/>
        <ExpertsShelves/>
    </div>
  )
}

export default page