import React from 'react';
import {GrFormNext} from 'react-icons/gr';

function Card({data}) {
   const {category,title,price,thumbnail} = data;
  return (
    
    <div className="card relative flex flex-col hover:shadow-xl items-center h-[320px] border-r-[0.1px] border-[#dddfe0] m-3 p-3 group w-[250px]">
            <p className="text-[12px] uppercase self-start dark:text-[#6E767D] text-[#768B9E]">{category}</p>
            <p className="py-2 max-w-[210px] self-start font-bold">{title}</p>
            <img className="h-[180px] object-cover py-3" src={thumbnail} alt="" />
            <div className="flex justify-between items-center w-full p-3">
            <p className="dark:text-blue-500 py-2 text-left  md:text-[20px]">${price}</p>
            <button className="h-8 w-8 flex justify-center items-center hover:bg-yellow-500 rounded-full bg-[#EAEAEA] shadow-xl"><GrFormNext  className=""  /></button>
            </div>
          </div>   
   
  )
}

export default Card