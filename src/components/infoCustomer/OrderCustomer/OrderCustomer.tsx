"use client"
import React, { useState } from 'react';
import { BsCartCheck } from "react-icons/bs";
const OrderCustomer = () => {
  const [selectedTab, setSelectedTab] = useState('Tất cả');
  const tabs = [
    'Tất cả',
    'Chờ xử lý',
    'Đã xác nhận',
    'Đang chuyển hàng',
    'Đang giao hàng',
    'Đã hủy',
    'Thành công',
  ];

  return (
 
   <div className="w-full mt-5 bg-white p-6">
   <div className="flex justify-between items-center">
     <h2 className="text-xl font-bold">Đơn hàng đã mua</h2>
     <button className="text-sm text-blue-500">Thay đổi</button>
   </div>
   <div className="text-sm text-gray-500">Từ 20/10/2023 - 20/10/2024</div>
   
   {/* Tabs */}
   <div className="flex space-x-2 mt-4">
     {tabs.map(tab => (
       <button
         key={tab}
         className={`px-4 py-2 rounded-lg ${
           selectedTab === tab
             ? 'bg-slate-800 text-white'
             : 'bg-gray-100 text-gray-700'
         }`}
         onClick={() => setSelectedTab(tab)}
       >
         {tab}
       </button>
     ))}
   </div>

   {/* No Orders */}
   <div className="flex flex-col items-center mt-16">
   <BsCartCheck  className='text-[50px] text-red-500'/>
     <h3 className="mt-4 text-lg font-bold">Rất tiếc, không tìm thấy đơn hàng nào phù hợp</h3>
     <p className="mt-2 text-gray-500">Vẫn còn rất nhiều sản phẩm đang chờ bạn</p>

     {/* Suggestion Buttons */}
     <div className="mt-6 space-x-2">
       <button className="px-4 py-2 border rounded-lg">Tivi</button>
       <button className="px-4 py-2 border rounded-lg">Tủ lạnh</button>
       <button className="px-4 py-2 border rounded-lg">Máy lạnh</button>
       <button className="px-4 py-2 border rounded-lg">Máy giặt</button>
       <button className="px-4 py-2 border rounded-lg">Gia dụng</button>
     </div>

     <button className="mt-8 text-blue-500 text-sm">Về trang chủ</button>
   </div>
 </div>
  );
};

export default OrderCustomer;
