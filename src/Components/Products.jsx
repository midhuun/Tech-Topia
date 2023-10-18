import React, { useState } from "react";
import { product } from "../Products/Product";
import { GrFormNext } from "react-icons/gr";
import {GrFormNextLink} from 'react-icons/gr';
import Card from "./Card";
function Products() {
    const Featured =product.slice(0,8);
    const sale = product.slice(9,17);
    const top = product.slice(18,26);
  const [activeTab, setActiveTab] = useState("Featured");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  let selectedData = [];
  if (activeTab === "Featured") {
    selectedData = Featured;
  } else if (activeTab === "sale") {
    selectedData = sale;
  } else if (activeTab === "top") {
    selectedData = top;
  }
  return (
    <>
      <div className=" flex justify-center flex-wrap text-[12px] sm:text-base">
        <div className="flex justify-end my-4 mx-3 bg-[#F0F0F0] dark:bg-[#181818] items-center w-[340px] h-[150px]">
          <img
            src="https://i.dummyjson.com/data/products/1/3.jpg"
            className="object-cover w-[150px]"
            alt=""
          />
          <div>
            {" "}
            <p className="uppercase font-light px-3">
              catch big <span className="font-bold">deals</span>on the Iphone X
            </p>
            <button className="px-3 flex font-bold">
              Shop now{" "}
              <GrFormNext className="m-1 h-5 w-5 rounded-full bg-yellow-400" />
            </button>
          </div>
        </div>
        <div className="flex justify-end  my-4 mx-3 bg-[#F0F0F0] dark:bg-[#181818] items-center w-[340px] h-[150px]">
          <img
            src="https://i.dummyjson.com/data/products/4/4.jpg"
            className="object-cover h-[100px] w-[150px]"
            alt=""
          />
          <div>
            {" "}
            <p className="uppercase font-light px-3">
              catch big <span className="font-bold">deals</span> on the Samsung
            </p>
            <button className="px-3 flex font-bold">
              Shop now{" "}
              <GrFormNext className="m-1 h-5 w-5 rounded-full bg-yellow-400" />
            </button>
          </div>
        </div>
        <div className="flex justify-end  my-4 mx-3 bg-[#F0F0F0] dark:bg-[#181818] items-center w-[340px] h-[150px]">
          <img
            src="https://i.dummyjson.com/data/products/8/1.jpg"
            className="object-cover w-[150px]"
            alt=""
          />
          <div>
            {" "}
            <p className="uppercase font-light px-3">
              catch big <span className="font-bold">deals</span> on the
              Microsoft store
            </p>
            <button className="px-3 font-bold flex">
              Shop now{" "}
              <GrFormNext className="m-1 h-5 w-5 rounded-full bg-yellow-400" />
            </button>
          </div>
        </div>
        <div className="flex justify-end my-4 mx-3 bg-[#F0F0F0] dark:bg-[#181818] items-center w-[340px] h-[150px]">
          <img
            src="https://i.dummyjson.com/data/products/2/1.jpg"
            className="object-cover w-[150px]"
            alt=""
          />
          <div>
            {" "}
            <p className="uppercase font-light px-3">
              catch big <span className="font-bold">deals</span>on the Iphone 12
            </p>
            <button className="px-3 flex font-bold">
              Shop now{" "}
              <GrFormNext className="m-1 h-5 w-5 rounded-full bg-yellow-400" />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex-row flex flex-col justify-center items-center lg:items-start md:ml-[38px]  ">
        <div className="md:w-[380px]  w-[280px] h-[90%] border-2 rounded-lg m-2 mt-6 border-yellow-400">
          <h1 className="px-4 pt-4 md:text-[24px]">Special Offer</h1>
          <div className="w-full flex flex-col items-center justify-center ">
            <img
              className="py-5 md:max-h-[300px] object-cover md:max-w-[250px]"
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png"
              alt=""
            />
            <p className="font-bold whitespace-wrap text-[12px] pb-3 text-blue-500 dark:text-white">
              Game Console Controller + USB 3.0 Cable
            </p>
          </div>
        </div>
        <div className="w-full my-3">
          <div className="flex sales sm:text-[20px] pb-4 justify-center">
            <p
              className={`px-3 cursor-pointer  ${activeTab === "Featured" ? "active" : "" }`} onClick={() => handleTabClick("Featured")} > Featured
            </p>
            <p className={`px-3 cursor-pointer ${activeTab === "sale" ? "active" : ""}`} onClick={() => handleTabClick("sale")}> On Sale </p>
            <p  className={`px-3 cursor-pointer ${ activeTab === "top" ? "active" : ""   }`} onClick={() => handleTabClick("top")} >Top Rated </p>
          </div>
          <hr />
          <div className="flex mx-4 justify-center sm:justify-start flex-wrap">
         {selectedData.map((data)=>{
            return (
                <Card key={data.id} data={data} />
            )
         })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
