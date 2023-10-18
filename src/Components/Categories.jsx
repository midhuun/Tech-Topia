import { useState } from "react"
import CardTwo from "./CardTwo";
import { product } from "../Products/Product";
function Categories() {
    const [isactive, setIsactive] = useState("best");
    const top = product.slice(6,10);
    const bottom =product.slice(5,9);
    const sale = product.slice(3,7);
    const handleActive = (tab) => {
        setIsactive(tab);
    }

    return (
        <div className="w-full bg-[#f4f4f4] pb-[50px] dark:bg-[#212121]">
            <div className="flex  flex-nowrap rate-items cursor-pointer h-[80px] items-center overflow-x-scroll overflow-y-hidden md:overflow-auto justify-center">
                <p onClick={() => handleActive("best")} className={` ${isactive === "best" ? "active" : ""} px-4 rate`}>Best Deals</p>
                <p onClick={() => handleActive("tv")} className={` ${isactive === "tv" ? "active" : ""} px-4 rate`}>TV  Audio</p>
                <p onClick={() => handleActive("cam")} className={` ${isactive === "cam" ? "active" : ""} px-4 rate`}>Cameras</p>
                <p onClick={() => handleActive("audio")} className={` ${isactive === "audio" ? "active" : ""} px-4 rate`}>Audio</p>
                <p onClick={() => handleActive("smart")} className={` ${isactive === "smart" ? "active" : ""} px-4 rate`}>Smart Phones</p>
                <p onClick={() => handleActive("gps")} className={` ${isactive === "gps" ? "active" : ""} px-4 whitespace-nowrap rate`}>Gps & Navi</p>
                <p onClick={() => handleActive("computer")} className={` ${isactive === "computer" ? "active" : ""} px-4 rate`}>Computers</p>
                <p onClick={() => handleActive("port")} className={` ${isactive === "port" ? "active" : ""} px-4 rate`}>Portable Audio</p>
                <p onClick={() => handleActive("accessories")} className={` ${isactive === "accessories" ? "active" : ""} px-4 rate`}>Accessories</p>
            </div>
            <hr />
            <div className="flex flex-wrap w-full">
           <div className="flex flex-wrap w-[34.6%]">
            {top.map((data)=>{
                return (
                    <CardTwo key={data.id} data={data} />
                )
            })}
            </div>
            <div className="min-h-full relative flex flex-col pt-3 items-center bg-white  w-[25%]">
            <div className="absolute flex left-4 bottom-7">
             <div className="border-[2px] mx-2 h-[70px] w-[70px]">
                <img src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/gadtet-150x150.png" alt="" />
             </div>
             <div className="border-[2px] mx-2 h-[70px] w-[70px]">
                <img src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/gade1-150x150.png" alt="" />
             </div>
             <div className="border-[2px] mx-2 h-[70px] w-[70px]">
                <img src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png" alt="" />
             </div>
            </div>
            <p className="text-[13px] px-2 self-start  dark:text-[#6E767D] text-[#768B9E]">Game Consoles</p>
            <p className="py-2 px-2 max-w-[210px] text-blue-600 text-[14px] self-start font-bold whitespace-nowrap">Game Console Controller + USB 3.0 Cable</p>
             <img src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal.png" alt="" />
            </div>
            <div className="flex flex-wrap w-[34.6%]">
            {bottom.map((data)=>{
                return (
                    <CardTwo key={data.id} data={data} />
                )
            })}
            </div>
            </div>
        </div>
    )
}

export default Categories;
