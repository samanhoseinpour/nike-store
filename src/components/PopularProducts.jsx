import { ProductsCard } from './index';

const PopularProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[32px] font-montserrat xl:text-[64px] font-bold">
        Our <span className="text-coral-red">Popular</span> Products
      </h1>
      <p className="text-slate-gray">
        Experience top-noutch quality and style with our sought after
        selections. Discover a world of comfort, design and value.
      </p>
      <div className="mt-16">
        <ProductsCard />
      </div>
    </div>
  );
};

export default PopularProducts;
