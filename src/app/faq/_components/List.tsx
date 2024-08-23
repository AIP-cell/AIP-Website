import React from 'react'
import Image from 'next/image';
import RightSvg from "@public/svg/Chevron_Right.svg";
type Props={
    name:string,
}

const List = ({ name}:Props) => {
  return (
    <div className='bg-bgGray5 hover:bg-textPurple  hover:text-white hover:italic  p-5 rounded-[1.25rem] flex justify-between mb-3'>
        <p className="font-playFair font-medium hover-italic text-xl tracking-[.02rem] ">
  {name}
</p>
<div className='p-[0.375rem]' >
<Image src={RightSvg} className='w-[1.438rem] h-[0.875rem] hover:text-white' alt='next' />
</div>


    </div>
  )
}

export default List