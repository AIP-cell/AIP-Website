import React from 'react'
import JourneyArchetype from './_components/JourneyArchetype'
import JourneyArchetype1 from './_components/JourneyArchetype1'

const page = () => {
  return (
    <div  className="container mx-auto ">
        <div className='text-center mb-[19.5rem]'>
<p className='px-28 text-[2.5rem] font-playFair leading-[3.25rem] tracking-[-0.04rem]'>At AIP we believe: Philanthropists
can make a difference. 
Philanthropists want to make a difference.
And philanthropists, are best at inspiring each other.
After chatting with you, we build a plan to provide a perspective, identify sectors, help define philanthropic purpose. </p>
        </div>

        <JourneyArchetype/>
        <JourneyArchetype1 />

    </div>

  )
}

export default page