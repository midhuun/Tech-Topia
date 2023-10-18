import React from 'react'
import { GrFormNext } from 'react-icons/gr';
import {BiSolidCartDownload} from 'react-icons/bi'
function CardThree({data}) {
    const {category,title,price,thumbnail} = data;
     console.log(data);
  return (
    <div className="card relative flex  hover:shadow-xl  h-[120px] border-r-[0.1px] dark:border-[#262626] border-[#dddfe0] p-3 my-4 group w-[340px]">
      <img className='w-[150px] h-[100px] object-cover' src={thumbnail} alt="" />
      <div className='h-full flex justify-between flex-col '>
      <div>
        <p className='uppercase opacity-80 px-3 text-[12px]'>{category}</p>
        <p className='text-blue-500 px-3 dark:text-white'>{title}</p>
        </div>
        <div className="flex justify-between items-center w-full">
        <p className='text-[20px] px-3 pt-4 justify-self-end dark:text-blue-500'>${price}</p>
        <div className=' flex items-center h-8 w-8 mt-2 hover:bg-yellow-500 dark:bg-[#495057] rounded-full bg-[#EAEAEA]  justify-center'>
        <BiSolidCartDownload className='text-white'  />
        </div>
        </div>
      </div>
        </div>
  )
}

export default CardThree