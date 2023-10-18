import React from 'react'
import { product } from '../Products/Product';
import CardFour from './CardFour'
import {AiOutlineLeft} from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
function Recent() {
    const mobiles = product.slice(3,10);
  return (
    <>
    <div className='my-3 px-[5%]'>
    <div className='flex justify-between text-[14px] w-full py-4 border-b-2'>
       <h1 className='text-[20px] best  relative'>Recently Added</h1>
      <div className='flex items-center text-[#8598A9] dark:text-white'>
       <AiOutlineLeft />
       <AiOutlineRight />
      </div>
    </div>
     <div className="flex flex-wrap">
     {mobiles.map((e)=>{
        return(
            <CardFour key={e.id} data={e} />
        )
     })}
     </div>
    </div>
    </>
  )
}

export default Recent