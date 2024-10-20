"use client"
import Link from 'next/link'
import { TfiMenu } from "react-icons/tfi";
import { useState } from 'react';
export const MenuCategory = () => {
  
  const [isShow, SetisShow] = useState<boolean>(false)

  const handlCickShow = () =>{
    SetisShow(!isShow)

   }
  return (
<>
<div className="ml-4 destop hidden lg:block " id="menu">
    <div className="">
       
      <ul style={textColor} className="p-0 flex items-center">
        
        <li className="mx-4 my-0 ">
          <Link
            className="capitalize font-sans whitespace-nowrap text-gray-900 border-b-2 border-transparent duration-300 text-[16px] transition-all hover:border-b-red-700 cursor-pointer font-semibold hover:text-black pb-[20px]"
            href="/"
          >
            Điện thoại
          </Link>
        </li>
        <li className="mx-4 my-0 ">
          <Link
            className="capitalize font-sans whitespace-nowrap text-gray-900 border-b-2 border-transparent duration-300 text-[16px] transition-all hover:border-b-red-700 cursor-pointer font-semibold hover:text-black pb-[20px]"
            href="/"
          >
            Tivi
          </Link>
        </li>
        <li className="mx-4 my-0 ">
          <Link
            className="capitalize font-sans whitespace-nowrap text-gray-900 border-b-2 border-transparent duration-300 text-[16px] transition-all hover:border-b-red-700 cursor-pointer font-semibold hover:text-black pb-[20px]"
            href="/"
          >
            Tủ lạnh
          </Link>
        </li>
        <li className="mx-4 my-0 ">
          <Link
            className="capitalize font-sans whitespace-nowrap text-gray-900 border-b-2 border-transparent duration-300 text-[16px] transition-all hover:border-b-red-700 cursor-pointer font-semibold hover:text-black pb-[20px]"
            href="/"
          >
            Máy tính
          </Link>
        </li>
        <li className="mx-4 my-0 ">
          <Link
            className="capitalize font-sans whitespace-nowrap text-gray-900 border-b-2 border-transparent duration-300 text-[16px] transition-all hover:border-b-red-700 cursor-pointer font-semibold hover:text-black pb-[20px]"
            href="/"
          >
            Đồng Hồ
          </Link>
        </li>
      </ul>
    </div>
  </div>

 
  <>
  <div  className="ml-4 mobi block lg:hidden  " id="menu">
<div className="">
<TfiMenu onClick={handlCickShow} className='relative cursor-pointer font-bold text-[30px] z-50' />
{isShow && 
  <ul style={textColor} className="p-0 absolute z-50  border   bg-white shadow-2xl ">
    
    <li className="pb-5 ">
      <Link
        className="capitalize font-sans whitespace-nowrap text-gray-900 border-b-2 border-transparent duration-300 text-[16px] transition-all hover:border-b-red-700 cursor-pointer font-semibold hover:text-black pb-[20px]"
        href="/"
      >
        Điện thoại
      </Link>
    </li>
    <li className="pb-5 ">
      <Link
        className="capitalize font-sans whitespace-nowrap text-gray-900 border-b-2 border-transparent duration-300 text-[16px] transition-all hover:border-b-red-700 cursor-pointer font-semibold hover:text-black pb-[20px]"
        href="/"
      >
        Tivi
      </Link>
    </li>
    <li className="pb-5 ">
      <Link
        className="capitalize font-sans whitespace-nowrap text-gray-900 border-b-2 border-transparent duration-300 text-[16px] transition-all hover:border-b-red-700 cursor-pointer font-semibold hover:text-black pb-[20px]"
        href="/"
      >
        Tủ lạnh
      </Link>
    </li>
    <li className="pb-5 ">
      <Link
        className="capitalize font-sans whitespace-nowrap text-gray-900 border-b-2 border-transparent duration-300 text-[16px] transition-all hover:border-b-red-700 cursor-pointer font-semibold hover:text-black pb-[20px]"
        href="/"
      >
        Máy tính
      </Link>
    </li>
    <li className="pb-5 ">
      <Link
        className="capitalize font-sans whitespace-nowrap text-gray-900 border-b-2 border-transparent duration-300 text-[16px] transition-all hover:border-b-red-700 cursor-pointer font-semibold hover:text-black pb-[20px]"
        href="/"
      >
        Đồng Hồ
      </Link>
    </li>
  </ul>}
</div>
</div>
  </>
 
</>
  )
}

const textColor = {
  color: "#767676",
  padding: "15px",
};
