import React from 'react'
import Products from './Products'
import { product } from '../Products/Product'
import CardThree from './CardThree';
function Sale() {
   const mobiles = product.slice(0,8);
   console.log(mobiles);
  return (
    <>
    <div className=' px-[5%]'>
    <div className='flex justify-between  text-[14px]   mx- w-full py-4 border-b-2'>
       <h1 className='text-[20px] best  relative'>Best Sellers</h1>
      <div className='flex text-[#8598A9] dark:text-white'>
        <p className='px-4 active py-1 border-[2px] border-yellow-500 dark:bg-yellow-500 rounded-2xl text-black'>Top 20</p>
        <p className='px-3 py-1'>Smart Phones & Tablets</p>
        <p className='px-3 py-1'>Laptops & Computers</p>
        <p className='px-3 py-1'>Video Cameras</p>
      </div>
    </div>
     <div className="flex flex-wrap">
     {mobiles.map((e)=>{
        return(
            <CardThree key={e.id} data={e} />
        )
     })}
     </div>
     <img src="https://electro.madrasthemes.com/wp-content/uploads/2018/04/home-v5-banner.png" alt="" />
    </div>
    </>
  )
}

export default Sale