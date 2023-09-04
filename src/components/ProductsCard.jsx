import { products } from '../constants';
import { star } from '../assets/icons';

const ProductsCard = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-10 max-sm:justify-center">
      {products.map((product) => (
        <div
          key={product.name}
          className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl"
        >
          <img
            src={product.imgURL}
            alt={product.name}
            className="cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
          />
          <div className="flex items-center gap-2 mt-4">
            <img src={star} alt="star" className="inline-block" />
            <span>(4.5)</span>
          </div>
          <h3 className="font-bold mt-3">{product.name}</h3>
          <p className="text-coral-red font-bold mt-1">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
