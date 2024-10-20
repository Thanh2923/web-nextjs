"use client"
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation"; // Sử dụng usePathname để lấy đường dẫn hiện tại
const Footer = () => {
  const pathname = usePathname();
  const isAdmin = pathname === '/admin'; // Kiểm tra nếu đường dẫn là /admin

  if (isAdmin) return null; // Nếu là trang admin thì ẩn footer bằng cách trả về null

  return (
    <section>
      <div className="mt-5 border-t-2 bg-white border pt-9">
        <footer className="lg:container m-auto">
          <Image
            src="/designImage/imageLogo/logoNoBackground/2.png"
            width={50}
            height={50}
            className="w-[200px] m-auto h-[200px]"
            alt="Logo"
          />
          <section>
            <div className="flex justify-between">
              <div className="w-[70%]">
                <div className="flex items-baseline justify-between">
                  <div className="w-[50%] flex items-baseline justify-between">
                    <div className="mr-5 w-[25%]">
                      <p className="text-[12px] border-spacing-1 text-black">
                        DATN-TEAM-YOUNG-TECH...
                      </p>
                    </div>
                    <div className="w-[25%]">
                      <ul className="block">
                        <li>
                          <a
                            href=""
                            className="text-[12px] border-spacing-1 text-gray-700"
                          >
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-[12px] border-spacing-1 text-gray-700"
                          >
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-[12px] border-spacing-1 text-gray-700"
                          >
                            Facebook
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-[50%] flex items-baseline justify-between">
                    <div className="w-[20%]">
                      <p className="text-[12px] border-spacing-1 text-black">
                        WEBSITE-TECH (@2024)
                      </p>
                    </div>
                    <div className="w-[30%]">
                      <ul className="block">
                        <li>
                          <a
                            href=""
                            className="text-[12px] border-spacing-1 text-gray-700"
                          >
                            Website Development BY
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-[12px] border-spacing-1 text-gray-700"
                          >
                            Italy
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-[12px] border-spacing-1 text-gray-700"
                          >
                            Nam
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-[12px] border-spacing-1 text-gray-700"
                          >
                            Thanh
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-[12px] border-spacing-1 text-gray-700"
                          >
                            Diang
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-[12px] border-spacing-1 text-gray-700"
                          >
                            Han
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[30%]">
                <Image
                  src="/designImage/imageLogo/logoBackground/1.png"
                  width={50}
                  height={50}
                  alt="Logo Background"
                />
              </div>
            </div>
          </section>
        </footer>
      </div>
    </section>
  );
};

export default Footer;

