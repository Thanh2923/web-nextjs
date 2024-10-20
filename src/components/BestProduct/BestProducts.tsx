"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TitleHome } from "../title-home/TitleHome";
import { IoIosStar } from "react-icons/io";
import { LuHeart } from "react-icons/lu";
import SeeMore from "../see-more/SeeMore";

// Cập nhật đường dẫn ảnh sử dụng đường dẫn tĩnh từ thư mục `public`
const listImg = [
  {
    id: 1,
    image: "/designImage/imageProducts/dienthoai/ip1.png",
    price: 34900000,
    name: "Iphone 16 Pro Max",
  },
  {
    id: 2,
    image: "/designImage/imageProducts/dienthoai/ip2.png",
    price: 28990000,
    name: "Iphone 16 Pro ",
  },
  {
    id: 3,
    image: "/designImage/imageProducts/dienthoai/ip3.jpg",
    price: 8990000,
    name: "Iphone 11 ",
  },
  {
    id: 4,
    image: "/designImage/imageProducts/dienthoai/ip4.jpg",
    price: 10990000,
    name: "Iphone 12 ",
  },
  {
    id: 5,
    image: "/designImage/imageProducts/dienthoai/ip5.jpg",
    price: 28590000,
    name: "Iphone 14 Pro Max ",
  },
  {
    id: 6,
    image: "/designImage/imageProducts/dienthoai/ip6.jpg",
    price: 13990000,
    name: "Iphone 13 ",
  },
  {
    id: 7,
    image: "/designImage/imageProducts/dienthoai/ip7.jpg",
    price: 19590000,
    name: "Iphone 15 ",
  },
  {
    id: 8,
    image: "/designImage/imageProducts/dienthoai/ip8.jpeg",
    price: 13990000,
    name: "Iphone 14 Plus ",
  },
  {
    id: 9,
    image: "/designImage/imageProducts/dienthoai/ip9.jpg",
    price: 13990000,
    name: "Iphone 15  ",
  },
  {
    id: 10,
    image: "/designImage/imageProducts/dienthoai/ip10.jpg",
    price: 13990000,
    name: "Iphone 13  ",
  },
];

const BestProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (listImg.length / 5)); // Chuyển qua nhóm 5 sản phẩm tiếp theo
    }, 3000);

    return () => clearInterval(intervalId); // Dọn dẹp interval khi component bị hủy
  }, []);

  

  const visibleProducts = listImg.slice(currentIndex * 5, (currentIndex + 1) * 5);

  return (
    <>
      <TitleHome title="Sản phẩm bán chạy nhất" />
    <div className="w-full  bg-white rounded-lg ">
    <section className="lg:container px-5 pt-5 gap-2 grid lg:grid-cols-5 grid-cols-2 gap-2overflow-hidden">
    {
      visibleProducts.map(item=>(
        <>
          <div key={item.id} className='flex relative  group flex-col  my-3 hover:shadow-lg border px-3 rounded-lg py-3'>
              <p className='mb-5 overflow-hidden text-[11px] w-[70px]  flex justify-center bg-slate-200'>Trả góp 0%</p>
              
  <Image 
    src={item.image}  
    alt="Logo" 
    className='transform transition-transform duration-500 ease-in-out group-hover:-translate-y-4'
    width={200}  
    height={250} 
  />
  <h3 className='pt-5 font-semibold transition-colors duration-500 group-hover:text-blue-600 w-full'>
    {item.name}
  </h3>

         <div className='print-screen pt-1 w-full flex items-center gap-2'>
              <span className=' text-[12px] bg-slate-200 px-2 rounded-lg'>6.9</span>
              <span className=' text-[12px] bg-slate-200 px-2 rounded-lg'>Super Retina XDR</span>
         </div>
         <div className='gb w-full py-3'>
            <ul className='flex items-center gap-2'>
              <li className='border px-2 py-1 rounded-lg'>256Gb</li>
              <li className='border px-2 py-1 rounded-lg'>512Gb</li>
              <li className='border px-2 py-1 rounded-lg' >1Tb</li>
            </ul>
         </div>
         <strong className='price w-full text-[16px] text-red-600 '>{item.price}₫</strong>
         <div className='start flex items-center  py-1 text-slate-500'>
         <IoIosStar className="text-yellow-400 " />
         <span className=''>4.3</span> (7)
         
         </div>
         <div data-tooltip={`-10%}`} className="mt-3 button">
                          <div className="button-wrapper">
                            <div className="text text-[.9rem]">Mua ngay</div>
                            <span className="icon">
                              <svg
                                viewBox="0 0 16 16"
                                className="bi bi-cart2"
                                fill="currentColor"
                                height="16"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
         <LuHeart className="text-[1.6rem] text-gray-500 absolute top-1 hover:text-red-600 cursor-pointer right-1" />
             </div>
        </>
      ))
    }
      </section>
       <SeeMore/>
    </div>
    
    </>
  );
};

export default BestProducts;
