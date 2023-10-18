import React from 'react'
import { GrFormNext } from 'react-icons/gr';
function CardTwo({data}) {
    const {category,title,price,thumbnail,discountPercentage} = data;
    const discountedPrice = Math.floor(price-(price*(discountPercentage/100)));
   
  return (
    <div className="card relative flex bg-white dark:bg-[#181818] pb-5 flex-col hover:shadow-xl items-center h-[300px] border-r-[0.1px] border-[#dddfe0] m-[1px] p-3 group w-[260px]">
          <p className="text-[12px] uppercase self-start dark:text-[#6E767D] text-[#768B9E]">{category}</p>
          <p className="py-2 max-w-[210px] text-blue-600 text-[14px] self-start font-bold whitespace-nowrap">{title}</p>
          <img className="h-[160px] object-cover " src={thumbnail} alt="" />
          <div className="flex justify-between items-center w-full p-3">
          <p className="dark:text-blue-500 relative py-2 text-left  md:text-[14px] line-through">${price}</p>
          <p className="dark:text-red-500 absolute left-[20px] text-red-500 -bottom-1 py-2 text-left  md:text-[20px] ">${discountedPrice}</p>
          <p></p>
          <button className="h-8 w-8 flex justify-center items-center hover:bg-yellow-500 rounded-full bg-[#EAEAEA] shadow-xl"><GrFormNext  className=" text-white"  /></button>
          </div>
        </div>   
 
  )
}

export default CardTwo