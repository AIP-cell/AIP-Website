import React from 'react'
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
type Props={
    name:string,
}

const List = ({ name}:Props) => {
  return (
    <div className='tw-bg-bgGray5 hover:tw-bg-textPurple hover:tw-text-white hover:tw-italic tw-p-5 tw-rounded-[1.25rem] tw-flex tw-justify-between tw-mb-3 tw-group'>
        <p className="tw-font-playFair tw-font-medium group-hover:tw-italic tw-text-xl tw-tracking-[.02rem] ">
  {name}
</p>
<div className='tw-p-[0.375rem]' >
<ChevronRightIcon className="tw-w-[0.438rem] tw-h-[0.875rem] group-hover:tw-text-white" />
</div>


    </div>
  )
}

export default List