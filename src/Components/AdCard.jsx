import React from 'react'
import {AiFillStar} from 'react-icons/ai'
function AdCard({data}) {
    const {category,title,price,thumbnail,rating} = data;
    const random = Math.floor((Math.random()*5)+1);
    const emptyStar = 5- random;
    const divs = [];
    for (let i = 0; i <random ; i++) {
      divs.push(<AiFillStar className='text-[gold] ' key={i} />);
    }
    for (let i = 0; i < emptyStar; i++) {
        divs.push(<AiFillStar key={i + random} className="far fa-star text-[#ebebeb]"></AiFillStar>);
      }
  return (
    <div className='flex  w-[300px] m-3 h-[90px]'>
        <img src={thumbnail} className='h-[60px] my-1 w-[80px] object-cover' alt="" />
        <div className='px-3'>
        <p className='text-blue-500 text-[14px] font-bold dark:text-white'>{title}</p>
       <div className='flex '>{divs}</div>
        </div>
    </div>
  )
}

export default AdCard