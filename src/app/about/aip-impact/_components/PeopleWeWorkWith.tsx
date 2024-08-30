import ATeamCard from '@/components/cards/aCards/ATeamCard'
import PTeamCard from '@/components/cards/pCards/PTeamCard'
import React from 'react'

const PeopleWeWorkWith = () => {
  return (
    <div className='tw-pt-[12.5rem]'>
        <h2 className='tw-text-h2 tw-font-playFair tw-text-darkBrown '>
        People We <i className='tw-text-textPurple'> Work With</i>
        </h2>
        <div className='tw-pt-[5rem]'>
            <div className=' tw-flex tw-gap-[]'>
                <ATeamCard linkedin={false}/>
                <PTeamCard linkedin={false}/>
            </div>
        </div>
    </div>
  )
}

export default PeopleWeWorkWith