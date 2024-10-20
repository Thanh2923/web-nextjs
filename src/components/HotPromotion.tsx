
  import "./HotPromotion.css";
import { LogoSaleHome } from "./LogoSaleHome/LogoSaleHome";
import { ItemProduct } from "./product/ItemProduct";
import SeeMore from "./see-more/SeeMore";
import { TitleHome } from "./title-home/TitleHome";
import { DataProduct } from "@/app/until/dataProduct";


  const HotPromotion = () => {
    return (
      <>
       <TitleHome title=" Khuyến mãi Online"/>
       <section className="w-full bg-white ">
         <LogoSaleHome/>
         <div className="px-5 grid justify-center  items-center grid-cols-2 lg:grid-cols-5 gap-2">
          <ItemProduct data={DataProduct}/>
          
          </div>
          <SeeMore/>
       </section>
       
      </>
    );
  };

  export default HotPromotion;

 
  const buttonStyle = {
    backgroundColor: "pink",
    padding: "7px 12px",
    width: "100%",
    borderRadius: "3px",
    boxShadow: "0 4px gray",
  };
