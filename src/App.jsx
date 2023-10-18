import './App.css'
import { useState,useEffect } from 'react'
import Home from './Components/Home';
import Products from './Components/Products';
import Categories from './Components/Categories';
import Sale from './Components/Sale';
import Recent from './Components/Recent';
import Ads from './Components/Ads';
import Footer from './Components/Footer';
function App() {
  const [theme,setTheme] = useState("light");
  useEffect(()=>{
     if(theme ==="dark"){
      document.documentElement.classList.add("dark");
     }
     else{
      document.documentElement.classList.remove("dark");
     }
  },[theme])
  const toggleTheme = () =>{
    setTheme(theme === 'dark' ? 'light' :'dark');
  }
  return (
    <div className='dark:bg-[#181818] dark:text-white'>
    <div className='fixed hidden z-[999] lg:block left-[-15px] text-black font-bold  rounded-3xl bg-[#ccc] transform top-[60%] px-1 py-1 rotate-[270deg]'>
        <button onClick={toggleTheme} className='px-2 py-1 text-[14px] dark:bg-[#ccc] bg-white rounded-3xl'>Light</button>
        <button onClick={toggleTheme}  className='px-2 py-1 text-[14px] dark:bg-white rounded-3xl ml-2'>Dark</button>
    </div>
     <Home isDark={theme} />
     <Products />
     <Categories />
     <Sale />
     <Recent />
     <Ads />
     <Footer isDark={theme} />
    </div>
  )
}

export default App
