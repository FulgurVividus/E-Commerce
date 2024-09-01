import { memo } from "react";
import DeleteItem from "./DeleteItem";

const BasketItem = memo(function BasketItem({ product }) {
  return (
    <>
      <div className="w-full flex justify-between items-center md:items-start md:flex-col bg-gray-300 py-2 px-3 h-[250px] md:w-[200px] md:h-[290px]">
        <div className="h-auto w-28 md:w-full md:mx-auto flex justify-center items-center overflow-hidden">
          <img
            src={product.images.at(0)}
            alt={product.title}
            className="object-contain max-w-full max-h-full"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col items-end md:block">
          <div className="text-right md:text-left mb-2">
            <h6 className="text-lg">{product.title}</h6>
            <p>{product.price}$</p>
          </div>

          <DeleteItem productId={product.id} />
        </div>
      </div>
    </>
  );
});

export default BasketItem;
