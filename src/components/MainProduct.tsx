
import BannerTwo from './banner-two/BannerTwo';
import ButtonSubcategories from './ButtonSubcategories/ButtonSubcategories';
import { ItemProduct } from './product/ItemProduct';
import { DataProduct } from '@/app/until/dataProduct';
import SeeMore from './see-more/SeeMore';


const MainProduct: React.FC = () => {
 

  return (
    <>
  <div className='w-full flex flex-col justify-center items-center'>
    <main className='w-[95%] mt-5'>
    <BannerTwo />
       <div className='w-full rounded-xl mb-5 bg-white'>

      
          <ButtonSubcategories />
        
        <div className="px-5 grid justify-center  items-center grid-cols-2 lg:grid-cols-5 gap-2">
        <ItemProduct data={DataProduct} />
        </div>
        
        <SeeMore />
       
        </div>
    </main>
  </div>
      
    </>
  );
};

export default MainProduct;
