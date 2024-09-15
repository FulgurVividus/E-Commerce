import { memo } from "react";
import { useNavigate } from "react-router-dom";

const ProductsItem = memo(function ProductsItem({ product }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() =>
          navigate(`/products/${product.id}`, { state: { product } })
        }
        className="cursor-pointer w-full flex justify-between items-center md:items-start flex-row md:flex-col bg-gray-300 py-2 px-3 h-[250px] md:w-[200px] md:h-[290px]"
      >
        <div className="h-auto w-28 md:w-full md:mx-auto flex justify-center items-center overflow-hidden">
          <img
            loading="lazy"
            src={product.images.at(0)}
            alt={product.title}
            className="object-contain max-w-full max-h-full select-none"
          />
        </div>

        <div className="text-right md:text-left">
          <h6 className="text-lg">{product.title}</h6>
          <p>{product.price}$</p>
        </div>
      </div>
    </>
  );
});

export default ProductsItem;
