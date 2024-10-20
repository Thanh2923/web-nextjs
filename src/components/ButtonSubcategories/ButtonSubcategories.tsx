"use client";
import FilterProduct from "./FilterProduct"
import React, { useState, useEffect } from 'react';

const ButtonSubcategories = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Kiểm tra vị trí cuộn của trang
      if (window.pageYOffset > 400) {
        setIsSticky(false); 
      
      } else {
        setIsSticky(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>

<div className='w-screen bg-white mb-5'>
  <div 
    id="buttonSubcategories"  
    className={`transition-all duration-300 ${isSticky ? 'fixed top-[100px] border-t-1 left-0 w-full z-10 bg-white shadow-lg' : ''}`}
  >
    <div className="flex flex-wrap py-5 px-5 gap-3 items-center sticky top-50 left-0 bg-white z-10">
      <FilterProduct />
      <button className="bg-slate-200 py-2 shadow-sm lg:text-[15px] hover:bg-slate-900 hover:text-white px-7 rounded-md  sm:px-5 sm:text-xs">
        Iphone
      </button>
      <button className="bg-slate-200 py-2 shadow-sm lg:text-[15px] hover:bg-slate-900 hover:text-white px-7 rounded-md  sm:px-5 sm:text-xs">
        Samsung
      </button>
      <button className="bg-slate-200 py-2 shadow-sm lg:text-[15px] hover:bg-slate-900 hover:text-white px-7 rounded-md  sm:px-5 sm:text-xs">
        Oppo
      </button>
      <button className="bg-slate-200 py-2 shadow-sm lg:text-[15px] hover:bg-slate-900 hover:text-white px-7 rounded-md  sm:px-5 sm:text-xs">
        Xiaomi
      </button>
    </div>
  </div>
</div>

    </>
  );
};




export default ButtonSubcategories
