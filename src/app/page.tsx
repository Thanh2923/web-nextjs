import Image from "next/image";
import Carousels from "../components/carousel/Carousel";
import { MainHome } from "../components/MainHome";
import MenuCategory from "../components/categories/MenuCategory";
import BestProducts from "../components/BestProduct/BestProducts";
import HotPromotion from "../components/HotPromotion";
import { ItemProduct } from "../components/product/ItemProduct";
import { TitleHome } from "../components/title-home/TitleHome";
import { LogoSaleHome } from "../components/LogoSaleHome/LogoSaleHome";

export default function Home() {
  return (
    <>
    <div className="w-full banner">
      <Carousels/>
    </div>
     <div className="w-[90%] m-auto">
     <MainHome/>
     </div>
    </>
  );
}
