import React from 'react';
import {GrFormNext} from 'react-icons/gr';

function Card({data}) {
   const {category,title,price,thumbnail} = data;
  return (
    
    <div className="card relative flex flex-col hover:shadow-xl items-center h-[300px] border-r-[0.1px] border-[#dddfe0] m-3 p-3 group w-[170px]">
      <div className='hidden hover:group-hover:block absolute h-[30px] top-[-20px] shadow-xl'>Hello</div>
            <p className="text-[12px] uppercase self-start dark:text-[#6E767D] text-[#768B9E]">{category}</p>
            <p className="py-2 whitespace-nowrap max-w-[210px] text-[12px] self-start ">{title}</p>
            <img className="h-[140px] object-cover" src={thumbnail} alt="" />
            <div className="flex justify-between items-center w-full p-3">
            <p className="dark:text-blue-500 py-1 text-left  md:text-[20px]">${price}</p>
            <button className="h-6 w-6 flex justify-center items-center hover:bg-yellow-500 rounded-full bg-[#EAEAEA] shadow-xl"><GrFormNext  className=""  /></button>
            </div>
          </div>   
   
  )
}

export default Card;