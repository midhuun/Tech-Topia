import React from 'react'
import { product } from '../Products/Product'
import AdCard from './AdCard';
import {BsSendFill} from 'react-icons/bs';
function Ads() {
    const top = product.slice(0,4);
    const bottom =product.slice(5,9);
    const sale = product.slice(3,7);
  return (
    <>
    <div className='flex px-[5%] w-full'>
     <div className="flex "> </div>
     <div className="flex w-full">
        <div className='p-3 w-[28%] '>
            <h1 className='text-[18px] pb-3 border-b-[2px]  ads'>Featured Products</h1>
            {top.map((data)=>{
                return(
                    <AdCard key={data.id} data={data} />
                )
            })}
        </div>
        <div className='p-3 w-[28%]'>
        <h1 className='text-[18px] pb-3 border-b-[2px] ads'>Top Selling Products</h1>
        {bottom.map((data)=>{
                return(
                    <AdCard key={data.id} data={data} />
                )
            })}
        </div>
        <div className='p-3 w-[28%]'>
        <h1 className='text-[18px] pb-3 border-b-[2px]  ads'>On Sale Products</h1>
        {sale.map((data)=>{
                return(
                    <AdCard key={data.id} data={data} />
                )
            })}
        </div>
        <img className='w-[20%] h-[400px] object-cover' src="https://electro.madrasthemes.com/wp-content/uploads/2019/04/footer-widget-img-01.jpg" alt="" />
     </div>
    </div>
    <div className="flex justify-between h-[70px] w-full bg-yellow-400">
    <div className="flex px-[5%] items-center">
        <BsSendFill size={25} />
        <p className='text-[24px] px-4'>Sign up to Newsletter</p>
        <p className='px-5'>...and receive <span className='font-bold'> $20 coupon for first shopping</span></p>
    </div>
    <div className='flex  items-center mx-[50px]'>
    <div className='flex justify-between bg-white dark:bg-[#333E48] rounded-3xl w-[400px] h-10 items-center '>
        <input className='h-9 rounded-l-3xl px-3 dark:bg-[#333E48] focus:outline-none' placeholder='Enter your email Address' type="text" name="" id="" />
        <button className='bg-[#333E48] dark:bg-black px-4 text-[14px] rounded-r-3xl h-10 text-white'>Sign Up</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Ads