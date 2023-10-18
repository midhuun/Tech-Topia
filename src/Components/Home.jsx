
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai';
import transport from '../assets/delivery-truck.png';
import {RxHamburgerMenu} from 'react-icons/rx';
import {BsSearch} from 'react-icons/bs';
import {LuGitCompare} from 'react-icons/lu';
import {TfiMenuAlt} from 'react-icons/tfi'
import {FiMenu} from 'react-icons/fi'
import Logo from '../assets/svgexport-9.svg'
import DarkLogo from '../assets/dark-logo.svg'
import watch from '../assets/smarwatch.png'
function Home({ isDark }) {
    console.log(isDark);
  return (
    <div>
      <div className="flex dark:text-black xl:hidden h-[60px] items-center justify-between bg-yellow-400">
        <div className='px-4 flex items-center'>
            <FiMenu size={25} />
            <img src={Logo} className='h-[20px] px-4' alt="" />
        </div>
        <div className="flex items-center">
            <BsSearch size={18} className='mx-3' />
            <AiOutlineUser size={20} className='mx-3' />
           <p className='relative'> 
           <HiOutlineShoppingBag size={20} className='mx-3 ' />
           <span className='font-bold bag absolute bottom-[-6px] rounded-full flex items-center justify-center h-[15px] w-[15px] text-[12px] right-[8px] bg-black text-white'>0</span>
           </p>
        </div>
      </div>
        <div className="xl:flex hidden p-2 pr-[30px] justify-between text-[13px] font-light w-full">
            <p className='pl-[50px]'>Welcome to Worldwide Electronics Store</p>
            <div className='flex'>
                <p className='flex px-4  border-r-2'><HiOutlineLocationMarker className='my-[3px] mx-1' />Store Locator</p>
                <p className='flex px-4 border-r-2'><img src={transport} className='my-[3px] mx-1' />Track Your Order</p>
                <p className='flex px-4 border-r-2'><HiOutlineShoppingBag className='my-[3px] mx-1' />Shop</p>
                <p className='flex px-4'><AiOutlineUser className='my-[3px] mx-1' />My Account</p>
            </div>
        </div>
        <hr />
        <div className="hidden xl:flex h-[90px] px-4 w-full items-center ">
        <a href=""> 
         {isDark==="light" ? (
        <img src={Logo} alt="Dark Image" />
      ) : (
        <img src={DarkLogo} alt="Light Image" />
      )}
       </a>
       <RxHamburgerMenu size={25} className='ml-[100px] mr-[15px]' />
       <div className='flex items-center border-2 w-[800px] justify-between dark:bg-[#212121] border-yellow-400 dark:border-none rounded-3xl '>
       <input type="text" placeholder='Search for Products' className='mx-3 focus:outline-none dark:bg-[#212121]  placeholder:text-sm p-2 w-[500px] rounded-[18px]' />
       <select className='text-sm dark:text-[#ccc] dark:bg-[#212121]' name="All"  id="">
        <option  value="All Categories"> All Categories</option>
       </select>
       <div className='h-[40px] ml-3 p-0  rounded-r-3xl flex items-center justify-center bg-yellow-400 w-[60px]'>
       <BsSearch className='dark:text-black' size={20} />
       </div>
       </div>
       <div className="flex justify-center px-[50px] items-center">
        <LuGitCompare className='mx-3' size={25} />
        <AiOutlineHeart size={25} className='mx-3' />
        <AiOutlineUser size={25} className='mx-3' />
        <p className='font-bold flex'><HiOutlineShoppingBag size={25} className='mx-3' />$0.00</p>
       </div>
        </div>
        <div className="hidden xl:flex mx-[30px] text-sm font-bold justify-between px-4 pt-5 ">
         <div className="flex items-center h-[40px] py-2">
            <h2 className='flex px-3 py-2 dark:text-black bg-yellow-400 rounded-t-lg'> <TfiMenuAlt className='mx-2 my-1'/>All Departments </h2>
            <h2 className='px-4 drop relative text-red-500'>All Pages</h2>
            <h2 className='px-4 '>Featured Brands </h2>
            <h2 className='px-4 '>Trending Styles </h2>
            <h2 className='px-4'>Gift Cards</h2>
            </div>
            <p className='px-4'>Free Shipping on Orders $50+</p>
        </div>
        <div className='h-[300px] sm:h-[600px] dark:text-black  w-full flex justify-between md:justify-center items-center dark:bg-black slide'>
            <p className='sm:text-[50px] text max-w-[120px]  sm:max-w-[300px] mx-4 sm:mx-6 md:leading-[45px] uppercase'>the new <br /> standard <br /> <span className='sm:text-[16px] text-[12px] font-bold'>Under favorable smartwatches</span> <br /> <span className='font-light text-[16px]'>from</span><br />
        <span className='font-bold'><sup>$</sup>750<sup>99</sup></span></p>
           <img src={watch} className='watch h-[100px] sm:h-[150px] md:[250px] lg:h-[400px] mx-4 ' alt="" />
        </div>
    </div>
  )
}

export default Home