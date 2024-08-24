import React from 'react'
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
type Props={
    name:string,
}

const List = ({ name}:Props) => {
  return (
    <div className='bg-bgGray5 hover:bg-textPurple hover:text-white hover:italic p-5 rounded-[1.25rem] flex justify-between mb-3 group'>
        <p className="font-playFair font-medium group-hover:italic text-xl tracking-[.02rem] ">
  {name}
</p>
<div className='p-[0.375rem]' >
<ChevronRightIcon className="w-[0.438rem] h-[0.875rem] group-hover:text-white" />
</div>


    </div>
  )
}

export default List